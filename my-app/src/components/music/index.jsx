import { useSelector, useStore } from "react-redux";
import { useState, useRef } from "react";
import { selectMusic, setTime } from '../../slice/musicSlice'

import Butterfly from './Butterfly.mp3'
import Suppermassive from './Suppermassive.mp3'
import Time from './Time.mp3'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Music(props){
    const music = useSelector(selectMusic)
    const musicStore = useStore()
    const dispatch = useDispatch()
    let loadedMusic = useRef({})
    const [activeMusic, setActiveMusic] = useState({id: null, index: null})
    const activeInterval = useRef()
    const [musicPointPosition, setMusicPointPosition] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    async function playTrack(id, index){
        if(loadedMusic.current[id]){
            let prevId;
            prevId = activeMusic.id;
            if(id === prevId){
                if(isPaused){
                    clearInterval(activeInterval.current) 
                } else {
                    setStoreTime(index)
                }
                togglePause()
            } else {
                setActiveMusic({id, index})
                if(!isPaused){
                    setIsPaused(!isPaused)
                }
                clearInterval(activeInterval.current) 
                setStoreTime(index)
                loadedMusic.current[prevId].pause()
                loadedMusic.current[id].play()
            }
        } else {
            loadTrack(id, () => {
                let prevId;
                if(activeMusic.id){
                    prevId = activeMusic.id
                }
                setActiveMusic({id, index})
                if(prevId){
                    loadedMusic.current[prevId].pause();
                }
                if(activeInterval.current){
                    clearInterval(activeInterval.current)
                }
                setStoreTime(index)
                loadedMusic.current[id].play()
                setIsPaused(true)
            })
            
        }
        
    }

    const loadTrack = (id, func = () => {}) => {
        let audio = new Audio();

        if(id === '10078'){
            audio.src = Butterfly
            audio.currentTime = 0
        }
        if(id === '10077'){
            audio.src = Suppermassive
            audio.currentTime = 120
            console.log('Suppermassive')
        }
        if(id === '10076'){
            audio.src = Time
            audio.currentTime = 72
        }

        audio.onloadedmetadata = function(){
            loadedMusic.current = ({...loadedMusic.current, [id]: audio})
            func()
        }
    }

    const switchTrack = (string) => {
        if(string === 'right'){
            const currentIndex = activeMusic.index;
            const nextId = music[currentIndex + 1].id.toString();
            if(!loadedMusic[nextId]){
                loadTrack(nextId, () => {
                    let prevId = activeMusic.id
                    setActiveMusic({id: nextId, index: currentIndex + 1})
                    loadedMusic.current[prevId].pause();
                    if(activeInterval.current){
                        clearInterval(activeInterval.current)
                    }
                    setStoreTime(currentIndex + 1)
                    loadedMusic.current[nextId].play()
                })
            }
        } else {
            const currentIndex = activeMusic.index;
            const nextId = music[currentIndex - 1].id.toString();
            if(!loadedMusic[nextId]){
                loadTrack(nextId, () => {
                    let prevId = activeMusic.id
                    setActiveMusic({id: nextId, index: currentIndex - 1})
                    loadedMusic.current[prevId].pause();
                    if(activeInterval.current){
                        clearInterval(activeInterval.current)
                    }
                    setStoreTime(currentIndex - 1)
                    loadedMusic.current[nextId].play()
                })
            }
        }
    }

    const setCurrentTime = (event) => {
        let bounds = event.target.getBoundingClientRect();
        let x = event.clientX - bounds.left;

        loadedMusic.current[activeMusic.id].pause();
        clearInterval(activeInterval.current);

        let currentSec = Math.floor(music[activeMusic.index].fullTime
            .split(':')
            .reduce((previousValue, item, index) => index === 0 ? previousValue += parseInt(item) * 60 : previousValue += parseInt(item), 0) * Math.floor(x / bounds.width * 100) / 100)
        const sec = currentSec % 60
        const min  = (currentSec - sec) / 60
        let fullSec = music[activeMusic.index].fullTime.split(':').reduce((previousValue, item, index) => index === 0 ? previousValue += parseInt(item) * 60 : previousValue += parseInt(item), 0)

        dispatch(setTime({index: activeMusic.index, time: niceTime(min, sec)}))
        loadedMusic.current[activeMusic.id].currentTime = currentSec;

        setMusicPointPosition(currentSec / fullSec * 100)
        setStoreTime(activeMusic.index)
        loadedMusic.current[activeMusic.id].play();
    }
    
    const setStoreTime = (index) => {
        let [min, sec] = musicStore.getState().music.music[index].startTime.split(':').map(el => parseInt(el))
        let fullSec = music[index].fullTime.split(':').reduce((previousValue, item, index) => index === 0 ? previousValue += parseInt(item) * 60 : previousValue += parseInt(item), 0)
        let counter = 0
        activeInterval.current = setInterval(() => {
            sec += 0.25
            if(sec > 59){
                min += 1;
                sec = 0;
            }
            let currentSec = min * 60 + sec;
            counter += 1;
            setMusicPointPosition(currentSec / fullSec * 100)
            if(counter === 4){
                counter = 0
                dispatch(setTime({index, time: niceTime(min, sec)}))
            }
        }, 250)
    }

    const niceTime = (min, sec) => {
        let niceTimeSec = Math.round(sec)
        return `${min < 10 ? '0' + min : min}:${niceTimeSec < 10 ? '0' + niceTimeSec : niceTimeSec}`
    }

    const togglePause = (isBtn = false) => {
        if(isBtn){
            if(isPaused){
                clearInterval(activeInterval.current) 
            } else {
                setStoreTime(activeMusic.index)
            }  
        }
        let pause = isPaused
        setIsPaused(!isPaused)
        pause ? loadedMusic.current[activeMusic.id].pause() : loadedMusic.current[activeMusic.id].play()
    }

    return(
        <>
            <div className="music__picture">
                <div className="music__picture__left"></div>
                <div className="music__picture__right">
                    <div className="music__picture__title">Начало работы в Treelone</div>
                    <div className="music__picture__player">
                        {/* <div className="music__picture__subtitle">asdasds</div> */}
                        <div className="music__mobile__count">
                            <div className="music__mobile__count__left">
                                <div className="music__mobile__count__full table" onClick={(e) => setCurrentTime(e)}></div>
                                <div className="music__mobile__count__now table" style={{left: musicPointPosition}}></div>
                            </div>
                            <div className="music__mobile__count__right"></div>
                        </div>
                        <div className="music__mobile__control">
                            <div className={`music__mobile__arrow ${!activeMusic.index ? 'disabled' : ''}`} onClick={() => {switchTrack('left')}}></div>
                            <div className={`music__mobile__play ${isPaused ? 'pause' : ''}`} onClick={() => togglePause(true)}></div>
                            <div className={`music__mobile__arrow rotate ${(activeMusic.index === null || activeMusic.index === music.length - 1) ? 'disabled' : ''}`}  onClick={() => {switchTrack('right')}}></div>
                            <div className="music__mobile__menu"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="music__playlist" id="container">
                {
                    music.map((el, i) => {
                        return (
                        <div key={el.id} className={`music__element ${el.id.toString() === activeMusic.id ? 'active' : ''}`} onClick={() => playTrack(el.id.toString(), i)}>
                            <div className="music__logo" style={{backgroundImage: `url(${el.logo})`}}></div>
                            <div className="music__element__container">
                                <div className="music__name">{el.name}</div>
                                <div className={`music__check ${el.isLearned ? 'learned' : ''}`}></div>
                                <div className="music__time">
                                    <span>{el.startTime} :</span>
                                    <span>{el.fullTime}</span>
                                </div>
                            </div>
                        </div>)
                    }) 
                }
            </div>
        </>
    )
}
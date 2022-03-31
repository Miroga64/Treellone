import ScrollConnector from "../../components/scrollConnector"
import Music from "../../components/music";
import SideMenu from "../../components/menu";

export default function MusicPage(){
    return (
        <main className="main full">
            <div className="page">
                <SideMenu/>
                <ScrollConnector>
                    <Music/>
                </ScrollConnector>
            </div>
        </main>
    )
}
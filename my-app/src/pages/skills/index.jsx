import SideMenu from "../../components/menu";
import Skills from "../../components/skills";
import NewModules from "../../components/modules";
import Course from "../../components/course";

export default function SkillsPage(){
    return(
        <main className="main full">
            <div className="page">
                <SideMenu/>
                <Skills/>
            </div>
            <NewModules/>
            <Course/>
        </main>
    )
}
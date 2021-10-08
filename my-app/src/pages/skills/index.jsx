import SideMenu from "../../components/menu";
import Skills from "../../components/skills";
import NewModules from "../../components/modules";

export default function SkillsPage(){
    return(
        <main className="main full">
            <div className="page">
                <SideMenu/>
                <Skills/>
            </div>
            <NewModules/>
        </main>
    )
}
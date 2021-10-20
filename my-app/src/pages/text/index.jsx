import ScrollConnector from "../../components/scrollConnector"
import Text from "../../components/text"
import SideMenu from "../../components/menu";

export default function TextPage(){
    return (
        <main className="main full">
            <div className="page">
                <SideMenu/>
                <ScrollConnector>
                    <Text/>
                </ScrollConnector>
            </div>
        </main>
    )
}
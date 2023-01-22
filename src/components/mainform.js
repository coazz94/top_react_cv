import "./components.css"
import { PersonalInfo } from "./personalInfo"


function MainForm() {
    return(
        <div className="mainForm">
            <section>
                <PersonalInfo />
            </section>
        </div>

    )
}

export {MainForm}
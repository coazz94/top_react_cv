import "./components.css"
import React, {useState } from 'react';
import { PersonalInfo } from "./personalInfo"
import { Experience } from "./experience"
import { nanoid } from 'nanoid'
import { Education } from "./education";


function MainForm() {

    const [expWindow, setExpWindow] = useState([])
    const [eduWindow, setEduWindow] = useState([])

    function addExp(){
        setExpWindow(prevData => {
            return [...prevData,
                <Experience
                    key={expWindow.length}
                    remove={removeExp}
                    id={nanoid()}
                />
                ]
        })
    }
    function removeExp(id){
        setExpWindow(prevData => {
            return prevData.filter(component => component.props.id !== id)
        })
    }

    function addEdu(){
        setEduWindow(prevData => {
            return [...prevData,
                <Education
                    key={eduWindow.length}
                    remove={removeEdu}
                    id={nanoid()}
                />
                ]
        })
    }
    function removeEdu(id){
        setEduWindow(prevData => {
            return prevData.filter(component => component.props.id !== id)
        })
    }

    return(
        <div className="mainForm">
            <section>
                <PersonalInfo />
                <div>
                    <Experience
                        key={expWindow.length}
                        remove={removeExp}
                        id={1}
                        />
                    {expWindow}
                    <button onClick={addExp}>Add</button>
                </div>
                <div>
                    <Education
                        key={eduWindow.length}
                        remove={removeEdu}
                        id={99}
                    />
                    {eduWindow}
                    <button onClick={addEdu}>Add</button>
                </div>
            </section>
        </div>
    )
}

export {MainForm}
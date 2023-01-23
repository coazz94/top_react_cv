import "./components.css"
import React, {useEffect, useState } from 'react';
import { PersonalInfo } from "./personalInfo"
import { Experience } from "./experience"
import { nanoid } from 'nanoid'
import { Education } from "./education";


function MainForm() {

    const [expWindow, setExpWindow] = useState([])
    const [eduWindow, setEduWindow] = useState([])


    const[cvData, setCvData] = useState(
            {
                PersonalInfo: {
                },
                Experience:{
                },
            }
    )


    useEffect(() => {
        console.log(cvData)
    }, [cvData])




    function addExp(){
        setExpWindow(prevData => {
            return [...prevData,
                <Experience
                    key={expWindow.length}
                    remove={removeExp}
                    // id={nanoid()} // vlt hier immer eine id weiter als letzte match all the experience in object
                    onChange = {setCvData}
                    formData = {cvData}
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

    function gatherAlldata(info){
        console.log(info)
    }

    // https://stackoverflow.com/questions/65607200/react-collect-child-component-data-on-some-event-from-the-parent-component


    return(
        <div className="mainForm">
            <section>
                <PersonalInfo
                    sendData = {gatherAlldata}
                    onChange = {setCvData}
                    formData = {cvData}
                />
                <div>
                    <Experience
                        key={expWindow.length}
                        remove={removeExp}
                        id={1}
                        onChange = {setCvData}
                        formData = {cvData}
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
                <div>
                    <button
                        id="button--gen"
                        onClick={gatherAlldata}
                    >Generate CV</button>
                    <button id="button--reset">Reset Data</button>
                </div>
            </section>
        </div>
    )
}

export {MainForm}
import "./components.css"
import React, {useEffect, useState } from 'react';
import { PersonalInfo } from "./personalInfo"
import { Experience } from "./experience"
// import { nanoid } from 'nanoid'
import { Education } from "./education";


function MainForm() {

    const [expWindow, setExpWindow] = useState([])
    const [eduWindow, setEduWindow] = useState([])
    const[cvData, setCvData] = useState({})


    useEffect(() => {
        console.log(cvData)
    }, [cvData])

    // Get the id for new Sections fot he CV to seperate Values
    function getId(string, obj) {
        const x = Object.keys(obj);
        let id = x.reduce((acc, current)  => {
                return current.split("_")[0] === string ? acc + 1 : acc;
                }, 1)
        return id;
      }
    function addExp(){
        setExpWindow(prevData => {
            return [...prevData,
                <Experience
                    key={expWindow.length}
                    remove={removeExp}
                    id = {getId("Experience", cvData)}
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
                    id={getId("Education", cvData)}
                    onChange = {setCvData}
                    formData = {cvData}
                />
                ]
        })
    }
    function removeEdu(id){
        setEduWindow(prevData => {
            return prevData.filter(component => component.props.id !== id)
        })

        // setCvData(prevData => {
        //     return
        // })
    }

    function gatherAlldata(info){
        console.log(info)
    }


    return(
        <div className="mainForm">
            <section>
                <PersonalInfo
                    sendData = {gatherAlldata}
                    onChange = {setCvData}
                    formData = {cvData}
                />
                <div>
                    {expWindow}
                    <button onClick={addExp}>Add Experience</button>
                </div>
                <div>
                    {eduWindow}
                    <button onClick={addEdu}>Add Education</button>
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
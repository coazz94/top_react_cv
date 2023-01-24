import "./components.css"
import React, {useEffect, useState } from 'react';
import { PersonalInfo } from "./personalInfo"
import { Experience } from "./experience"
import { PersonalCv } from './cv';
// import { nanoid } from 'nanoid'
import { Education } from "./education";


function MainForm() {

    const [expWindow, setExpWindow] = useState([])
    const [eduWindow, setEduWindow] = useState([])
    const [showCv, setShowCv] = useState(false)
    const [idSave, setID] = useState({
        Experience: 1,
        Education: 1,
    })
    const[cvData, setCvData] = useState({})


    useEffect(() => {
        console.log(cvData)
    }, [cvData])

    // Get the id for new Sections fot he CV to seperate Values
    // function getId(string, obj) {
    //     const x = Object.keys(obj);
    //     let id = x.reduce((acc, current)  => {
    //             return current.split("_")[0] === string ? acc + 1 : acc;
    //             }, 1)
    //     return id;
    //   }


    function addExp(){
        setExpWindow(prevData => {
            return [...prevData,
                <Experience
                    key={expWindow.length}
                    remove={removeExp}
                    // id = {getId("Experience", cvData)}
                    id = {idSave.Experience}
                    onChange = {setCvData}
                    formData = {cvData}
                />
                ]
        })
        setID(prevData => {
            return {
                ...prevData,
                Experience: prevData.Experience + 1
            }
        })
    }
    function removeExp(id){
        setExpWindow(prevData => {
            return prevData.filter(component => component.props.id !== id)
        })
        setCvData(prevData => {
            let newData = prevData;
            const latestExp = `Experience_${idSave.Experience}`
            delete newData[latestExp]
            return newData
        })
    }
    function addEdu(){
        setEduWindow(prevData => {
            return [...prevData,
                <Education
                    key={eduWindow.length}
                    remove={removeEdu}
                    // id={getId("Education", cvData)}
                    id = {idSave.Education}
                    onChange = {setCvData}
                    formData = {cvData}
                />
                ]
        })
        setID(prevData => {
            return {
                ...prevData,
                Education: prevData.Education + 1
            }
        })
    }
    function removeEdu(id){
        setEduWindow(prevData => {
            return prevData.filter(component => component.props.id !== id)
        })

        setCvData(prevData => {
            let newData = prevData;
            const latestExp = `Education_${idSave.Education}`
            delete newData[latestExp]
            return newData
        })
    }

    function sendCvData(){
        setShowCv(prevData => !prevData)
    }


    return(
        <div>
            <div className="mainForm">
            <section>
                <PersonalInfo
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
                        onClick={sendCvData}
                    >Generate CV</button>
                    <button id="button--reset">Reset Data</button>
                </div>
            </section>
            </div>
            {showCv &&
                <PersonalCv
                    personalData={cvData.PersonalInfo.firstName}
                    x={"mjau"}
            />
            }
        </div>


    )
}

export {MainForm}
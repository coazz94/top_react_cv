import "./components.css"
import React, {useEffect, useState } from 'react';
import { PersonalInfo } from "./personalInfo"
import { Experience } from "./experience"
import { PersonalCv } from './cv';
import { Education } from "./education";


function MainForm() {

    const [expWindow, setExpWindow] = useState([])
    const [eduWindow, setEduWindow] = useState([])
    const [showCv, setShowCv] = useState(true)
    const [idSave, setID] = useState({
        Experience: 1,
        Education: 1,
    })
    const[cvData, setCvData] = useState({
        persInfo:{
            "firstName": "Aleksandar",
            "lastName": "Popovic",
            "title": "Sofware Developer",
            "adress": "Leebgasse 56",
            "phoneNumber": "0660 9410299",
            "email": "aco94@hotmail.de",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
        },
        exp:{
            "Education_1": {
                "uniName": "Harvard",
                "city": "London",
                "degree": "Master",
                "subject": "CS Sience",
                "from": "2022 06",
                "to": "2022 03"
            }
        },
        edu:{}
    })


    useEffect(() => {
        console.log(cvData)
    }, [cvData])

    function addExp(){
        setExpWindow(prevData => {
            return [...prevData,
                <Experience
                    key={expWindow.length}
                    remove={removeExp}
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
        Object.keys(cvData).length > 0 ? setShowCv(prevData => !prevData) : alert("input missing")
    }


    return(
        <div>
            <div className="mainForm">
            <section>
                <PersonalInfo
                    onChange = {setCvData}
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
                    cvData={cvData}
            />
            }
        </div>
    )
}

export {MainForm}
import React from 'react';
import { EducationSection } from './educSection';
import { ExperienceSection } from './expSection';

function PersonalCv(props) {

   const eduArray = Object.keys(props.cvData.edu)

   let eduSection = eduArray.map((edux,index) => {
      return (
         <EducationSection
            data={props.cvData.edu[edux]}
            key= {index + 10}
             />)
   })

   const expArray = Object.keys(props.cvData.exp)

   let expSection = expArray.map((expx,index) => {
      return (
         <ExperienceSection
            data={props.cvData.exp[expx]}
            key= {index + 10}
             />)
   })


    return(
        <div className="cv--section">
           <section>
              <div className='cv--data'>
                 <div id="page-wrap">
                    {/* <img src="images/cthulu.png" alt="Photo of Cthulu" id="pic" /> */}
                    <div id="contact-info" className="vcard">
                       <h1 className="fn">{props.cvData.persInfo.firstName} {props.cvData.persInfo.lastName}</h1>
                       <p>
                          Cell: <span className="tel">{props.cvData.persInfo.phoneNumber}</span><br />
                          Email: <span className="tel">{props.cvData.persInfo.email}</span><br />
                          Adress: <span className="tel">{props.cvData.persInfo.adress}</span>
                       </p>
                    </div>
                    <div id="objective">
                       <p>{props.cvData.persInfo.description}</p>
                    </div>
                    <div className="clear"></div>
                    <dl>
                       <dd className="clear"></dd>
                       <dt>Education</dt>
                        {eduSection}
                       <dd className="clear"></dd>
                       <dt>Skills</dt>
                       <dd>
                          <h2>Office skills</h2>
                          <p>Office and records management, database administration, event organization, customer support, travel coordination</p>
                          <h2>Computer skills</h2>
                          <p>Microsoft productivity software (Word, Excel, etc), Adobe Creative Suite, Windows</p>
                       </dd>
                       <dd className="clear"></dd>
                       <dt>Experience</dt>
                        {expSection}

                       <dd className="clear"></dd>
                       <dt>Hobbies</dt>
                       <dd>World Domination, Deep Sea Diving, Murder Most Foul</dd>
                       <dd className="clear"></dd>
                       <dt>References</dt>
                       <dd>Available on request</dd>
                       <dd className="clear"></dd>
                    </dl>
                    <div className="clear"></div>
                 </div>
              </div>
           </section>
        </div>
    )
}


export {PersonalCv}
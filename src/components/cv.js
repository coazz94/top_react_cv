import React from 'react';
import { ExperienceSection } from './exp';

function PersonalCv(props) {

   let x = Object.keys(props.cvData.exp).length
   let z = [];
   for(let i = 0; i < x; i++) {
      console.log("here")
      z.push(<ExperienceSection/>)
   }

   console.log(z)

    return(
        <div className="cv--section">
           <section>
              <div className='cv--data'>
                 <div id="page-wrap">
                    {/* <img src="images/cthulu.png" alt="Photo of Cthulu" id="pic" /> */}
                    <div id="contact-info" className="vcard">
                       {/* <h1 className="fn">{props.cvData.persInfo.firstName} {props.cvData.persInfo.lastName}</h1> */}
                       <h1 className="fn">test</h1>
                       {/* <h1 className="fn">test</h1> */}
                       <p>
                          {/* Cell: <span className="tel">{props.cvData.persInfo.phoneNumber}</span><br /> */}
                          Cell: <span className="tel">test</span><br />
                          {/* Email: <span className="tel">{props.cvData.persInfo.email}</span> */}
                          Email: <span className="tel">test</span>
                          {/* Adress: <span className="tel">{props.cvData.persInfo.adress}</span> */}
                       </p>
                    </div>
                    <div id="objective">
                       {/* <p>{props.cvData.persInfo.description}</p> */}
                       <p>test</p>
                    </div>
                    <div className="clear"></div>
                    <dl>
                       <dd className="clear"></dd>
                       <dt>Education</dt>
                        {/* Placeholder */}
                        {z}
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
                       <dd>
                          <h2>Doomsday Cult <span>Leader/Overlord - Baton Rogue, LA - 1926-2010</span></h2>
                          <ul>
                             <li>Inspired and won highest peasant death competition among servants</li>
                             <li>Helped coordinate managers to grow cult following</li>
                             <li>Provided untimely deaths to all who opposed</li>
                          </ul>
                          <h2>The Watering Hole <span>Bartender/Server - Milwaukee, WI - 2009</span></h2>
                          <ul>
                             <li>Worked on grass-roots promotional campaigns</li>
                             <li>Reduced theft and property damage percentages</li>
                             <li>Janitorial work, Laundry</li>
                          </ul>
                       </dd>
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
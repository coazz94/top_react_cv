import React from 'react';

function PersonalCv(props) {
    return(
        <div className="cv--section">
           <section>
              <div className='cv--data'>
                 <div id="page-wrap">
                    {/* <img src="images/cthulu.png" alt="Photo of Cthulu" id="pic" /> */}
                    <div id="contact-info" className="vcard">
                       <h1 className="fn">{props.personalData}</h1>
                       <p>
                          Cell: <span className="tel">555-666-7777</span><br />
                          Email: <a className="email" href="mailto:greatoldone@lovecraft.com">greatoldone@lovecraft.com</a>
                       </p>
                    </div>
                    <div id="objective">
                       <p>
                          I am an outgoing and energetic (ask anybody) young professional, seeking a
                          career that fits my professional skills, personality, and murderous tendencies.
                          My squid-like head is a masterful problem solver and inspires fear in who gaze upon it.
                          I can bring world domination to your organization.
                       </p>
                    </div>
                    <div className="clear"></div>
                    <dl>
                       <dd className="clear"></dd>
                       <dt>Education</dt>
                       <dd>
                          <h2>Withering Madness University - Planet Vhoorl</h2>
                          <p><strong>Major:</strong> Public Relations<br />
                             <strong>Minor:</strong> Scale Tending
                          </p>
                       </dd>
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
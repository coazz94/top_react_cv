import React from "react"

function ExperienceSection(props) {
    return(
        <dd>
        <h2>{props.data.position}</h2>
        <p><strong>Major:</strong> Public Relations<br />
           <strong>Minor:</strong> Scale Tending
        </p>
        </dd>
    )
}

// props.data.company
// props.data.city
// props.data.from
// props.data.to


export{ExperienceSection}
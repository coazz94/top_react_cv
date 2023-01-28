import React from "react";

function EducationSection(props) {
  return (
    <dd>
      <h2>
        {props.data.uniName} in {props.data.city}
      </h2>{" "}
      <p>
        <strong>from: </strong>
        {props.data.from}
        <strong> to: </strong>
        {props.data.to}
      </p>
      <p>
        <strong>Degree: </strong>
        {props.data.degree}
        <br />
        <strong>Subject: </strong> {props.data.subject}
      </p>
    </dd>
  );
}

export { EducationSection };

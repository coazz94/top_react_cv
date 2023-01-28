import React from "react";

function ExperienceSection(props) {
  return (
    <dd>
      <h2>
        {props.data.position}
        <span>
          {props.data.company}, {props.data.city} - {props.data.from}-
          {props.data.to}
        </span>
      </h2>
      <ul>
        <li>
          Inspired and won highest peasant death competition among servants
        </li>
      </ul>
    </dd>
  );
}

export { ExperienceSection };

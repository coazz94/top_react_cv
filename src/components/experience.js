import React from "react";

function Experience(props) {
  function handelChange(event) {
    let { value, name } = event.target;
    const correctName = `Experience_${props.id}`;
    props.onChange((prevData) => {
      const copiedObj = Object.assign({}, prevData);
      if (copiedObj.exp[correctName] === undefined)
        copiedObj.exp[correctName] = {};
      copiedObj.exp[correctName][name] = value;
      return copiedObj;
    });
  }

  return (
    <div>
      <form>
        <div className="formTitle" id="new--box">
          Experience
        </div>
        <div className="formInputArea">
          <input
            type="text"
            placeholder="Position"
            onChange={handelChange}
            name="position"
            // value={props.formData.position}
          />
          <input
            type="text"
            placeholder="Company"
            onChange={handelChange}
            name="company"
            // value={props.formdata.company}
          />
          <input
            type="text"
            placeholder="City"
            onChange={handelChange}
            name="city"
            // value={props.formdata.city}
          />
          <input
            type="text"
            placeholder="From"
            onChange={handelChange}
            name="from"
            // value={props.formdata.from}
          />
          <input
            type="text"
            placeholder="To"
            onChange={handelChange}
            name="to"
            // value={props.formdata.to}
          />
        </div>
      </form>
      <button onClick={() => props.remove(props.id)}>Remove</button>
    </div>
  );
}

export { Experience };

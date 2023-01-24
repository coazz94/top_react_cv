import React from 'react';

function Education(props) {


    function handelChange(event) {
        let {value, name} = event.target
        const correctName = `Education_${props.id}`
        props.onChange(prevData => {
            const copiedObj = Object.assign({}, prevData);
            if (copiedObj[correctName] === undefined)  copiedObj[correctName] = {};
            copiedObj[correctName][name] = value;

             return(copiedObj)
         })
    }


    return(
        <div>
            <form>
            <div className="formTitle" id="new--box">Education</div>
            <div className="formInputArea">
                <input
                    type="text"
                    placeholder="University Name"
                    onChange={handelChange}
                    name="uniName"
                    // value={props.formData.uniName}
                />
                <input
                    type="text"
                    placeholder="City"
                    onChange={handelChange}
                    name="city"
                    // value={formData.city}
                />
                <input
                    type="text"
                    placeholder="Degree"
                    onChange={handelChange}
                    name="degree"
                    // value={formData.degree}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    onChange={handelChange}
                    name="subject"
                    // value={formData.subject}
                />
                <input
                    type="text"
                    placeholder="From"
                    onChange={handelChange}
                    name="from"
                    // value={formData.from}
                />
                <input
                    type="text"
                    placeholder="To"
                    onChange={handelChange}
                    name="to"
                    // value={formData.to}
                />
            </div>
            </form>
            <button onClick={() => props.remove(props.id)}>Remove</button>
        </div>
    )
}

export {Education}
import React, { useState } from 'react';

function Education(props) {

    const[formData, setFormData] = useState(
        {
            uniName:"",
            city:"",
            degree:"",
            subject:"",
            from:"",
            to: "",
        }
    )

    function handelChange(event) {
        const {value, name} = event.target
        setFormData(prevData => {
            return(
                {
                    ...prevData,
                    [name]:value,
                }
            )
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
                    value={formData.uniName}
                />
                <input
                    type="text"
                    placeholder="City"
                    onChange={handelChange}
                    name="city"
                    value={formData.city}
                />
                <input
                    type="text"
                    placeholder="Degree"
                    onChange={handelChange}
                    name="degree"
                    value={formData.degree}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    onChange={handelChange}
                    name="subject"
                    value={formData.subject}
                />
                <input
                    type="text"
                    placeholder="From"
                    onChange={handelChange}
                    name="from"
                    value={formData.from}
                />
                <input
                    type="text"
                    placeholder="To"
                    onChange={handelChange}
                    name="to"
                    value={formData.to}
                />
            </div>
            </form>
            {props.id !== 99 && <button onClick={() => props.remove(props.id)}>Remove</button>}
        </div>
    )
}

export {Education}
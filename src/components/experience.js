import React, { useState } from 'react';

function Experience(props) {

    const[formData, setFormData] = useState(
        {
            position:"",
            company:"",
            city:"",
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
            <div className="formTitle" id="new--box">Experience</div>
            <div className="formInputArea">
                <input
                    type="text"
                    placeholder="Position"
                    onChange={handelChange}
                    name="position"
                    value={formData.position}
                />
                <input
                    type="text"
                    placeholder="Company"
                    onChange={handelChange}
                    name="company"
                    value={formData.company}
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
            {props.id !== 1 && <button onClick={() => props.remove(props.id)}>Remove</button>}
        </div>
    )
}

export {Experience}
import React from 'react';

function Experience(props) {


    function handelChange(event) {
        const {value, name} = event.target
        props.onChange(prevData => {
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
                    value={props.onChange.position}
                />
                <input
                    type="text"
                    placeholder="Company"
                    onChange={handelChange}
                    name="company"
                    value={props.onChange.company}
                />
                <input
                    type="text"
                    placeholder="City"
                    onChange={handelChange}
                    name="city"
                    value={props.onChange.city}
                />
                <input
                    type="text"
                    placeholder="From"
                    onChange={handelChange}
                    name="from"
                    value={props.onChange.from}
                />
                <input
                    type="text"
                    placeholder="To"
                    onChange={handelChange}
                    name="to"
                    value={props.onChange.to}
                />
            </div>
            </form>
            {props.id !== 1 && <button onClick={() => props.remove(props.id)}>Remove</button>}
        </div>
    )
}

export {Experience}
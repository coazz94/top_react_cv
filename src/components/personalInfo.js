import React from 'react';

function PersonalInfo(props) {

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
        <div >
            <div className="formTitle"> Personal Information</div>
            <div className="formInputArea">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handelChange}
                    name="firstName"
                    value={props.formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handelChange}
                    name="lastName"
                    value={props.formData.lastName}
                />
                <input
                    type="text"
                    placeholder="Title e.g Developer"
                    onChange={handelChange}
                    name="title"
                    value={props.formData.title}
                />
                <input
                    type="text"
                    placeholder="Photo Edit this"
                    // onChange={handelChange}
                    name="photo"
                    // value={props.formData.}
                />
                <input
                    type="text"
                    placeholder="Adress"
                    onChange={handelChange}
                    name="adress"
                    value={props.formData.adress}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={handelChange}
                    name="phoneNumber"
                    value={props.formData.phoneNumber}
                />
                <input
                    type="text"
                    placeholder="Email"
                    onChange={handelChange}
                    name="email"
                    value={props.formData.email}
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={handelChange}
                    name="description"
                    value={props.formData.description}
                />
            </div>
        </div>
    )
}

export {PersonalInfo}
import React, { useState } from 'react';

function PersonalInfo() {

    const[formData, setFormData] = useState(
        {
            firstName:"",
            lastName:"",
            title: "",
            adress:"",
            phoneNumber:"",
            email:"",
            description:"",
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
        <form >
            <div className="formTitle"> Personal Information</div>
            <div className="formInputArea">
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handelChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handelChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="text"
                    placeholder="Title e.g Developer"
                    onChange={handelChange}
                    name="title"
                    value={formData.title}
                />
                <input
                    type="text"
                    placeholder="Photo Edit this"
                    // onChange={handelChange}
                    name="photo"
                    // value={formData.}
                />
                <input
                    type="text"
                    placeholder="Adress"
                    onChange={handelChange}
                    name="adress"
                    value={formData.adress}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={handelChange}
                    name="phoneNumber"
                    value={formData.phoneNumber}
                />
                <input
                    type="text"
                    placeholder="Email"
                    onChange={handelChange}
                    name="email"
                    value={formData.email}
                />
                <input
                    type="text"
                    placeholder="Description"
                    onChange={handelChange}
                    name="description"
                    value={formData.description}
                />
            </div>
        </form>
    )
}

export {PersonalInfo}


function PersonalInfo() {
    return(
        <form >
            <div className="formTitle"> Personal Information</div>
            <div className="formInputArea">
                <input
                    type="text"
                    placeholder="First Name"
                    // onChange={}
                    name="firstName"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    // onChange={}
                    name="lastName"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Title e.g Developer"
                    // onChange={}
                    name="title"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Photo Edit this"
                    // onChange={}
                    name="photo"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Adress"
                    // onChange={}
                    name="adress"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    // onChange={}
                    name="phoneNumber"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Email"
                    // onChange={}
                    name="email"
                    // value={}
                />
                <input
                    type="text"
                    placeholder="Description"
                    // onChange={}
                    name="description"
                    // value={}
                />
            </div>
        </form>
    )
}

export {PersonalInfo}
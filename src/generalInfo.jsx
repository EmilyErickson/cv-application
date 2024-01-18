import './index.css'
// import { useState } from 'react';


export default function GeneralInfo() {
    // const [personalInfo, setPersonalInfo] = useState({
    //     name: "Jane Smith",
    //     email: "jane.l.smith@gmail.com",
    //     phone: "9871234560",
    //     location: "Chicago, USA"
    // });

    const personalInfo = {    
            name: "Jane Smith",
            email: "jane.l.smith@gmail.com",
            phone: "987-123-4560",
            location: "Chicago, USA"
    }

    // function updateValue(e) {
    //     let newName = e.target.value
    //     let newPersonalInfo = {...personalInfo, name: newName}
    //     setPersonalInfo(newPersonalInfo);
    // }
    // (e) => updateValue(e)

    function NameInput() {
        return (
            <>
            <div className="name-input">
            <label htmlFor="name-input">Full Name</label>
            <input type="text" value={personalInfo.name}></input>
            </div>
            </>
        )
    }

    // function NameInput() {
    //     return (
    //     <>
    //         <form className="name-input"
    //             <label htmlFor="name-input">Name</label>
    //             <input type="text" 
    //             value={personalInfo.name} 
    //             onChange={updateValue}
    //             ></>
    //     </>
    //     )
    // }

    function EmailInput() {
        return (
        <>
            <form className="email-input">
                <label htmlFor="email-input">E-mail</label>
                <input type="email" value={personalInfo.email}/>
            </form>
        </>
        )
    }

    function PhoneInput() {
        return (
        <>
            <form className="phone-input">
                <label htmlFor="phone-input">Phone</label>
                <input type="tel" value={personalInfo.phone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
            </form>
        </>
        )
    }

    function LocationInput() {
        return (
        <>
            <form className="location-input">
                <label htmlFor="location-input">Location</label>
                <input type="address" value={personalInfo.location}/>
            </form>
        </>
        )
    }

   return (
    <div className='personal-form form'>
    <NameInput />

    <EmailInput />

    <PhoneInput />

    <LocationInput />
    </ div>
   )
}
//</>
// )


// export default function GeneralInfo () {
//    return (
//     <>
//     <NameInput />

//     <EmailInput />

//     <PhoneInput />

//     <LocationInput />
//     </>
//    )
// }

// let initialInfo = {
//     name: "Jane Smith",
//     email: "jane.l.smith@gmail.com",
//     phone: "9871234560",
//     location: "Chicago, USA"
// }
// return (
//     initialGeneralInfo,
//     personalInfo,
//     setPersonalInfo
//     // initialGeneralInfo
// )
// }
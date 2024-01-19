import './index.css'
import { useState } from 'react';
// import DefaultInfo from './defaultInputs';
import { v4 as uuidv4 } from 'uuid';


export default function GeneralInfo() {

  const [personalInfo, setPersonalInfo] = useState({
    key: uuidv4(),
    name: "Jane Smith",
    email: "jane.l.smith@gmail.com",
    phone: "987-123-4560",
    location: "Chicago, USA"
  });
    // let { personalInfo } = DefaultInfo()

  function handleInputChange(inputName, value) {
    setPersonalInfo(prevValues => ({
      ...prevValues,
      [inputName]: value
    }));
    console.log(value, uuidv4())

  }

  function handleSubmit(e) {
    e.preventDefault();
    // Now, you can use inputValues to create a new personalInfo array
    const newPersonalInfo = { ...personalInfo };
    newPersonalInfo.key = uuidv4();
    // alert({e});
    console.log(newPersonalInfo)
    
  }

    function NameInput() {
        return (
            <>
            <div className="name-input">
            <label htmlFor="name-input">Full Name</label>
            <input id="name-input" type="text" defaultValue={personalInfo.name}
            onBlur={(e) => handleInputChange('name', e.target.value)}></input>
            </div>
            </>
        )
    }


    function EmailInput() {
        return (
        <>
            <form className="email-input">
                <label htmlFor="email-input">E-mail</label>
                <input id="email-input" type="email" defaultValue={personalInfo.email}
                onBlur={(e) => handleInputChange('email', e.target.value)}/>
            </form>
        </>
        )
    }

    function PhoneInput() {
        return (
        <>
            <form className="phone-input">
                <label htmlFor="phone-input">Phone</label>
                <input type="tel" defaultValue={personalInfo.phone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    onBlur={(e) => handleInputChange('phone', e.target.value)}/>
            </form>
        </>
        )
    }

    function LocationInput() {
        return (
            <form className="location-input">
                <label htmlFor="location-input">Location</label>
                <input type="address" defaultValue={personalInfo.location}
                onBlur={(e) => handleInputChange('location', e.target.value)}/>
            </form>
        )
    }



   return (
    <div className='personal-form form'>
    <NameInput />

    <EmailInput />

    <PhoneInput />

    <LocationInput />
    <button type="submit" onClick={handleSubmit}>Submit</button>
    </ div>
   )
}


// 
// import React, { useState } from 'react';
// import './index.css';

// export default function GeneralInfo() {
//   const [inputValues, setInputValues] = useState({
//     name: "Jane Smith",
//     email: "jane.l.smith@gmail.com",
//     phone: "987-123-4560",
//     location: "Chicago, USA"
//   });

//   function handleInputChange(inputName, value) {
//     setInputValues(prevValues => ({
//       ...prevValues,
//       [inputName]: value
//     }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Now, you can use inputValues to create a new personalInfo array
//     const newPersonalInfo = { ...inputValues };
//     console.log(newPersonalInfo); // You can replace this with your logic to update the page or perform other actions
//   }

//   return (
//     <div className='personal-form form'>
//       <form onSubmit={handleSubmit}>
//         <div className="name-input">
//           <label htmlFor="name-input">Full Name</label>
//           <input
//             type="text"
//             value={inputValues.name}
//             onChange={(e) => handleInputChange('name', e.target.value)}
//           />
//         </div>

//         <div className="email-input">
//           <label htmlFor="email-input">E-mail</label>
//           <input
//             type="email"
//             value={inputValues.email}
//             onChange={(e) => handleInputChange('email', e.target.value)}
//           />
//         </div>

//         <div className="phone-input">
//           <label htmlFor="phone-input">Phone</label>
//           <input
//             type="tel"
//             value={inputValues.phone}
//             pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
//             onChange={(e) => handleInputChange('phone', e.target.value)}
//           />
//         </div>

//         <div className="location-input">
//           <label htmlFor="location-input">Location</label>
//           <input
//             type="address"
//             value={inputValues.location}
//             onChange={(e) => handleInputChange('location', e.target.value)}
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

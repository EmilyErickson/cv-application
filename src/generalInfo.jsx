import './index.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


export default function GeneralInfo({ personalInfo, updatePersonalInfo}) {

  function updatePreview(newInfo) {
    updatePersonalInfo(newInfo);
  }

  GeneralInfo.propTypes = {
    personalInfo: PropTypes.object.isRequired,
    updatePersonalInfo: PropTypes.func.isRequired,
  };

  function handleInputChange(inputName, value) {
    updatePersonalInfo(prevValues => ({
      ...prevValues,
      [inputName]: value
    }));
  }


  function handleSubmit(e) {
    e.preventDefault();
    const newPersonalInfo = { ...personalInfo };
    newPersonalInfo.key = uuidv4();
    updatePreview(newPersonalInfo)
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

    function TitleInput() {
      return (
          <>
          <div className="title-input">
          <label htmlFor="title-input">Position Title</label>
          <input id="title-input" type="text" defaultValue={personalInfo.title}
          onBlur={(e) => handleInputChange('title', e.target.value)}></input>
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
                <input id='phone-input' type="tel" defaultValue={personalInfo.phone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
    onBlur={(e) => handleInputChange('phone', e.target.value)}/>
            </form>
        </>
        )
    }

    function LocationInput() {
        return (
            <form className="location-input">
                <label htmlFor="location-input">Location</label>
                <input id='location-input' type="address" defaultValue={personalInfo.location}
                onBlur={(e) => handleInputChange('location', e.target.value)}/>
            </form>
        )
    }



   return (
    <div className='personal-form form'>
      <NameInput />

      <TitleInput />

      <EmailInput />

      <PhoneInput />

      <LocationInput />
    <button type="submit" onClick={handleSubmit}>Save</button>
    </ div>
   )
  }
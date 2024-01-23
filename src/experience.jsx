import { useState } from 'react'
import './index.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';



export default function Experience ({ experiencesArray, updateThisExperience, addNewExperience}) {

    Experience.propTypes = {
        experiencesArray: PropTypes.array.isRequired,
        updateThisExperience: PropTypes.func.isRequired,
        addNewExperience: PropTypes.func.isRequired,
      };


    function handleInputChange(key, inputName, value) {
        let thisExperience = experiencesArray.find(experience => experience.key === key)
        updateThisExperience(inputName, value, thisExperience)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }
    
    function CompanyInput({experienceInfo}) {
        CompanyInput.propTypes = {
            experienceInfo: PropTypes.object.isRequired,
          };    
        return (
            <form>
                <label htmlFor="company-input">Company Name</label>
                <input id="company-input" type="text" defaultValue={experienceInfo.company}
                onBlur={(e) => handleInputChange(experienceInfo.key, 'company', e.target.value)}></input>
             </form>
        )
    }
    function PositionInput({experienceInfo}) {
        PositionInput.propTypes = {
            experienceInfo: PropTypes.object.isRequired,
        }
        return (
            <form>
                <label htmlFor="position-input">Position Title</label>
                <input id='position-input' type="text" defaultValue={experienceInfo.position}
                onBlur={(e) => handleInputChange(experienceInfo.key, 'position', e.target.value)}></input>
                </form>
        )
    }
    function StartDateInput({experienceInfo}) {
        StartDateInput.propTypes = {
            experienceInfo: PropTypes.object.isRequired,
          };    
        return (
            <form className='date-input'>
                <label htmlFor="start-date-input">Start Date</label>
                <input id='start-date-input' type="month" defaultValue={experienceInfo.startDate}
                onBlur={(e) => handleInputChange(experienceInfo.key, 'startDate', e.target.value)}></input>
                </form>
        )
    }
    function EndDateInput({experienceInfo}) {
        EndDateInput.propTypes = {
            experienceInfo: PropTypes.object.isRequired,
          };    
        return (
            <form className='date-input'>
                <label htmlFor="end-date-input">End Date</label>
                <input id='end-date-input' type="month" defaultValue={experienceInfo.endDate}
                onBlur={(e) => handleInputChange(experienceInfo.key, 'endDate', e.target.value)}></input>
                </form>
        )
    }
    function DescriptionInput({experienceInfo}) {
        DescriptionInput.propTypes = {
            experienceInfo: PropTypes.object.isRequired,
          };    
        return (
            <form className='description-form'>
                <label htmlFor="description-input">Description</label>
                <textarea id='description-input' type="text" defaultValue={experienceInfo.description}
                onBlur={(e) => handleInputChange(experienceInfo.key, 'description', e.target.value)}></textarea>
                </form>
        )
    }
    function AddButton() {
        return (
            <button className='add-btn' onClick={addExperience}>Add Experience</button>
        )
    }



function addExperience() {
    const newExperience = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      key: uuidv4(),
    };

    addNewExperience(newExperience);
}


    function ExperienceForm({ experienceInfo }) {


        ExperienceForm.propTypes = {
            experienceInfo: PropTypes.object.isRequired,
          };

        const [isActive, setIsActive] = useState(true);

        const toggleClass = () => {
            setIsActive(!isActive);
          };

        return(
        <div id={experienceInfo.key} className={isActive ? 'active experience-form form' : 'inactive experience-form form'}>
        <button className='btn' onClick={toggleClass}><svg className='eye' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></button>
        <span className={isActive ? 'hidden' : 'show company-name'}>{experienceInfo.company}</span>
        <CompanyInput className={isActive ? 'show' : 'hidden'} experienceInfo={experienceInfo}/>

        <PositionInput experienceInfo={experienceInfo}/>
    
        <StartDateInput experienceInfo={experienceInfo}/>
    
        <EndDateInput experienceInfo={experienceInfo}/>
    
        <DescriptionInput experienceInfo={experienceInfo}/>
        <button type="submit" onClick={(e) => handleSubmit(e, experienceInfo)}>Save</button>
        </div>  
            )
        }      

   return (
        <>
        {experiencesArray.map((experience, index) => (
            <div key={experience.key}>
            <ExperienceForm experienceInfo={experience} key={experience.key}
            addNewExperience={(newExperience) => addNewExperience(index, newExperience)}/>  
            </div>
        ))}
        <AddButton addExperience={addExperience}/> 
        </>

   )
}
import { useState } from 'react'
import './index.css'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

export default function Education({ educationsArray, updateThisEducation, addNewEducation}) {
    
    Education.propTypes = {
        educationsArray: PropTypes.array.isRequired,
    updateThisEducation: PropTypes.func.isRequired,
    addNewEducation: PropTypes.func.isRequired,
    };
    
    function handleInputChange(key, inputName, value) {
        let thisEducation = educationsArray.find(education => education.key === key)
        updateThisEducation(inputName, value, thisEducation)
    console.log("testing", value)
    }

    function handleSubmit(e) {
        e.preventDefault();
    }


    function SchoolInput({educationInfo}) {
        SchoolInput.propTypes = {
            educationInfo: PropTypes.object.isRequired
        }
        return (
        <>
            <form className="school-input">
                <label htmlFor="school-input">School Name</label>
                <input id='school-input' type="text" defaultValue={educationInfo.school}
                onBlur={(e) => handleInputChange(educationInfo.key, 'school', e.target.value)}></input>
            </form>
        </>
        )
    }

    function DegreeInput({educationInfo}) {
        DegreeInput.propTypes = {
            educationInfo: PropTypes.object.isRequired
        }
        return (
        <>
            <form className="degree-input">
                <label htmlFor="degree-input">Degree</label>
                <input id='degree-input' type="text" defaultValue={educationInfo.degree}
                onBlur={(e) => handleInputChange(educationInfo.key, 'degree', e.target.value)}></input>
            </form>
        </>
        )
    }

    function StartDateInput({educationInfo}) {
        StartDateInput.propTypes = {
            educationInfo: PropTypes.object.isRequired
        }
        return (
        <>
            <form className="date-input">
                <label htmlFor="start-date-input">Start Date</label>
                <input id='start-date-input' type="month" defaultValue={educationInfo.startDate}/>
            </form>
        </>
        )
    }

    function EndDateInput({educationInfo}) {
        EndDateInput.propTypes = {
            educationInfo: PropTypes.object.isRequired
        }
        return (
        <>
            <form className="date-input">
                <label htmlFor="end-date-input">End Date</label>
                <input id='end-date-input' type="month" defaultValue={educationInfo.endDate}/>
            </form>
        </>
        )
    }

    function LocationInput({educationInfo}) {
        LocationInput.propTypes = {
            educationInfo: PropTypes.object.isRequired
        }
        return (
        <>
            <form className="location-input">
                <label htmlFor="location-input">Location</label>
                <input id='location-input' type="text" defaultValue={educationInfo.location}/>
            </form>
        </>
        )
    }

    function AddButton() {
        return (
            <>
                <button className='add-btn' onClick={addEducation}>Add Education</button>
            </>
        )
    }

    function addEducation() {
        const newEducation = {
            key: uuidv4(),
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: ""
        
        };

        addNewEducation(newEducation)
    }


    function EducationForm({ educationInfo}) {

        EducationForm.propTypes = {
            educationInfo: PropTypes.object.isRequired,
        }

        const [isActive, setIsActive] = useState(true);

        const toggleClass = () => {
            setIsActive(!isActive);
          };

        return (
            <div id={educationInfo.key} className={isActive ? 'active education-form form' : 'inactive education-form form'}>
                <button className='btn' onClick={toggleClass}><svg className='eye' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></button>
                <span className={isActive ? 'hidden' : 'show school-name'}>{educationInfo.school}</span>
                <SchoolInput className={isActive ? 'show' : 'hidden'} educationInfo={educationInfo}/>
                    
                <DegreeInput educationInfo={educationInfo} />

                <StartDateInput educationInfo={educationInfo}/>

                <EndDateInput educationInfo={educationInfo}/>

                <LocationInput educationInfo={educationInfo}/>
                <button type="submit" onClick={handleSubmit}>Save</button>
            </ div>
        )
    }


   return (
    <>
    {educationsArray.map((education, index) => (
        <div key={education.key}>
            <EducationForm educationInfo={education} key={education.key}
            addNewEducation={(newEducation) => addNewEducation(index, newEducation)} />
        </div>
    ))}
    <AddButton addNewEducation={addNewEducation} />
    </>
   )
}
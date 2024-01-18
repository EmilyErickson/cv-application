import { useState } from 'react'
import './index.css'


export default function Experience () {
    const experienceInfo = {    
        company: "Tech Innovators, Inc.",
        position: "Software Development Engineer",
        startDate: "2017-04",
        endDate: "2019-02",
        location: "Austin, TX, USA"
    }

    function CompanyInput() {
        return (
            <form>
                <label htmlFor="company-input">Company Name</label>
                <input type="text" value={experienceInfo.company}/>
            </form>
        )
    }

    function PositionInput() {
        return (
            <form>
                <label htmlFor="position-input">Position Title</label>
                <input type="text" value={experienceInfo.position}/>
            </form>
        )
    }

    function StartDateInput() {
        return (
            <form className='date-input'>
                <label htmlFor="start-date-input">Start Date</label>
                <input type="month" value={experienceInfo.startDate}/>
            </form>
        )
    }

    function EndDateInput() {
        return (
            <form className='date-input'>
                <label htmlFor="end-date-input">End Date</label>
                <input type="month" value={experienceInfo.endDate}/>
            </form>
        )
    }
    function LocationInput() {
        return (
            <form>
                <label htmlFor="location-input">Location</label>
                <input type="text" value={experienceInfo.location}/>
            </form>
        )
    }
    function AddButton() {
        return (
            <button className='add-btn' onClick={addComponent}>Add Experience</button>
        )
    }

    const [components, setComponents] = useState([<ExperienceForm key="example" />])

    function addComponent() {
        let newComponent =<ExperienceForm key={components.length}/>
        setComponents([...components, newComponent])
    }  


    function ExperienceForm() {
        const [isActive, setIsActive] = useState(true);

        const toggleClass = () => {
            setIsActive(!isActive);
          };

        return(
        <div className={isActive ? 'active experience-form form' : 'inactive experience-form form'}>
        <button className='btn' onClick={toggleClass}><svg className='eye' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></button>
        <span className={isActive ? 'hidden' : 'show company-name'}>{experienceInfo.company}</span>
        <CompanyInput className={isActive ? 'show' : 'hidden'}/>

        <PositionInput />
    
        <StartDateInput />
    
        <EndDateInput />
    
        <LocationInput />
        </div>  
            )
        }
   return (
        <>
        {components.map((component) => (
            <div key={component.id}>
                <ExperienceForm />
            </div>
            ))}
        <AddButton />
        </>

   )
}
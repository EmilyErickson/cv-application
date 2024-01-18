import { useState } from 'react'
// import { date } from 
import './index.css'



export default function Education () {
    // function getKey() {
    //     // Need to download UUID package for this
    //     return(
    //         new Date().getTime()
    //     )
    // }
    const educationInfo = {    
        // key: getKey,
        school: "Georgia Institute of Technology",
        degree: "Computer Science",
        startDate: "2013-05",
        endDate: "2017-05",
        location: "Atlanta, GA"
    }

    function SchoolInput() {
        return (
        <>
            <form className="school-input">
                <label htmlFor="school-input">School Name</label>
                <input type="text" value={educationInfo.school}/>
            </form>
        </>
        )
    }

    function DegreeInput() {
        return (
        <>
            <form className="degree-input">
                <label htmlFor="degree-input">Degree</label>
                <input type="text" value={educationInfo.degree}/>
            </form>
        </>
        )
    }

    function StartDateInput() {
        return (
        <>
            <form className="date-input">
                <label htmlFor="start-date-input">Start Date</label>
                <input type="month" value={educationInfo.startDate}/>
            </form>
        </>
        )
    }

    function EndDateInput() {
        return (
        <>
            <form className="date-input">
                <label htmlFor="end-date-input">End Date</label>
                <input type="month" value={educationInfo.endDate}/>
            </form>
        </>
        )
    }

    function LocationInput() {
        return (
        <>
            <form className="location-input">
                <label htmlFor="location-input">Location</label>
                <input type="text" value={educationInfo.location}/>
            </form>
        </>
        )
    }

    function AddButton() {
        return (
            <>
                <button className='add-btn' onClick={addComponent}>Add Education</button>
            </>
        )
    }


    const [components, setComponents] = useState([EducationForm])

    function addComponent() {
        let newComponent = <EducationForm key={components.length} />
        setComponents([...components, newComponent])
    }  

    //     function addComponent() {
//         let newComponent =<ExperienceForm key={components.length}/>
//         setComponents([...components, newComponent])
//     }  

    function EducationForm() {

        const [isActive, setIsActive] = useState(true);

        const toggleClass = () => {
            setIsActive(!isActive);
          };

        return (
            <div className={isActive ? 'active education-form form' : 'inactive education-form form'}>
                <button className='btn' onClick={toggleClass}><svg className='eye' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></button>
                <span className={isActive ? 'hidden' : 'show school-name'}>{educationInfo.school}</span>
                <SchoolInput className={isActive ? 'show' : 'hidden'}/>
                    
                <DegreeInput />

                <StartDateInput />

                <EndDateInput />

                <LocationInput />
            </ div>
        )
    }


   return (
    <div className='education' >
        {components.map((i) => (<EducationForm key={i}/>))}
        <AddButton />
    </div>
   )
}


//     function ExperienceForm() {
//         const [isActive, setIsActive] = useState(true);

//         const toggleClass = () => {
//             setIsActive(!isActive);
//           };

//         return(
//         <div className={isActive ? 'active experience-form form' : 'inactive experience-form form'}>
//         <button className='btn' onClick={toggleClass}><svg className='eye' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></button>
//         <span className={isActive ? 'hidden' : 'show company-name'}>{experienceInfo.company}</span>
//         <CompanyInput className={isActive ? 'show' : 'hidden'}/>

//         <PositionInput />
    
//         <StartDateInput />
    
//         <EndDateInput />
    
//         <LocationInput />
//         </div>  
//             )
//         }
//    return (
//         <>
//         {components.map((component) => (
//             <div key={component.id}>
//                 <ExperienceForm />
//             </div>
//             ))}
//         <AddButton />
//         </>

//    )
// }
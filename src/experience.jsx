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
    <>
        <form className="experience-input">
            <label htmlFor="company-input">Company Name</label>
            <input type="text" value={experienceInfo.company}/>
        </form>
    </>
    )
}

function PositionInput() {
    return (
    <>
        <form className="experience-input">
            <label htmlFor="position-input">Position Title</label>
            <input type="text" value={experienceInfo.position}/>
        </form>
    </>
    )
}

function StartDateInput() {
    return (
    <>
        <form className="experience-input">
            <label htmlFor="start-date-input">Start Date</label>
            <input type="month" value={experienceInfo.startDate}/>
        </form>
    </>
    )
}

function EndDateInput() {
    return (
    <>
        <form className="experience-input">
            <label htmlFor="end-date-input">End Date</label>
            <input type="month" value={experienceInfo.endDate}/>
        </form>
    </>
    )
}

function LocationInput() {
    return (
    <>
        <form className="school-input">
            <label htmlFor="location-input">Location</label>
            <input type="text" value={experienceInfo.location}/>
        </form>
    </>
    )
}

   return (
    <>
    <CompanyInput />

    <PositionInput />

    <StartDateInput />

    <EndDateInput />

    <LocationInput />
    </>
   )
}
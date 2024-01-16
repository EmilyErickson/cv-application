import './index.css'

export default function Education () {
    const educationInfo = {    
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
            <form className="school-input">
                <label htmlFor="degree-input">Degree</label>
                <input type="text" value={educationInfo.degree}/>
            </form>
        </>
        )
    }

    function StartDateInput() {
        return (
        <>
            <form className="school-input">
                <label htmlFor="start-date-input">Start Date</label>
                <input type="month" value={educationInfo.startDate}/>
            </form>
        </>
        )
    }

    function EndDateInput() {
        return (
        <>
            <form className="school-input">
                <label htmlFor="end-date-input">End Date</label>
                <input type="month" value={educationInfo.endDate}/>
            </form>
        </>
        )
    }

    function LocationInput() {
        return (
        <>
            <form className="school-input">
                <label htmlFor="location-input">Location</label>
                <input type="text" value={educationInfo.location}/>
            </form>
        </>
        )
    }


   return (
    <>
    <SchoolInput />

    <DegreeInput />

    <StartDateInput />

    <EndDateInput />

    <LocationInput />
    </>
   )
}
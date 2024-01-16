// import { useState } from 'react';
import './index.css'


export default function Preview() {

    const personalInfo = {    
            name: "Amanda Johnson",
            email: "amanda.johnson@gmail.com",
            phone: "987-123-4560",
            location: "Chicago, USA"
    }

    const experienceInfo = {    
        company: "Tech Innovators, Inc.",
        position: "Full Stack Software Developer",
        startDate: "2017",
        endDate: "2019",
        location: "Austin, TX, USA"
    }

    const educationInfo = {    
        school: "Georgia Institute of Technology",
        degree: "Computer Science",
        startDate: "2013",
        endDate: "2017",
        location: "Atlanta, GA"
    }


    function PreviewHeader() {
        return (
            <div className="preview-header">
                <h1 className='header-name'>{personalInfo.name}</h1>
                <p className="header-position">{experienceInfo.position}</p>
            </div>
    )
    }

    function SidebarPreview() {
        return (
            <div className="preview-sidebar">
                <div className='contact'>
                    <h2>Contact</h2>
                    <span className='sidebar-email'>* {personalInfo.email}</span>
                    <span className='sidebar-phone'>* {personalInfo.phone}</span> 
                    <span className='sidebar-location'>* {personalInfo.location}</span> 
                </div>
                <div className='sidebar-education'>
                    <h2>Education</h2>
                    <span className='sidebar-school'>{educationInfo.school}</span>
                    <span className='sidebar-degree'>{educationInfo.degree}</span> 
                    <span className='sidebar-dates'>{educationInfo.startDate} - {educationInfo.endDate}</span>
                    <span className='sidebar-school-location'>{educationInfo.location}</span> 
                </div>
            </div>
            )
    }

    function MainContentPreview() {
        return (
            <div className="preview-main">
                <div className='experience'>
                    <h2>Work Experience</h2>
                    <div className='previous-job'>
                        <span className='previous-position'>{experienceInfo.position}</span>
                        <span className='previous-company'>{experienceInfo.company}</span> 
                        <span className='job-dates'>{experienceInfo.startDate} - {experienceInfo.endDate}</span> 
                        <p className='previous-job-description'>
                            <span className='bullet-point'>
                            Developed and maintained robust and scalable web applications using technologies such as React.js, Node.js, and MongoDB.
                            </span>
                            <span className='bullet-point'>
                            Collaborated with cross-functional teams to gather requirements, analyze needs, and deliver high-quality software solutions.
                            </span>
                            <span className='bullet-point'>
                            Implemented RESTful APIs for efficient communication between front-end and back-end systems.
                            </span>
                        </p>
                    </div>
                    <div className='previous-job'>
                        <span className='previous-position'>{experienceInfo.position}</span>
                        <span className='previous-company'>{experienceInfo.company}</span> 
                        <span className='job-dates'>{experienceInfo.startDate} - {experienceInfo.endDate}</span> 
                    </div>
                </div>

            </div>
            )
    }


    // function PhoneInput() {
    //     return (
    //     <>
    //         <form className="phone-input">
    //             <label htmlFor="phone-input">Phone</label>
    //             <input type="tel" value={personalInfo.phone} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
    //         </form>
    //     </>
    //     )
    // }

    // function LocationInput() {
    //     return (
    //     <>
    //         <form className="location-input">
    //             <label htmlFor="location-input">Location</label>
    //             <input type="address" value={personalInfo.location}/>
    //         </form>
    //     </>
    //     )
    // }

   return (
    <div className='cv-preview'>
        <PreviewHeader />
        <SidebarPreview />
        <MainContentPreview />
    </div>
   )
}

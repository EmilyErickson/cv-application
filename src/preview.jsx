// import { useState } from 'react';
import './index.css'


export default function Preview() {

    const personalInfo = {    
            name: "Amanda Johnson",
            email: "amanda.johnson@gmail.com",
            phone: "987-123-4560",
            location: "Chicago, USA"
    }

    const currentExperienceInfo = {    
        company: "Tech Innovators, Inc.",
        position: "Software Development Engineer",
        startDate: "2019",
        endDate: "current",
        location: "Austin, TX, USA",
        description: "Developed and maintained robust and scalable web applications using technologies such as React.js, Node.js, and MongoDB. Collaborated with cross-functional teams to gather requirements, analyze needs, and deliver high-quality software solutions. Implemented RESTful APIs for efficient communication between front-end and back-end systems."
    }

    const firstExperienceInfo = {
        company: "CodeCrafters Ltd.",
        position: "Junior Full Stack Developer",
        startDate: "2017",
        endDate: "2019",
        location: "Austin, TX, USA",
        description: "Designed and implemented responsive and user-friendly front-end interfaces using HTML, CSS, and JavaScript frameworks. Developed server-side logic and back-end components using Node.js and Express. Utilized version control systems (Git) to manage and track changes in codebase."

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
                <p className="header-position">{currentExperienceInfo.position}</p>
            </div>
    )
    }

    function SidebarPreview() {
        return (
            <div className="preview-sidebar">
                <div className='sidebar-contact'>
                    <h2>Contact</h2>
                    <span className='sidebar-email'>{personalInfo.email}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>                    </span>
                    <span className='sidebar-phone'>{personalInfo.phone}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>phone</title><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" /></svg>
                    </span> 
                    <span className='sidebar-location'>{personalInfo.location}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                    </span> 
                </div>
                <div className='sidebar-education'>
                    <h2>Education</h2>
                    <span className='sidebar-degree'>{educationInfo.degree}</span> 
                    <span className='sidebar-school'>{educationInfo.school}</span>
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
                    <h2>Professional Experience</h2>
                    <div className='previous-job'>
                        <span className='previous-position'>{currentExperienceInfo.position}</span>
                        <span className='previous-company'>{currentExperienceInfo.company}</span> 
                        <span className='job-dates'>{currentExperienceInfo.startDate} - {currentExperienceInfo.endDate}</span> 
                        <p className='previous-job-description'>{currentExperienceInfo.description}</p>
                    </div>
                    <div className='previous-job'>
                        <span className='previous-position'>{firstExperienceInfo.position}</span>
                        <span className='previous-company'>{firstExperienceInfo.company}</span> 
                        <span className='job-dates'>{firstExperienceInfo.startDate} - {firstExperienceInfo.endDate}</span> 
                        <p className='previous-job-description'> {firstExperienceInfo.description}</p>
                    </div>
                </div>
            </div>
            )
    }

   return (
    <div className='cv-preview'>
        <PreviewHeader />
        <SidebarPreview />
        <MainContentPreview />
    </div>
   )
}

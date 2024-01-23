import './index.css'
import PropTypes from 'prop-types';

export default function Preview({ personalInfo, educationsArray, experiencesInfo}) {

    Preview.propTypes = {
        personalInfo: PropTypes.object.isRequired,
        educationsArray: PropTypes.array.isRequired,
        experiencesInfo: PropTypes.array.isRequired,
      };
      

    function PreviewHeader() {
        return (
            <div className="preview-header">
                <h1 className='header-name'>{personalInfo.name}</h1>
                <p className="header-position">{personalInfo.title}</p>
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
                    <>
                    {educationsArray.map((education) => (
                        <div className='education' id={education.key} key={education.key}>
                            <span className='sidebar-degree'>{education.degree}</span> 
                            <span className='sidebar-school'>{education.school}</span>
                            <span className='sidebar-dates'>{education.startDate} - {education.endDate}</span>
                            <span className='sidebar-school-location'>{education.location}</span>
                        </div>
                    ))}
                    </>
                </div>
            </div>
            )
    }

    function MainContentPreview() {
        return (
            <div className="preview-main">
                <div className='experience'>
                    <h2>Professional Experience</h2>
                    <>
                    {experiencesInfo.map((experience) => (
                        <div className='previous-job' id={experience.key} key={experience.key}>
                            <span className='previous-position'>{experience.position}</span>
                            <span className='previous-company'>{experience.company}</span> 
                            <span className='job-dates'>{experience.startDate} - {experience.endDate}</span> 
                            <p className='previous-job-description'>{experience.description}</p>
                        </div>
                    ))}
                    </>
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

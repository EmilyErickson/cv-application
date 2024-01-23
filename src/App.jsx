import { useState } from 'react'
import './App.css'
import GeneralInfo from './generalInfo'
import Education from './education'
import Experience from './experience'
import Preview from './preview'
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [personalInfo, setPersonalInfo] = useState({
    key: uuidv4(),
    name: "Jane Smith",
    title: "Software Development Engineer",
    email: "jane.l.smith@gmail.com",
    phone: "987-123-4560",
    location: "Chicago, USA"
  });
  
  function updatePersonalInfo(newInfo) {
    console.log("updatePersonalInfo newInfo =", newInfo)
    setPersonalInfo(newInfo);
  }
  
  const [experiencesArray, setExperiencesInfo] = useState([    
    {
      company: "Tech Innovators, Inc.",
      position: "Software Development Engineer",
      startDate: "2017-04",
      endDate: "2019-02",
      description: "Developed and maintained robust and scalable web applications using technologies such as React.js, Node.js, and MongoDB. Conducted code reviews to ensure code quality and adherence to coding standards.",
      key: uuidv4(),
    }, 
    {
      company: "InnovateTech Solutions",
      position: "Full Stack Software Developer",
      startDate: "2019-02",
      endDate: "2022-07",
      description: " Collaborated with cross-functional teams to gather requirements, analyze needs, and deliver high-quality software solutions. Implemented RESTful APIs for efficient communication between front-end and back-end systems.",
      key: uuidv4(),
    }, 
  ])

  function addNewExperience(newExperience) {
    const updatedExperiencesInfo = [...experiencesArray, newExperience];
    setExperiencesInfo(updatedExperiencesInfo);
  }


  function updateThisExperience(inputValue, newInfo, experience) {
    experience[inputValue] = newInfo
    setExperiencesInfo([...experiencesArray])
  }

  const [educationsArray, setEducationInfo] = useState([
    {    
      key: uuidv4(),
      school: "Georgia Institute of Technology",
      degree: "Computer Science",
      startDate: "2013-05",
      endDate: "2017-05",
      location: "Atlanta, GA"
  },])

function updateThisEducation(inputValue, newInfo, education) {
  console.log("updateThisEducation newInfo =", newInfo)
  education[inputValue] = newInfo
  setEducationInfo([...educationsArray]);

}

function addNewEducation(newEducation) {
  const updatedEducationArray = [...educationsArray, newEducation];
  setEducationInfo(updatedEducationArray);

}

  return (
    <div className='parent-container'>
      <div className='input-form'>
        <GeneralInfo personalInfo={personalInfo} updatePersonalInfo={updatePersonalInfo}/>
        <Education educationsArray={educationsArray} updateThisEducation={updateThisEducation} addNewEducation={addNewEducation}/>
        <Experience experiencesArray={experiencesArray} updateThisExperience={updateThisExperience} addNewExperience={addNewExperience}/>
      </div>
      <div>
        <Preview personalInfo={personalInfo} educationsArray={educationsArray} experiencesArray={experiencesArray} />
      </div>
    </div>
  )
}

export default App

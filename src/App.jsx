// import { useState } from 'react'
import './App.css'
import GeneralInfo from './generalInfoInputs'
import Education from './education'
import Experience from './experience'
import Preview from './preview'

function App() {
  // GeneralInfo()
  return (
    <div className='parent-container'>
      <div className='input-form'>
        <GeneralInfo />
        <Education />
        <Experience />
      </div>
      {/* <div> */}
        <Preview />
      {/* </div> */}
    </div>
  )
}

export default App

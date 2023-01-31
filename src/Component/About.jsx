import React from 'react'
import CommonThings from './CommonThings'
import AboutImage from '../Assets/About.svg'

function About() {
  return (
    <>
      <CommonThings name='Welcome to  about page' imgsrc={AboutImage} visit='/contact' btnName='Contact Now' />
    </>
  )
}

export default About
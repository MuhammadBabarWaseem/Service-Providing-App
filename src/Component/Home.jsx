import React from 'react'
import CommonThings from './CommonThings'
import HomeImage from '../Assets/HomePage.svg'

function Home() {

  return (
    <>
      <CommonThings name='Grow up your business with' imgsrc={HomeImage} visit='/service' btnName='Get Started' />
    </>
  )
}

export default Home
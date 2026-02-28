"use client"

import React from 'react'
import styleProfile from './Profile.module.css'
import { Typewriter } from 'react-simple-typewriter'

function Profile() {

  const word = ['Name: Puripat Hemthanon\nNickName: Poom']

  return (
    <>
      <div className={styleProfile.container}>
        <div className={styleProfile.content}>
          <div className={styleProfile.TextContent}>
            <Typewriter words={word} loop={1} cursor cursorStyle="_" typeSpeed={40}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
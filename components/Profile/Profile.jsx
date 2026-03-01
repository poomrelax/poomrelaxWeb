"use client"

import React from 'react'
import styleProfile from './Profile.module.css'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import MyImage from '@/public/myImage.webp'

function Profile() {

  const word = ['Name: Puripat Hemthanon\nNickName: Poom\nAge: 16\nBirthday: 3 February 2010']

  return (
    <>
      <div className={styleProfile.container}>
        <div className={styleProfile.content}>
          <div className={styleProfile.TextContent}>
            <Typewriter words={word} loop={1} cursor cursorStyle="_" typeSpeed={40}/>
          </div>
          <Image src={MyImage} width={250} height={250} alt='รูปของภูริพัฒน์ เหมทานนท์' style={{objectFit: 'cover', borderRadius: '8px', marginRight: 30, boxShadow: '0 0 20px #ffffff'}} />
        </div>
      </div>
    </>
  )
}

export default Profile
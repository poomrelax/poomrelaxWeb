"use client";

import React, { useState, useEffect } from 'react'
import { Typewriter } from 'react-simple-typewriter'

function TypeWring() {

    const word = ["Hello World.", "Poom Relax.", "Puripat Hemthanon.", "Website Relax.", "There is nothing we cannot do if we never give up."]

  return (
    <>
    <div style={{width: '700px'}}>
      <p style={{color: '#fff', fontSize: '13px', marginTop: '8px'}}><Typewriter  words={word} loop cursor cursorStyle="_" typeSpeed={80} deleteSpeed={50} delaySpeed={1500}/></p>
    </div>
    </>
  )
}

export default TypeWring
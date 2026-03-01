'use client'

import React from 'react'
import stylesPerformance from './Performance.module.css'
import { FaBookOpen } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

function Performance() {
  return (
    <>
    <div className={stylesPerformance.container}>
     <div className={stylesPerformance.content}>
        <h1>Performance / ผลงาน</h1>
        <div className={stylesPerformance.items}>
            <div className={stylesPerformance.box}>
                <FaBookOpen size={25} color='#00daf2'/>
                <h2>homework relax</h2>
            </div>
            <div className={stylesPerformance.box}>
                <ImProfile size={25} color='#00daf2'/>
                <h2>e-folio</h2>
            </div>
        </div>
        
     </div>
    </div>
    </>
  )
}

export default Performance
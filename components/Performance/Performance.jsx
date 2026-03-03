'use client'

import React, { useEffect, useRef } from 'react'
import stylesPerformance from './Performance.module.css'
import { FaBookOpen } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiShopee } from "react-icons/si";
import Image from 'next/image';
import Link from 'next/link';

function Performance() {

  const refs = useRef([])

  const items = [
    {icon: <FaBookOpen size={25} color='#00daf2'/>, title: 'homework relax', detail: 'เว็บไซต์จดการบ้านออนไลน์เป็นระบบที่ช่วยให้นักเรียนสามารถบันทึก ติดตาม และจัดการงานที่ได้รับมอบหมายได้อย่างเป็นระบบ ผู้ใช้งานสามารถเพิ่มรายละเอียดงาน กำหนดวันส่ง และตรวจสอบสถานะงานได้ทุกที่ทุกเวลาผ่านอินเทอร์เน็ต', logo: 'https://image2url.com/r2/default/images/1772440459829-a2939ecd-dc25-4512-917d-37ee3ac4be87.png', status: 'offline', link: 'https://homework.poomrelax.in.th/'},
    {icon: <IoMdPhonePortrait size={25} color='#00daf2'/>, title: 'homework relax App', detail: 'แอปจดการบ้านเป็นเครื่องมือที่ช่วยให้นักเรียนบันทึก ติดตาม และจัดการงานที่ได้รับมอบหมายได้อย่างสะดวกผ่านสมาร์ตโฟนหรือแท็บเล็ต ผู้ใช้งานสามารถเพิ่มรายละเอียดงาน กำหนดวันครบกำหนด และตั้งแจ้งเตือนล่วงหน้าเพื่อป้องกันการลืมส่งงาน แอปส่วนใหญ่มีฟีเจอร์จัดหมวดหมู่ตามรายวิชา แสดงงานในรูปแบบปฏิทิน และตรวจสอบสถานะงานว่าเสร็จแล้วหรือยังไม่เสร็จ ช่วยให้บริหารเวลาได้ดีขึ้นและจัดระเบียบการเรียนได้อย่างมีประสิทธิภาพ', logo: 'https://image2url.com/r2/default/images/1772440459829-a2939ecd-dc25-4512-917d-37ee3ac4be87.png', status: 'developing', link: 'no link'},
    {icon: <ImProfile size={25} color='#00daf2'/>, title: 'e-folio', detail: 'เว็บไซต์นี้เป็นเว็บไซต์แนะนำตัวและแฟ้มสะสมผลงาน (e-Portfolio) ของ นายภูริพัฒน์ เหมทานนท์ จัดทำขึ้นเพื่อรวบรวมประวัติส่วนตัว ประวัติการศึกษา ทักษะ ความสามารถ และผลงานต่าง ๆ ไว้ในรูปแบบออนไลน์', logo: 'https://image2url.com/r2/default/images/1772511676633-90db477a-ae53-4c5e-9c82-6ce0d9cd4dd3.png', status: 'online', link: 'https://efolio.poomrelax.in.th/'},
    {icon: <SiShopee size={25} color='#00daf2'/>, title: 'bangbaimai shope', detail: 'เว็ปไซต์สั่งอาหารในตลาดบางใบไม้ เป็นรายวิชาของการศึกษาค้นคว้าด้วยตัวเอง IS ทำเพื่อให้นักท่องเที่ยวได้ทราบว่าร้านหรือบริการไหนเปิดให้บริการบ้าง และสามารถจ้องหรือสั่งอาหารได้ผ่านเว็ปไซต์', logo: 'https://image2url.com/r2/default/images/1772512514690-a5d2a81c-5ee4-4380-b63f-1aac999ef523.png', status: 'offline', link: 'https://bangbaimai.poomrelax.in.th/'},
  ]

  const colorStatus = (e) => {
    if(e == 'online'){
      return <p style={{color: 'hsl(140, 100%, 58%)', fontWeight: '600'}}>{e} 🟢</p>
    }else if(e == 'developing'){
      return <p style={{color: 'hsl(54, 100%, 60%)', fontWeight: '600'}}>{e} 🕑</p>
    }else if(e == 'offline'){
      return <p style={{color: 'hsl(0, 0%, 85%)', fontWeight: '600'}}>{e} 🔘</p>
    }
  }

  useEffect(() => {
        const observer = new IntersectionObserver(
      (all) => {
        all.forEach((e) => {
          if(e.isIntersecting){
            e.target.classList.add(stylesPerformance.show)
          }
        })
      },{threshold: 0.1}
    )

    refs.current.forEach((box) => {
      if(box) {observer.observe(box)}
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
    <div className={stylesPerformance.container}>
     <div className={stylesPerformance.content}>
    <div className={stylesPerformance.backdrop}></div>
        <h1>Performance / ผลงาน</h1>
        <div className={stylesPerformance.items}>
          {items.map((item, index) => (
            <div className={stylesPerformance.box} key={index} ref={(e) => refs.current[index] = e} >
              <div className={stylesPerformance.header}>
                {item.icon}
                <h2>{item.title}</h2>
              </div>
              <div className={stylesPerformance.detail}>
                <div className={stylesPerformance.logo}>
                  {item.logo != '' && (
                    <Image src={item.logo} width={100} height={100} alt={item.detail} style={{marginRight: '10px', borderRadius: '5px'}}/>
                  )}
                </div>
                <div className={stylesPerformance.content}>
                  <p>{item.detail}</p>
                  <div style={{display: 'flex', gap: '10px', width: '100%', marginTop: '3px'}}><p>status: </p>{colorStatus(item.status)}</div>
                  {item.link == 'no link' ? (
                    <div style={{display: 'flex', gap: '10px', width: '100%', marginTop: '3px'}}><p>link: </p><p style={{textTransform: 'lowercase', textDecoration: 'underline', color: 'var(--color2)'}}>{item.link}</p></div>
                  ) : (
                    <div style={{display: 'flex', gap: '10px', width: '100%', marginTop: '3px'}}><p>link: </p><Link href={item.link} target='_blank'><p style={{textTransform: 'lowercase', textDecoration: 'underline', color: 'var(--color2)'}}>{item.link}</p></Link></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
     </div>
    </div>
    </>
  )
}

export default Performance
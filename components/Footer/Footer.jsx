import React from 'react'
import stylesFooter from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <footer className={stylesFooter.container}>
      <div className={stylesFooter.contact}>
        <Link href={'https://www.instagram.com/poom_relax/'} target='_blank' style={{textDecoration: 'none'}}><p>Instagram</p></Link>
        <Link href={'https://www.facebook.com/poomrelax'} target='_blank' style={{textDecoration: 'none'}}><p>Facebook</p></Link>
        <Link href={'https://www.youtube.com/@poomrelax9193'} target='_blank' style={{textDecoration: 'none'}}><p>YouTube</p></Link>
        <Link href={'https://line.me/ti/p/8ves2LrBLQ'} target='_blank' style={{textDecoration: 'none'}}><p>Line</p></Link>
        <Link href={'https://www.tiktok.com/@poom_relax?is_from_webapp=1&sender_device=pc'} target='_blank' style={{textDecoration: 'none'}}><p>Tiktok</p></Link>
        <Link href={'mailto:poomrelax@poomrelax.in.th'} style={{textDecoration: 'none'}}><p>Email</p></Link>
        <Link href={'https://github.com/poomrelax'} target='_blank' style={{textDecoration: 'none'}}><p>GitHub</p></Link>
      </div>
      <div style={{width: '75%', height: '1px', background: '#fff', margin: '35px 0'}}></div>
    <div style={{width: '75%', display: 'flex', justifyContent: 'space-between'}}>
      <div className={stylesFooter.copy}>
        <Image src={'https://image2url.com/r2/default/images/1772511676633-90db477a-ae53-4c5e-9c82-6ce0d9cd4dd3.png'} width={50} height={50} alt='logo poom relax'/>
        <p>© 2026 Poom Relax. All rights reserved</p>
      </div>
      <div style={{display: 'flex', gap: '10px'}}>
        <Image src={'https://camo.githubusercontent.com/e09de2e26b8969bbdb89a550c09c8cb18f1402707ee24e5d4c323b99aeb4ca52/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67'} width={40} height={40} alt='logo poom relax' style={{borderRadius: '5px', objectFit: 'cover'}}/>
        <Image src={'https://image2url.com/r2/default/images/1772516784528-c3602e4e-0198-46db-a153-9dca314097f2.png'} width={40} height={40} alt='logo poom relax' style={{borderRadius: '5px', objectFit: 'cover'}}/>
        <Image src={'https://image2url.com/r2/default/images/1772516847966-2f7a3626-b003-4549-aa10-eb3691af6b87.png'} width={40} height={40} alt='logo poom relax' style={{borderRadius: '5px', objectFit: 'cover'}}/>
        <Image src={'https://image2url.com/r2/default/images/1772516928907-de6adb92-60d0-4b81-b81d-ca0859b34e3a.png'} width={40} height={40} alt='logo poom relax' style={{borderRadius: '5px', objectFit: 'cover'}}/>
        <Image src={'https://image2url.com/r2/default/images/1772516992362-04b08d4b-f64e-4d17-967d-abbfa9dac08d.png'} width={40} height={40} alt='logo poom relax' style={{borderRadius: '5px', objectFit: 'cover'}}/>
      </div>
    </div>
    </footer>
    </>
  )
}

export default Footer
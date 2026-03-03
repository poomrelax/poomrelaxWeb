import Image from "next/image";
import styles from "./page.module.css";
import RelaxIconPNG from '@/public/poomrelaxIconPNG.png'
import TypeWring from "@/components/TypeWring";
import { HiChevronDoubleDown } from "react-icons/hi2";
import Profile from "@/components/Profile/Profile";
import Performance from "@/components/Performance/Performance";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
    <div className={styles.header}>
      <div className={styles.container}>
      <div className={styles.i_backdrop}></div>
      <div className={styles.content}>
        <div style={{color: '#fff', display: 'flex', gap: '8px', fontFamily: 'var(--font1)', fontSize: 11}} className={styles.texth}><h1>welcome to</h1><h1 >website</h1></div>
        <div style={{display: 'flex', alignItems: 'center', gap: '8px'}} className={styles.host}>
          <h2>{"<"}</h2>
          <h2 className={styles.textheader} >poomrelax</h2>
          <h2>{"/>"}</h2>
        </div>
        {/* <h3 style={{fontSize: '16px', fontFamily: 'var(--font1)',  marginTop: '5px'}}>This website, belonging to Mr. Puriphat Hemtananont</h3> */}
       <TypeWring/>
      </div> 
      <Image src={RelaxIconPNG} alt="poomrelaxIcon" width={300} height={300} className={styles.logo} style={{marginRight: '10%'}}/>
    </div>
    <div className={styles.scrollA}>
      <HiChevronDoubleDown color="#ffffff" size={25}/>
    </div>
    </div>
    <Profile />
    <Performance />
    <Footer/>
    </>
  );
}

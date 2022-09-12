import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import About from '../components/home/about'
import Contact from '../components/home/contact'
import SampleWork from '../components/home/sampleWork'
import styles from '../styles/Home.module.scss';
import Script from 'next/script'
import Footer from '../components/home/footer'
import ToastPortfolioNotification from '../components/notification/ToastPorfolioNotification'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showToastPortfolioNotification, setShowToastPortfolioNotification] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setShowToastPortfolioNotification(false);
    }, 3000)
  });
  
  
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <About />
      <SampleWork />
      <Contact />
      <Footer />
      {
        showToastPortfolioNotification && <ToastPortfolioNotification />
      }
      <Script src="https://kit.fontawesome.com/677d54bf0c.js" crossorigin="anonymous" />
    </div>
  )
}

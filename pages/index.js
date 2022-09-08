import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header/Header'
import About from '../components/home/about'
import Contact from '../components/home/contact'
import Portfolio from '../components/home/portfolio'
import Services from '../components/home/services'
import styles from '../styles/Home.module.scss';
import Script from 'next/script'
import Footer from '../components/home/footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <About />
      <Services/>
      <Portfolio />
      <Contact />
      <Footer />
      <Script src="https://kit.fontawesome.com/677d54bf0c.js" crossorigin="anonymous" />
    </div>
  )
}

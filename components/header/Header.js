import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  const [rightValue, setRightValue] = useState('-200');
  return (
    <header className={styles.header} id='home'>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h3>Ben<span>Ar</span></h3>
          {/* <img className={styles.logo} src="./images/logo.png" alt="logo" /> */}
          <ul 
            style={{right: 
              `${rightValue}px`
              // '-00px'
            }}
            >
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <Link href="/sample-components" passHref><a>Components</a></Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <i className="fa-solid fa-xmark" onClick={()=>setRightValue('-200')}></i>
          </ul>
          <i className="fa-solid fa-bars" onClick={()=>setRightValue('0')}></i>
        </nav>
        <div className={styles.headerText}>
          <p>Web Developer</p>
          <h1>Hi, I{`'`}m <br/> <span>Benar</span> Isais</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

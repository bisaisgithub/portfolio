import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  const [rightValue, setRightValue] = useState("-200");
  // let A = [10,1,2,3,4];
  // let B = [2,6,3,7,10];
  // const manualFilter = (A, B)=>{
  //   let temp = ``;
  //   for(let i = 0; A.length > i; i++){
  //     let checkExist = false;
  //     let j = 0;
  //     while (B.length > j) {
  //       if(A[i] === B[j]){
  //         checkExist = true;
  //       }
  //       j++;
  //     }
  //     if (!checkExist) {
  //       if (temp === '') {
  //         temp = A[i]
  //       } else {
  //         temp = `${temp},${A[i]}`
  //       }
  //     }
  //   }
  //   return temp;
  // }
  // console.log('items in A that are not in B :', manualFilter(A,B))
  return (
    <header className={styles.header} id="home">
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h3>
            B<span>en</span>
          </h3>
          {/* <img className={styles.logo} src="./images/logo.png" alt="logo" /> */}
          <ul
            style={{
              right: `${rightValue}px`,
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
              <Link href="/sample-components" passHref>
                <a>Components</a>
              </Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <i
              className="fa-solid fa-xmark"
              onClick={() => setRightValue("-200")}
            ></i>
          </ul>
          <i
            className="fa-solid fa-bars"
            onClick={() => setRightValue("0")}
          ></i>
        </nav>
        <div className={styles.headerText}>
          {/* <p>Aspiring Web Developer</p> */}
          <div>
            <div>
              <h1>{`Hi, I'm`}</h1>
              <h1>
                <span>Benar</span> Isais
              </h1>
            </div>

            <p>Aspiring Web Developer</p>
          </div>
          {/* <img src="./images/benHeader3.png" alt="" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

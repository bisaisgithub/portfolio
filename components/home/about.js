import styles from '../../styles/Home.module.scss'

const About = () => {
  return ( 
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img src="images/user.png" alt="user" />
          </div>
          <div className={styles.col2}>
            <h1>About Me</h1>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default About;
import styles from "../../styles/Home.module.scss";
import { useState } from "react";

const About = () => {

  const [tabTitle, setTabTitle] = useState(
    {
      skills: true,
      experience: false,
      education: false
    }
  );

  const handleTabLink = ()=>{
    if (tabLinks !== styles.tabLinks) {
      
    }
  }

  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img src="images/user.png" alt="user" />
          </div>
          <div className={styles.col2}>
            <h2>About Me</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus quasi aliquid, deleniti reiciendis nesciunt commodi
              consectetur consequuntur doloremque quo, quibusdam velit alias
              minus. Dolorum ipsa quam dolores commodi architecto soluta?
            </p>
            <div className={styles.tabTitles}>
              <p onClick={()=>setTabTitle({skills: true, experience: false, education: false})} className={tabTitle.skills?`${styles.tabLinks} ${styles.activeTabLink}`: styles.tabLinks}>Skill</p>
              <p onClick={()=>setTabTitle({skills: false, experience: true, education: false})} className={tabTitle.experience?`${styles.tabLinks} ${styles.activeTabLink}`: styles.tabLinks}>Experience</p>
              <p onClick={()=>setTabTitle({skills: false, experience: false, education: true})} className={tabTitle.education?`${styles.tabLinks} ${styles.activeTabLink}`: styles.tabLinks}>Education</p>
            </div>
            <div className={tabTitle.skills?`${styles.tabContent} ${styles.activeTabContent}`: styles.tabContent}>
              <ul>
                <li><span>UI/UX</span><br/>Designing Web/App interfaces</li>
                <li><span>Web Development</span><br/>Web App Development</li>
                <li><span>App Development</span><br/>Building Android/iOS apps</li>
              </ul>
            </div>
            <div className={tabTitle.experience?`${styles.tabContent} ${styles.activeTabContent}`: styles.tabContent}>
              <ul>
                <li><span>2021 - Current</span><br/>UI/UX Design Training at ET Institute</li>
                <li><span>2019 - 2021</span><br/>Team Lead at StarApp LLC.</li>
                <li><span>2017 - 2019</span><br/>UI/UX Design Executive at Coin Digital Ltd.</li>
                <li><span>2016 - 2017</span><br/>Internship at ekart eCommerce.</li>
              </ul>
            </div>
            <div className={tabTitle.education?`${styles.tabContent} ${styles.activeTabContent}`: styles.tabContent}>
              <ul>
                <li><span>2016</span><br/>UI/UX Design Training at ET Institute</li>
                <li><span>2016</span><br/>MBA from MIT Bangalore.</li>
                <li><span>2014</span><br/>BBA from ISM Bangalore.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

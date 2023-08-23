import styles from "../../styles/Home.module.scss";
import { useState } from "react";

const About = () => {
  const [data, setData] = useState({
    about:
      "A career shifter who fell in love in building useful web apps that improve lives in the community. Spent 15 years in a Largest Retail Company in KSA from stocker to IT coordinator, End User Support, System Analyst. Currently a graduating BSIT student",
    skills: [
      {
        title: "Front-End Development",
        stack: "NextJS, ReactJS, Javascript, CSS, HTML"
      },
      {
        title: "Back-End Development",
        stack: "NodeJS, ExpressJS, Java, PHP, MongoDB, MySQL ",
      }
    ],
    experience: [
      {
        title: "Sep 29, 2022 - Present",
        designation: "Junior Software Engineer(Intern) at Tagpros Children Inc."
      },
      {
        title: "2014 - 2017",
        designation: "Senior System Analyst at Azizia Panda United Inc."
      },
      {
        title: "2007 - 2014",
        designation: "System Analyst at Azizia Panda United Inc.",
      },
      {
        title: "2005 - 2007",
        designation: "IT Coordinator at Azizia Panda United Inc.",
      },
      {
        title: "2004 - 2005",
        designation: "Inventory Staff at Azizia Panda United Inc.",
      },
      {
        title: "2002 - 2004",
        designation: "Stocker at Azizia Panda United Inc.",
      }
    ],
    education: [
      {
        year: "2000 - 2001",
        course: "Undergraduate in Computer Science at AMA Computer College Tarlac Philippines"
      },
      {
        year: "2018 - Present",
        course: "BSIT 4th year student final term Practicum at AMA Computer College Tarlac Philippines",
      }
    ]
  });
  const [tabTitle, setTabTitle] = useState({
    skills: true,
    experience: false,
    education: false,
  });

  const handleTabLink = () => {
    if (tabLinks !== styles.tabLinks) {
    }
  };

  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <img src="images/about2.png" alt="user" />
          </div>
          <div className={styles.col2}>
            <h2>About Me</h2>
            <p>{data.about}</p>
            <div className={styles.tabTitles}>
              <p
                onClick={() =>
                  setTabTitle({
                    skills: true,
                    experience: false,
                    education: false,
                  })
                }
                className={
                  tabTitle.skills
                    ? `${styles.tabLinks} ${styles.activeTabLink}`
                    : styles.tabLinks
                }
              >
                Skill
              </p>
              <p
                onClick={() =>
                  setTabTitle({
                    skills: false,
                    experience: true,
                    education: false,
                  })
                }
                className={
                  tabTitle.experience
                    ? `${styles.tabLinks} ${styles.activeTabLink}`
                    : styles.tabLinks
                }
              >
                Experience
              </p>
              <p
                onClick={() =>
                  setTabTitle({
                    skills: false,
                    experience: false,
                    education: true,
                  })
                }
                className={
                  tabTitle.education
                    ? `${styles.tabLinks} ${styles.activeTabLink}`
                    : styles.tabLinks
                }
              >
                Education
              </p>
            </div>
            <div
              className={
                tabTitle.skills
                  ? `${styles.tabContent} ${styles.activeTabContent}`
                  : styles.tabContent
              }
            >
              <ul>
                {data.skills.map((skill, i) => (
                  <li key={i}>
                    <span>{skill.title}</span>
                    <p>{skill.stack}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={
                tabTitle.experience
                  ? `${styles.tabContent} ${styles.activeTabContent}`
                  : styles.tabContent
              }
            >
              <ul>
                {
                  data.experience.map((exp, i)=>(
                    <li key={i}>
                      <span>{exp.title}</span>
                      <p>{exp.designation}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div
              className={
                tabTitle.education
                  ? `${styles.tabContent} ${styles.activeTabContent}`
                  : styles.tabContent
              }
            >
              <ul>
                {
                  data.education.map((edu, i)=>(
                    <li key={i}>
                      <span>{edu.year}</span>
                      <p>{edu.course}</p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

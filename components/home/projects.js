import styles from "../../styles/sample-components/Projects.module.scss";
import { useState } from "react";

const Projects = () => {
  const [data, setData] = useState([
    {
      title: "This Portfolio",
      details:
        "Built with Full Stack NextJS(Reactjs+NodeJS ExpressJS) and MongoDB. A Personal Portfolio Website that was made for applying web development internship/OJT program",
      git: "https://github.com/bisaisgithub/portfolio.git",
      link: "",
      linkText: "",
    },
    {
      title: "Calimlim Dental Clinic System",
      details:
        "Built with Full Stack NextJS(Reactjs+NodeJS ExpressJS) and MongoDB. Capstone Project for Calimlim Dental Clinic",
      link: "https://calimlimdentalclinic.com/",
      git: "",
      linkText: "View Site",
    },
    // {
    //   title: "Aquilas E-commerce",
    //   details:
    //     "Built with Full Stack NextJS(Reactjs+NodeJS ExpressJS) and MongoDB. A on-going collaboration project with AMA student",
    //   link: "https://aquilas-store-app.vercel.app/",
    //   git: "",
    //   linkText: "View Site",
    // },
    // {
    //   title: "Cadiz Dynamic Website",
    //   details:
    //     "Built with Full Stack NextJS(Reactjs+NodeJS ExpressJS) and MongoDB. A on-going collaboration project with a refresher",
    //   link: "https://cadiz-arkitektuz.vercel.app/",
    //   git: "",
    //   linkText: "View Site",
    // },
    {
      title: "MindTech Student Management System",
      details:
        "A windows executable Java application developed with JAVA and MySQL, intended to fulfill the TESDA requirement after training.",
      link: "",
      linkText: "",
      git: "https://github.com/bisaisgithub/msrms.git",
    },
  ]);

  return (
    <div className={styles.sampleCard} id="projects">
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Projects</h2>
        <div className={styles.servicesList}>
          {data &&
            data.map((item, i) => (
              <div key={i}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <span>
                  <a
                    href={item.git === "" ? `#` : item.git}
                    target="_blank"
                    rel="noreferrer"
                    style={item.git !== ''? {cursor: 'pointer'} : {pointerEvents: 'none'}}
                  >
                    {item.git === "" ? `Private Repository` : `Source Code`}
                  </a>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.linkText}
                  </a>
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

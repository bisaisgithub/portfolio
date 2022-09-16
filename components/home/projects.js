import styles from "../../styles/sample-components/Projects.module.scss";
import { useState } from "react";

const Projects = () => {
  const [data, setData]=useState([
    {
      title: 'This Portfolio',
      details: 'Built with NextJS and MongoDB. A Personal Portfolio Website that was made for applying web development internship/OJT program',
      git: 'https://github.com/bisaisgithub/portfolio.git',
      link:'',
      linkText: ''
    },
    {
      title: 'Calimlim Dental Clinic System',
      details: 'Built with NextJS and MongoDB. On-going project for Calimlim Dental Clinic',
      link: '',
      git: 'https://github.com/bisaisgithub/dcs3.git',
      linkText: ''
    },
    {
      title: 'Calimlim Dental Clinic System',
      details: 'Built with ReactJS, Nodejs ExpressJS and MySQL. Old version of the on-going project for Calimlim Dental Clinic',
      link: '',
      git: 'https://github.com/bisaisgithub/dcs.git',
      linkText: ''
    },
    {
      title: 'MindTech Student Management System',
      details: 'Built with JAVA and MySQL. A Local JAVA Application after TESDA Training project',
      link: '',
      linkText: '',
      git: 'https://github.com/bisaisgithub/msrms.git'
    },
  ]);

  return (
    <div className={styles.sampleCard} id='services'>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Projects</h2>
        <div className={styles.servicesList}>
          {
            data && data.map((item, i)=>(
              <div key={i}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <span>
                  <a href={item.git} target='_blank' rel="noreferrer">Source Code</a>
                  <a href="#">{item.linkText}</a>
                </span>
                  
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;

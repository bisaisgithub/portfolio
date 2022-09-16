import styles from '../../styles/Home.module.scss';
import { useState } from 'react';

const SampleCard = () => {
  const [data, setData]=useState([
    {
      title: 'This Portfolio',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis sit corporis veritatis similique unde facere commodi fugiat amet?Corporis obcaecati numquam minus maxime!.',
      git: 'git',
      link:'',
      linkText: 'This Portfolio'
    },
    {
      title: 'Calimlim Dental Clinic System',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis sit corporis veritatis similique unde facere commodi fugiat amet?Corporis obcaecati numquam minus maxime!.',
      link: 'learn more',
      git: 'git',
      linkText: ''
    },
    {
      title: 'MindTech Student Management System',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis sit corporis veritatis similique unde facere commodi fugiat amet?Corporis obcaecati numquam minus maxime!.',
      link: 'learn more',
      linkText: 'Local Application',
      git: 'git'
    },
  ]);

  return ( 
    <div className={styles.portfolio} id='sample-work'>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Sample Cards</h2>
        <div className={styles.workList}>
          <div className={styles.work}>
            <img src="./images/work-1.png" alt="work-1" />
            <div className={styles.layer}>
              <h3>This Portfolio</h3>
              <p>Developing using NextJS a (ReactJS framework with built in Node Express API) and MongoDB. Contains information about me and my sample works and components.
              </p>
              {/* <a href="https://github.com/bisaisgithub/portfolio.git"></a> */}
            </div>
          </div>
          <div className={styles.work}>
            <img src="./images/work-2.png" alt="work-2" />
            <div className={styles.layer}>
              <h3>Dental Clinic System</h3>
              <p>Developing using NextJS a (ReactJS framework with built in Node Express API) and MongoDB. Consist of Patient Registration, User Management, Inventory Management, Reports.
              </p>
            </div>
          </div>
          <div className={styles.work}>
            <img src="./images/work-3.png" alt="work-3" />
            <div className={styles.layer}>
              <h3>E-Commerce</h3>
              <p>Developing using NextJS a (ReactJS framework with built in Node Express API) and MongoDB.
                Redux is added for state management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default SampleCard;
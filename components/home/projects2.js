import { useState } from 'react';
import styles from '../../styles/Projects2.module.scss'
import CardPic from '../cardPic/cardPic';

const Projects2 = () => {
  const [data, setData] = useState([
    {
      title: 'Calimlim Dental Clinic System',
      description: 'Built with Full Stack Nextjs(Reactjs+Node ExpressJS)'
    }
  ])
  return ( 
    <div className={styles.projects2} id="projects2">
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Projects2</h2>
        <div className={styles.list}>
            <CardPic />
        </div>
      </div>
    </div>
   );
}
 
export default Projects2;
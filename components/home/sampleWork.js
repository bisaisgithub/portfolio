import styles from '../../styles/Home.module.scss';

const SampleWork = () => {
  return ( 
    <div className={styles.portfolio} id='sample-work'>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Sample Work</h2>
        <div className={styles.workList}>
          <div className={styles.work}>
            <img src="./images/work-1.png" alt="work-1" />
            <div className={styles.layer}>
              <h3>This Portfolio</h3>
              <p>Developing using NextJS a (ReactJS framework with built in Node Express API) and MongoDB. Contains information about me and my sample works.
              </p>
              {/* <a href="#">link</a> */}
            </div>
          </div>
          <div className={styles.work}>
            <img src="./images/work-2.png" alt="work-2" />
            <div className={styles.layer}>
              <h3>Dental Clinic System</h3>
              <p>Developing using NextJS a (ReactJS framework with built in Node Express API) and MongoDB. Consist of Patient Registration, User Management, Inventory Management, Reports.
              </p>
              {/* <a href="#">link</a> */}
            </div>
          </div>
          <div className={styles.work}>
            <img src="./images/work-3.png" alt="work-3" />
            <div className={styles.layer}>
              <h3>E-Commerce</h3>
              <p>Developing using NextJS a (ReactJS framework with built in Node Express API) and MongoDB.
                Redux is added for state management.
              </p>
              {/* <a href="#">link</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default SampleWork;
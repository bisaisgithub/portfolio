import styles from '../../styles/Home.module.scss';

const Portfolio = () => {
  return ( 
    <div className={styles.portfolio} id='portfolio'>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>My Work</h2>
        <div className={styles.workList}>
          <div className={styles.work}>
            <img src="./images/work-1.png" alt="work-1" />
            <div className={styles.layer}>
              <h3>Social Media App</h3>
              <p>The app connects you to the talented people around the world.
                Donwload it from play store.
              </p>
              <a href="#">link</a>
            </div>
          </div>
          <div className={styles.work}>
            <img src="./images/work-2.png" alt="work-2" />
            <div className={styles.layer}>
              <h3>Social Media App</h3>
              <p>The app connects you to the talented people around the world.
                Donwload it from play store.
              </p>
              <a href="#">link</a>
            </div>
          </div>
          <div className={styles.work}>
            <img src="./images/work-3.png" alt="work-3" />
            <div className={styles.layer}>
              <h3>Social Media App</h3>
              <p>The app connects you to the talented people around the world.
                Donwload it from play store.
              </p>
              <a href="#">link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Portfolio;
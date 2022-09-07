import styles from '../../styles/Home.module.scss';

const Contact = () => {
  return ( 
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contactLeft}>
            <h2 className={styles.subTitle}>Contact Me</h2>
            <p>contact@example.com</p>
            <p>012345789</p>
            <div className={styles.socialIcons}>
              <a href="#">FB</a>
              <a href="#">FB</a>
              <a href="#">FB</a>
              <a href="#">FB</a>
            </div>
            <a href="/images/my-cv.pdf" download className={`${styles.btn} ${styles.btn2}`}>Download Resume</a>
          </div>
          <div className={styles.contactLeft}>
            <form>
              <input type="text" name='name' placeholder='Your Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" id="" placeholder='Your Message' rows="6"></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;
import styles from '../../styles/Home.module.scss';

const Contact = () => {
  return ( 
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contactLeft}>
            <h2 className={styles.subTitle}>Contact Me</h2>
            <p><i class="fa-regular fa-envelope"></i><a href="mailto:benaremail@gmail.com">benaremail@gmail</a> </p>
            <p><i class="fa-regular fa-envelope"></i><a href="tel:+639569346664">+639569346664</a> </p>
            {/* <div className={styles.socialIcons}>
              <a href="#"><i class="fa-brands fa-github"></i></a>
              <a href="#">FB</a>
              <a href="#">FB</a>
              <a href="#">FB</a>
            </div> */}
            <div>
              <a href="/images/my-cv.pdf" download className={`${styles.btn} ${styles.btn2}`}>Receive Resume via Email</a>
             <a href="/images/my-cv.pdf" download className={`${styles.btn} ${styles.btn2}`}>Download Resume</a>
            </div>
          </div>
          <div className={styles.contactRight}>
            <form>
              <input type="text" name='name' placeholder='Your Name' required/>
              <input type="email" name='email' placeholder='Your Email' required/>
              <textarea name="message" id="" placeholder='Your Message' rows="6"></textarea>
              <button type='submit' className={`${styles.btn} ${styles.btn2}`}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default Contact;
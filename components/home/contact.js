import axios from "axios";
import { useState } from "react";
import styles from "../../styles/Home.module.scss";

const Contact = () => {
  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messageSent, setMessageSent] = useState(false);
  const [submitting, setSubmitting] =useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting('Submitting');
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER}api/messages`,
      message
    );
    if (res.data._id) {
      await setMessageSent(true);
      setTimeout( ()=>{
        setMessageSent(false);
        setMessage({name:'',email:'',message:''});
        setSubmitting('Submit');
      }, 4000);
      setSubmitting('Submitted');
      // setMessage({name:'',email:'',message:''});
    }else{
      setSubmitting(false);
    }
    // console.log("res", res);
  };
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.contactLeft}>
            <h2 className={styles.subTitle}>Contact Me</h2>
            <p>
              <i className="fa-regular fa-envelope"></i>
              <a href="mailto:benaremail@gmail.com">
                benaremail@gmail.com
              </a>{" "}
            </p>
            <p>
              <i className="fa-solid fa-mobile-screen"></i>
              <a href="tel:+639569346664">+639569346664</a>{" "}
            </p>
            {/* <div className={styles.socialIcons}>
              <a href="#"><i class="fa-brands fa-github"></i></a>
              <a href="#">FB</a>
              <a href="#">FB</a>
              <a href="#">FB</a>
            </div> */}

            {/* <a href={''} className={`${styles.btn} ${styles.btn2}`}>Receive Resume via Email</a> */}
            <a
              href="/images/Benar-resume.pdf"
              className={`${styles.btn} ${styles.btn2}`}
            >
              Download Resume
            </a>
          </div>
          <div className={styles.contactRight}>
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => {
                  setMessage({ ...message, name: e.target.value });
                }}
                maxLength="60"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={message.name}
              />
              <input
                onChange={(e) => {
                  setMessage({ ...message, email: e.target.value });
                }}
                maxLength="60"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={message.email}
              />
              <textarea
                onChange={(e) => {
                  setMessage({ ...message, message: e.target.value });
                }}
                name="message"
                id=""
                placeholder="Your Message"
                rows="6"
                maxLength="100"
                required
                value={message.message}
              ></textarea>
              <button style={submitting !== 'Submit'? {backgroundColor: 'gray', border: 'none', cursor: 'wait'}: {backgroundColor:'#ff004f'}} disabled={submitting !== 'Submit'} type="submit" className={`${styles.btn} ${styles.btn2}`}>
                {
                  submitting
                }
              </button>
              {messageSent && <p>Your message has been sent</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

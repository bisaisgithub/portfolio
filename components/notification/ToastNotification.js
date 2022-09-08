import styles from '../../styles/ToastNotification.module.scss';

const ToastNotification = ({toastList, position}) => {
  return ( 
    <div className={`${styles.container} ${styles[position]}`}>
      {
        toastList.map((toast, i)=>(
          
          <div
            key={i}
            style={{backgroundColor: toast.backgroundColor}}
            className={styles.toastBox}
          >
            <button>X</button>
            <div>
              <p>{toast.title}</p>
              <p>{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
 
export default ToastNotification;
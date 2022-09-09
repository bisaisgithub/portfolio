import { useCallback, useEffect } from 'react';
import styles from '../../styles/ToastNotification.module.scss';

const ToastNotification = ({toastList, position, setList}) => {

  const deleteToast = useCallback(id=>{
    // console.log(id)
    const toastListItem = toastList.filter(e=> e.id !== id);
    setList(toastListItem)
  }, [toastList, setList]);

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(toastList.length){
        deleteToast(toastList[0].id);
      }
    }, 3000)
    return ()=>{
      clearInterval(interval);
    }
  }, [toastList, deleteToast])
  return ( 
    <div className={`${styles.container} ${styles[position]}`}>
      {
        toastList.map((toast, i)=>(
          
          <div
            key={i}
            style={{backgroundColor: toast.backgroundColor}}
            className={`${styles.toastBox} ${styles.toast} ${styles[position]}`}
          >
            <button onClick={()=>{deleteToast(toast.id)}}>X</button>
            <div>
              <p className={styles.title}>{toast.title}</p>
              <p className={styles.description}>{toast.description}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}
 
export default ToastNotification;
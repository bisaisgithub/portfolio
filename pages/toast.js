import { useState } from "react";
import ButtonToast from "../components/notification/ButtonToast";
import ToastNotification from "../components/notification/ToastNotification";
import styles from '../styles/ToastPage.module.scss';


const ToastPage = () => {
  const [list, setList] = useState([]);
  console.log('list', list);
  let toastProperties = null
  const showToast = ()=>{
    toastProperties = {
      id: 1,
      title: 'Success',
      description: 'This is a success toast component',
      backgroundColor: '#5cb85c'
    }
    setList([toastProperties]);
  };

  return ( 
    <div className={styles.container}>
      <h1>Toast Page</h1>
      <div className={styles.buttons}>
        <ButtonToast handleClick={()=>{showToast()}}>Success</ButtonToast>
        <ButtonToast>Danger</ButtonToast>
        <ButtonToast>Info</ButtonToast>
        <ButtonToast>Warning</ButtonToast>
      </div>
      <ToastNotification toastList={list} />
    </div>
   );
}
 
export default ToastPage;
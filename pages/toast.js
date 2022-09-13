import { useEffect, useState } from "react";
import ButtonToast from "../components/notification/ButtonToast";
import ToastNotification from "../components/notification/ToastNotification";
import ToastPortfolioNotification from "../components/notification/ToastPorfolioNotification";
import styles from '../styles/ToastPage.module.scss';


const ToastPage = () => {
  const [list, setList] = useState([]);
  let toastProperties = [];
  const showToast = type =>{
    switch(type){
      case 'success':
        toastProperties = {
        id: list.length+1,
        title: 'Success',
        description: 'This is a success toast component',
        backgroundColor: '#5cb85c'
        }
        break;
      case 'danger':
        toastProperties = {
        id: list.length+1,
        title: 'Danger',
        description: 'This is a danger toast component',
        backgroundColor: '#d9534f'
        }
        break;
      case 'info':
        toastProperties = {
        id: list.length+1,
        title: 'Info',
        description: 'This is a info toast component',
        backgroundColor: '#5bc0de'
        }
        break;
      case 'warning':
        toastProperties = {
        id: list.length+1,
        title: 'Warning',
        description: 'This is a warning toast component',
        backgroundColor: '#f0ad4e'
        }
        break;
      default:
        toastProperties = [];
    }
    setList([...list, toastProperties])
  };
  const [close, setClose] =useState(3)
  useEffect(()=>{
    
  }, [])


  return ( 
    <div className={styles.container}>
      <h1>Toast Page: {close}</h1>
      <div className={styles.buttons}>
        <ButtonToast handleClick={()=>{showToast('success')}}>Success</ButtonToast>
        <ButtonToast handleClick={()=>{showToast('danger')}}>Danger</ButtonToast>
        <ButtonToast handleClick={()=>{showToast('info')}}>Info</ButtonToast>
        <ButtonToast handleClick={()=>{showToast('warning')}}>Warning</ButtonToast>
      </div>
      <ToastNotification toastList={list} position='bottomRight' setList={setList}/>
      {/* <ToastPortfolioNotification /> */}
    </div>
   );
}
 
export default ToastPage;
import { useState } from 'react';
import styles from '../../styles/sample-components/SampleToastNotification.module.scss';
import ButtonToast from '../notification/ButtonToast';
import ToastNotification from '../notification/ToastNotification';

const SampleToastNotification = () => {
  const [names, setNames] =useState([
    {
      name: 'Success',
      color: '#5cb85c'
    },
    {
      name: 'Danger',
      color: '#d9534f'
    },
    {
      name: 'Info',
      color: '#5bc0de'
    },
    {
      name: 'Warning',
      color: '#f0ad4e'
    }
  ]);
  const [list, setList]=useState([]);
  let toastProperties = [];
  const showToast = type =>{
    switch(type){
      case 'Success':
        toastProperties = {
        id: list.length+1,
        title: 'Success',
        description: 'This is a success toast component',
        backgroundColor: '#5cb85c'
        }
        break;
      case 'Danger':
        toastProperties = {
        id: list.length+1,
        title: 'Danger',
        description: 'This is a danger toast component',
        backgroundColor: '#d9534f'
        }
        break;
      case 'Info':
        toastProperties = {
        id: list.length+1,
        title: 'Info',
        description: 'This is a info toast component',
        backgroundColor: '#5bc0de'
        }
        break;
      case 'Warning':
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
  return ( 
    <div className={styles.sampleToastNotification}>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Toast Notification</h2>
        <div className={styles.toastList}>
          {
            names && names.map((name, i)=>(
              <div key={i}>
                <ButtonToast color={name.color} handleClick={()=>showToast(name.name)}>{name.name}</ButtonToast>
              </div>
            ))
          }
        </div>
      </div>
      <ToastNotification toastList={list} position='bottomRight' setList={setList}/>
    </div>
   );
}
 
export default SampleToastNotification;
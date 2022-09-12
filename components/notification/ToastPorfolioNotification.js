import { useState } from 'react';
import styles from '../../styles/ToastPortfolioNotification.module.scss'
import Timer from '../timer/timer';

const ToastPortfolioNotification = () => {
  const lists =[
    'Login with token, backend API, Mongodb',
    'More Sample Components',
    'Sample Landing Pages'
  ];
  return ( 
    <div className={styles.container}>
      <h2>Welcome To My Portfolio...</h2>
      <h3>List to be modified or added:</h3>
      {
        lists.map((list, i)=>(
          <p key={i}>{`- ${list}`}</p>
        ))
      }
      <h2 className={styles.timer}>Closing In:</h2>
      <Timer/>
    </div>
   );
}
 
export default ToastPortfolioNotification;
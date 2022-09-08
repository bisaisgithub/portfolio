import styles from '../../styles/ButtonToast.module.scss';

const ButtonToast = ({children, handleClick}) => 
  <button 
    className={styles.button}
    onClick={handleClick}
  >{children}</button>
export default ButtonToast;
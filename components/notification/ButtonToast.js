import styles from '../../styles/ButtonToast.module.scss';

const ButtonToast = ({children, handleClick, color}) => {
  console.log('color', color)
  return (<button 
    className={styles.button}
    style={{backgroundColor: color  }}
    onClick={handleClick}
  >{children} <br/> <span>click me</span></button>)
}
export default ButtonToast;
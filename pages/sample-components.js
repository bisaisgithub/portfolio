import SampleCard from '../components/sample-components/sampleCard';
import styles from '../styles/SampleComponents.module.scss';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';
import SampleToastNotification from '../components/sample-components/SampleToastNotification';

const SampleComponents = () => {
  return ( 
    <div className={styles.sampleComponents}>
      <Link href='/' passHref><button className={styles.btn}><FaArrowLeft />Back to Portfolio</button></Link>
      <h2 className={styles.title}>Sample Components</h2>
      <SampleCard />
      <SampleToastNotification />
    </div>
   );
}
 
export default SampleComponents;
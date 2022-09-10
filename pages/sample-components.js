import SampleCard from '../components/sample-components/sampleCard';
import styles from '../styles/SampleComponents.module.scss';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

const SampleComponents = () => {
  return ( 
    <div className={styles.sampleComponents}>
      <Link href='/' passHref><button className={styles.btn}><FaArrowLeft />Back to Portfolio</button></Link>
      <SampleCard />
    </div>
   );
}
 
export default SampleComponents;
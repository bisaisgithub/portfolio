import styles from "../../styles/sample-components/SampleCard.module.scss";
import { useState } from "react";

const SampleCard = () => {
  const [data, setData]=useState([
    {
      title: 'Sample Card',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis sit corporis veritatis similique unde facere commodi fugiat amet?Corporis obcaecati numquam minus maxime!.',
      link: 'learn more'
    },
    {
      title: 'Sample Card',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis sit corporis veritatis similique unde facere commodi fugiat amet?Corporis obcaecati numquam minus maxime!.',
      link: 'learn more'
    },
    {
      title: 'Sample Card',
      details: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis sit corporis veritatis similique unde facere commodi fugiat amet?Corporis obcaecati numquam minus maxime!.',
      link: 'learn more'
    },
  ]);
  return (
    <div className={styles.sampleCard} id='services'>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Cards</h2>
        <div className={styles.servicesList}>
          {
            data && data.map((item, i)=>(
              <div key={i}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <a href="#">{item.link}</a>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default SampleCard;

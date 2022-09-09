import styles from "../../styles/Home.module.scss";

const Services = () => {
  return (
    <div className={styles.services} id='services'>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>Sample Cards</h2>
        <div className={styles.servicesList}>
          <div>
            <h3>Sample Card</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis
              sit corporis veritatis similique unde facere commodi fugiat amet?
              Corporis obcaecati numquam minus maxime!.
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <h3>Sample Card</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis
              sit corporis veritatis similique unde facere commodi fugiat amet?
              Corporis obcaecati numquam minus maxime!.
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <h3>Sample Card</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis
              sit corporis veritatis similique unde facere commodi fugiat amet?
              Corporis obcaecati numquam minus maxime!.
            </p>
            <a href="#">learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

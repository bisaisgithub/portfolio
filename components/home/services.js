import styles from "../../styles/Home.module.scss";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.subTitle}>My Services</h2>
        <div className={styles.servicesList}>
          <div>
            <h3>Web Design</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis
              sit corporis veritatis similique unde facere commodi fugiat amet?
              Corporis obcaecati numquam minus maxime!.
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <h3>UI/UX Design</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
              aspernatur voluptatem! Dolorem, perspiciatis eum vitae reiciendis
              sit corporis veritatis similique unde facere commodi fugiat amet?
              Corporis obcaecati numquam minus maxime!.
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <h3>App Design</h3>
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

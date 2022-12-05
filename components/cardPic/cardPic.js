import styles from "../../styles/CardPic.module.scss";

const CardPic = ({ data }) => {
  return (
    <div className={styles.cardPic}>
      {/* <img src={data.img} alt={data.imgAlt} />
      <div className={styles.layer}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className={styles.link}>
          <a href={data.git}>{data.gitLabel}</a>
          <a href={data.site}>{data.siteLabel}</a>
        </div>
      </div> */}
    </div>
  );
};

export default CardPic;

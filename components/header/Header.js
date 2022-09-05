import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <img className={styles.logo} src="./images/logo.png" alt="logo" />
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className={styles.headerText}>
          <p>Web Developer</p>
          <h1>Hi, I'm <span>Benar</span> <br/> Isais</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;

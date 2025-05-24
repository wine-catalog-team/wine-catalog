import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.logo}>Vinari</span>

          <ul className={styles.left}>
            <li>ТОВ “Вінарі” 65000,</li>
            <li>Україна, м. Одесавул.</li>
            <li>Промислова, 4</li>
          </ul>

          <div className={styles.right}>
            <ul>
              <li>
                <a href="tel:+380 31 031 45 33">+380 31 031 45 33</a>
              </li>
              <li>
                <a href="mailto:vinari.support@gmail.com">
                  vinari.support@gmail.com
                </a>
              </li>
            </ul>

            <ul className={styles.social}>
              <li>
                <a href="#">
                  <img src="./img/icons/facebook.svg" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./img/icons/instagram.svg" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copy}>
        <div className="container">
          <p>© 2025 VINARI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

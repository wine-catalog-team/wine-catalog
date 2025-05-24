import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            Logo
          </Link>

          <span className={styles.burger}>
            <img src="./img/icons/burger.svg" alt="burger" />
          </span>

          <nav className={styles.nav}>
            <ul>
              <li>
                <Link to="/">Про нас</Link>
              </li>
              <li>
                <Link to="/catalog">Колекція вин</Link>
              </li>
              <li>
                <Link to="/catalog">Де купити</Link>
              </li>
            </ul>
          </nav>

          <a href="#contact" className={styles.btn}>
            Зв’язатися з нами
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

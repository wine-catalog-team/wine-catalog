import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.logo}>Logo</span>

          <span className={styles.burger}>
            <img src="./img/icons/burger.svg" alt="burger" />
          </span>

          {/* <nav>
          <ul>
            <li>
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/catalog">CatalogPage</Link>
            </li>
          </ul>
        </nav> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

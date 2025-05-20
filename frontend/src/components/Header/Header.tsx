import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/catalog">CatalogPage</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

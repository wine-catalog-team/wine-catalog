import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
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
      </div>
    </header>
  );
};

export default Header;

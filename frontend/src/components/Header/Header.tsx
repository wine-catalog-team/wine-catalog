import { useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const isHomeOrCatalogPage =
    location.pathname === "/" || location.pathname === "/catalog";

  return (
    <header
      className={`${styles["header--home"]} ${
        !isHomeOrCatalogPage ? styles.fixedHeader : ""
      }`}
    >
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/" className={styles.logo}>
            <img src="/img/logo.svg" alt="Logo" />
          </Link>

          <span className={styles.burger} onClick={() => setIsMenuOpen(true)}>
            <img src="/img/icons/burger.svg" alt="burger" />
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

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <button
            className={styles.closeBtn}
            onClick={() => setIsMenuOpen(false)}
          >
            ×
          </button>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Про нас
              </Link>
            </li>
            <li>
              <Link to="/catalog" onClick={() => setIsMenuOpen(false)}>
                Колекція вин
              </Link>
            </li>
            <li>
              <Link to="/catalog" onClick={() => setIsMenuOpen(false)}>
                Де купити
              </Link>
            </li>
          </ul>
          <a
            href="#contact"
            className={styles.btn}
            onClick={() => setIsMenuOpen(false)}
          >
            Зв’язатися з нами
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;

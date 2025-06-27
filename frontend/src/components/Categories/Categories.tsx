import { Link } from "react-router-dom";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className="container">
        <h2>Обери свій смак</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["whites"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="./img/categories/category-1.png" alt="category" />
              <span className={styles.subtitle}>БІЛІ ВИНА</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["reds"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="./img/categories/category-2.png" alt="category" />
              <span className={styles.subtitle}>ЧЕРВОНІ ВИНА</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["rose"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="./img/categories/category-3.png" alt="category" />
              <span className={styles.subtitle}>РОЖЕВІ ВИНА</span>
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["sparkling"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="./img/categories/category-4.png" alt="category" />
              <span className={styles.subtitle}>ІГРИСТІ ВИНА</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;

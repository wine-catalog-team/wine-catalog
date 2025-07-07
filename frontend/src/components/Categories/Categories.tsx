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
              <img
                src={`${import.meta.env.BASE_URL}img/categories/category-1.png`}
                alt="category"
              />
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["reds"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={`${import.meta.env.BASE_URL}img/categories/category-2.png`}
                alt="category"
              />
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["rose"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={`${import.meta.env.BASE_URL}img/categories/category-3.png`}
                alt="category"
              />
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/catalog"
              state={{ wineType: ["sparkling"] }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                src={`${import.meta.env.BASE_URL}img/categories/category-4.png`}
                alt="category"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;

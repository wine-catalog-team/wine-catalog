import styles from './Categories.module.scss';

const Categories = () => {
  return (
    <section className={styles.categories}>
      <div className="container">
        <h2>Обери свій смак</h2>

        <ul className={styles.list}>
          <li className={styles.item}>
            <img src="./img/categories/category-1.png" alt="category" />
            <span className={styles.subtitle}>БІЛІ ВИНА</span>
          </li>
          <li className={styles.item}>
            <img src="./img/categories/category-2.png" alt="category" />
            <span className={styles.subtitle}>червоні ВИНА</span>
          </li>
          <li className={styles.item}>
            <img src="./img/categories/category-3.png" alt="category" />
            <span className={styles.subtitle}>рожеві ВИНА</span>
          </li>
          <li className={styles.item}>
            <img src="./img/categories/category-4.png" alt="category" />
            <span className={styles.subtitle}>ігристі ВИНА</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;

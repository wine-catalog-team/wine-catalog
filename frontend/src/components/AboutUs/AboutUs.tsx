import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.top}>
          <h2>Від серця до келиха</h2>
          <p>
            VINARI — українська виноробня, де зустрічаються традиції, природа та
            майстерність.
          </p>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            <span className={styles.number}>12</span>
            <span className={styles.text}>місяців витримки</span>
          </li>

          <li className={styles.item}>
            <span className={styles.number}>3</span>
            <span className={styles.text}>покоління виноробів</span>
          </li>

          <li className={styles.item}>
            <span className={styles.number}>10</span>
            <span className={styles.text}>сортів винограду</span>
          </li>

          <li className={styles.item}>
            <span className={styles.number}>6</span>
            <span className={styles.text}>гектарів виноградників</span>
          </li>
        </ul>

        <div className={styles.bottom}>
          <img src="./img/grapes.png" alt="grapes" />

          <div>
            <p>
              Пам’ятаєте ті літні вечори на березі Чорного моря в Ялті чи
              Алушті? Запах стиглого винограду, шелест прибою, смак кримських
              вин, що залишаються в пам’яті назавжди. Саме ці спогади стали
              натхненням для VINARI.
            </p>
            <p>
              Ми створюємо вино з лози, що бере початок у Криму з пагорбів
              Гурзуфа та проростає на південних схилах Одещини. У кожній краплі
              – майстерність, традиції та частинка ностальгії. Ми віримо у
              щирість і смак, який говорить сам за себе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

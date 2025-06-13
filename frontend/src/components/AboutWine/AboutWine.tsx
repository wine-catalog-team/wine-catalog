import styles from './AboutWine.module.scss';

const AboutWine = () => {
  return (
    <section className={styles.about}>
      <div className={styles.overlay}></div>
      <div className="container">
        <h2>Де народжується вино</h2>

        <div className={styles.content}>
          <p>
            Сонячне небо, чорноморський клімат, родючі ґрунти та кримські корені
            – усе це відображено в кожній пляшці VINARI.
          </p>
          <p>
            Ми зберегли дух виноробства з південного узбережжя і перенесли його
            на новий виток у Бессарабії.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutWine;

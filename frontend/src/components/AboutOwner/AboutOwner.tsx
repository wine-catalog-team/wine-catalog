import styles from './AboutOwner.module.scss';

const AboutOwner = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <h2>Людина, яка вклала серце</h2>
        <p className={styles.content}>
          Іван Аліменко – засновник VINARI. Його шлях почався з дитячої мрії та
          любові до рідної землі. Після років навчання у Франції та Італії він
          повернувся додому, аби створити вино, в якому буде все: і традиція, і
          характер, і тепло.
        </p>

        <div className={styles.gallery}>
          <div className={styles.left}>
            <img src="./img/gallery/man-1.png" alt="man" />

            <article className={styles.quote}>
              <img src="./img/icons/quote.svg" alt="quote" />

              <p>Вино народжується в землі, але живе в серці людини.</p>

              <p className={styles.author}>Іван Аліменко</p>
            </article>

            <img src="./img/gallery/man-2.png" alt="man" />
          </div>

          <div className={styles.right}>
            <img src="./img/gallery/man-3.png" alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOwner;

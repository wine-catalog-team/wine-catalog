import { Link } from 'react-router-dom';
import styles from './Events.module.scss';

const Events = () => {
  return (
    <section className={styles.events}>
      <div className="container">
        <h2>Ваші особливі моменти разом з нами</h2>

        <div className={styles.content}>
          <p>
            Ми створюємо вино для теплих вечорів, щирих розмов і спогадів, до
            яких хочеться повертатися.VINARI – смак, що нагадує: все справжнє
            живе в простих речах.
          </p>
          <p>
            Весілля під відкритим небом, камерні події, фотосесії або гастро-тур
            з дегустацією –VINARI відкриває свої двері для тих, хто цінує
            атмосферу.
          </p>
        </div>

        <Link to="/" className={styles.btn}>
          дізнатися більше
        </Link>
      </div>

      <div className={styles.carousel}>
        <img src="./img/events/event-1.png" alt="event" />
        <img src="./img/events/event-2.png" alt="event" />
        <img src="./img/events/event-3.png" alt="event" />
        <img src="./img/events/event-4.png" alt="event" />
        <img src="./img/events/event-5.png" alt="event" />
      </div>
    </section>
  );
};

export default Events;

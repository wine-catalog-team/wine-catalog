import { Link } from "react-router-dom";
import styles from "./Events.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

const images = [
  "./img/events/event-1.png",
  "./img/events/event-2.png",
  "./img/events/event-3.png",
  "./img/events/event-4.png",
  "./img/events/event-5.png",
];

const Events = () => {
  return (
    <section className={styles.events}>
      <div className="container">
        <h2>Ваші особливі моменти разом з нами</h2>

        <div className={styles.content}>
          <p>
            Ми створюємо вино для теплих вечорів, щирих розмов і спогадів, до
            яких хочеться повертатися. VINARI – смак, що нагадує: все справжнє
            живе в простих речах.
          </p>
          <p>
            Весілля під відкритим небом, камерні події, фотосесії або гастро-тур
            з дегустацією – VINARI відкриває свої двері для тих, хто цінує
            атмосферу.
          </p>
        </div>

        <Link to="/" state={{ scrollToContact: true }} className={styles.btn}>
          Дізнатися більше
        </Link>
      </div>

      <div className={styles.sliderWrapper}>
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={20}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className={styles.carousel}
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <img src={img} alt={`event ${i + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Events;

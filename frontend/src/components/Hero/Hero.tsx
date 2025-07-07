import { Link } from "react-router-dom";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}img/hero-bg.png)`,
      }}
    >
      <div className={styles.overlay}></div>
      <div className="container">
        <h1>Vinari</h1>
        <p>смак Чорного моря в кожній краплі</p>
        <Link to="/catalog">Обери свій смак</Link>
      </div>
    </section>
  );
};

export default Hero;

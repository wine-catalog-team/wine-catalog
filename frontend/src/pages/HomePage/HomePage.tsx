import AboutUs from '../../components/AboutUs';
import AboutWine from '../../components/AboutWine';
import Branch from '../../components/Branch';
import Hero from '../../components/Hero';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <AboutUs />
      <Branch />
      <AboutWine />
    </div>
  );
};

export default HomePage;

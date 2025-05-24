import AboutUs from '../../components/AboutUs';
import Branch from '../../components/Branch';
import Hero from '../../components/Hero';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <AboutUs />
      <Branch />
    </div>
  );
};

export default HomePage;

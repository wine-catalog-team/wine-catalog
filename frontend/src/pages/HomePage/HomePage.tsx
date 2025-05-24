import AboutUs from '../../components/AboutUs';
import Hero from '../../components/Hero';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <AboutUs />
    </div>
  );
};

export default HomePage;

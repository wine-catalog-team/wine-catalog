import Hero from '../../components/Hero';
import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Hero />
    </div>
  );
};

export default HomePage;

import styles from "./WineCard.module.scss";

type Props = {
  wine: string;
  winery: string;
  image: string;
};

export const WineCard: React.FC<Props> = ({ wine, winery, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={wine} className={styles.image} />
      <h3 className={styles.title}>{wine}</h3>
      <p className={styles.winery}>{winery}</p>
    </div>
  );
};

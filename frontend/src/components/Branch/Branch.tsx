import styles from "./Branch.module.scss";

const Branch = () => (
  <img
    src={`${import.meta.env.BASE_URL}img/branch.png`}
    alt="branch"
    className={styles.branch}
  />
);

export default Branch;

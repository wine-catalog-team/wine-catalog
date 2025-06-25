import React from "react";
import { Link } from "react-router-dom";
import styles from "./WineList.module.scss";
import type { Wine } from "../../Types/Wine";

interface WineListProps {
  currentItems: Wine[];
  currentPage: number;
  totalPages: number;
  getPageNumbers: () => (string | number)[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const WineList: React.FC<WineListProps> = ({
  currentItems,
  currentPage,
  totalPages,
  getPageNumbers,
  setCurrentPage,
}) => {
  return (
    <div>
      <ul className={styles.wineGrid}>
        {currentItems.map((wine) => (
          <li key={wine.id} className={styles.card}>
            <Link to={`/catalog/${wine.id}`} state={{ type: wine.type }}>
              <img
                src={wine.image}
                alt={wine.wine}
                className={styles.image}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "/img/Page-not-found.jpg";
                }}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{wine.wine}</h3>
                <p className={styles.winery}>{wine.winery}</p>
                <p className={styles.location}>{wine.location}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={styles.pageBtn}
          >
            {"<"}
          </button>

          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              className={`${styles.pageBtn} ${
                currentPage === page ? styles.active : ""
              }`}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
              disabled={typeof page !== "number"}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={styles.pageBtn}
          >
            {">"}
          </button>
        </div>
      )}
    </div>
  );
};

export default WineList;

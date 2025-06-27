import React from "react";
import styles from "./FilterPopup.module.scss";
import { CustomFilter } from "../../pages/CatalogPage/CustomFilter";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  wineType: string[];
  sweetness: string[];
  grapeVariety: string[];
  setWineType: (values: string[]) => void;
  setSweetness: (values: string[]) => void;
  setGrapeVariety: (values: string[]) => void;
};

export const FilterPopup: React.FC<Props> = ({
  isOpen,
  onClose,
  wineType,
  sweetness,
  grapeVariety,
  setWineType,
  setSweetness,
  setGrapeVariety,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h3>Фільтрувати</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className={styles.filters}>
          <CustomFilter
            title="Тип вина"
            options={["reds", "rose", "whites", "sparkling"]}
            selected={wineType}
            onChange={setWineType}
          />
          <CustomFilter
            title="Солодкість"
            options={["Сухе", "Напівсухе", "Напівсолодке", "Солодке"]}
            selected={sweetness}
            onChange={setSweetness}
          />
          <CustomFilter
            title="Сорт винограду"
            options={[
              "Cabernet Sauvignon",
              "Merlot",
              "Chardonnay",
              "Pinot Noir",
            ]}
            selected={grapeVariety}
            onChange={setGrapeVariety}
          />
        </div>

        <div className={styles.actions}>
          <button
            onClick={() => {
              setWineType([]);
              setSweetness([]);
              setGrapeVariety([]);
              onClose();
            }}
            className={styles.clearBtn}
          >
            Очистити
          </button>

          <button onClick={onClose} className={styles.applyBtn}>
            Застосувати
          </button>
        </div>
      </div>
    </div>
  );
};

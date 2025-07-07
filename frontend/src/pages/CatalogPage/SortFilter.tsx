import { useEffect, useState } from "react";
import styles from "./CustomFilter.module.scss";

type Props = {
  title: string;
  options: { value: string; label: string }[];
  selected: string;
  onChange: (newValue: string) => void;
};

export const SortFilter: React.FC<Props> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string>(selected);
  const [forceToggle, setForceToggle] = useState(0);

  useEffect(() => {
    setTempSelected(selected);
  }, [selected]);

  const applySort = () => {
    const valueToSet =
      tempSelected === selected
        ? `${tempSelected}-forced-${forceToggle}`
        : tempSelected;

    onChange(valueToSet);
    setForceToggle((prev) => prev + 1);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.buttonSort} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img src="/img/sort.svg" alt="Сортування" className={styles.sortIcon} />
        <span
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            marginLeft: "10px",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <img src={`${import.meta.env.BASE_URL}img/arrow.svg`} alt="arrow" />
        </span>
      </button>

      {isOpen && (
        <div className={styles.menu}>
          {options.map((option) => (
            <label key={option.value} className={styles.option}>
              <input
                type="radio"
                name="sortOption"
                value={option.value}
                checked={tempSelected === option.value}
                onChange={() => setTempSelected(option.value)}
                className={styles.inputLabel}
              />
              {option.label}
            </label>
          ))}

          <button className={styles.applyButton} onClick={applySort}>
            Застосувати
          </button>
        </div>
      )}
    </div>
  );
};

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
  const [forceToggle, setForceToggle] = useState(0); // ✨ Щоб форсити зміни

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
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {title}
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

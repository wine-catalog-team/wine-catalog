import { useState } from "react";
import styles from "./CustomFilter.module.scss";

type Props = {
  title: string;
  options: string[];
  selected: string[];
  onChange: (newSelected: string[]) => void;
};

export const CustomFilter: React.FC<Props> = ({
  title,
  options,
  selected,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selected);

  const toggleOption = (option: string) => {
    setTempSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  const applyFilter = () => {
    onChange(tempSelected);
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
            <label key={option} className={styles.option}>
              <input
                type="checkbox"
                checked={tempSelected.includes(option)}
                onChange={() => toggleOption(option)}
                className={styles.inputLabel}
              />
              {option}
            </label>
          ))}

          <button className={styles.applyButton} onClick={applyFilter}>
            Застосувати
          </button>
        </div>
      )}
    </div>
  );
};

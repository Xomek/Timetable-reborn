import { FC, HTMLAttributes, useEffect } from "react";
import cn from "classnames";
import styles from "./Select.module.css";
import { useState } from "react";

export interface OptionInterface {
  id: string;
  name: string;
}

interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  options: OptionInterface[];
  selectedOption: OptionInterface;
  handleSelect: (option: OptionInterface) => void;
}

const Select: FC<SelectProps> = ({
  label = "Выберите опцию",
  options,
  selectedOption,
  handleSelect,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(false);

    document.addEventListener("click", handleOpen);

    return () => {
      document.removeEventListener("click", handleOpen);
    };
  }, []);

  const onClickOption = (option: OptionInterface) => {
    if (option.id === selectedOption.id) {
      return;
    }

    handleSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className={cn(styles.select, className)}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={styles.selectButton}
      >
        {selectedOption.name ? selectedOption.name : label && label}
      </button>
      {isOpen && (
        <div className={styles.options}>
          {options.map((option) => (
            <div
              onClick={() => onClickOption(option)}
              key={option.id}
              className={cn(styles.option, {
                [styles.selected]: option.id === selectedOption.id,
              })}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;

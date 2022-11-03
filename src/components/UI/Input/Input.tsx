import { COLORS } from "enums/colors.enum";
import { ChangeEvent, FC, InputHTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  color?: COLORS;
}

const Input: FC<InputProps> = ({
  type = "text",
  label,
  onChange,
  color,
  ...props
}) => {
  return (
    <label className={styles.box}>
      <input
        className={cn(styles.input, color && { [styles[color]]: color })}
        type={type}
        onChange={(e) => onChange && onChange(e)}
        {...props}
      />
      {label && <div className={styles.label}>{label}</div>}
    </label>
  );
};

export default Input;

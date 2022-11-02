import { ButtonHTMLAttributes, FC } from "react";
import { COLORS } from "enums/colors.enum";
import cn from "classnames";
import styles from "./Button.module.css";

export enum BUTTON_VARIANTS {
  CONTAINED = "contained",
  OUTLINED = "outlined",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BUTTON_VARIANTS;
  color?: COLORS;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant = BUTTON_VARIANTS.CONTAINED,
  color = COLORS.PRIMARY,
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles[variant]]: variant,
        [styles[color]]: color,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

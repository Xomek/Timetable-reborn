import { FC } from "react";
import cn from "classnames";
import styles from "./Switch.module.css";
import { COLORS } from "enums/colors.enum";

interface SwitchProps {
  checked: boolean;
  handleSwitch: () => void;
  color: COLORS;
}

const Switch: FC<SwitchProps> = ({
  checked,
  handleSwitch,
  color = COLORS.PRIMARY,
}) => {
  return (
    <div
      className={cn(styles.switch, {
        [styles.active]: checked,
        [styles[color]]: color,
      })}
      onClick={handleSwitch}
    >
      <div className={styles.circle} />
    </div>
  );
};

export default Switch;

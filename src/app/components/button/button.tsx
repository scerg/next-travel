import React, { FC } from "react";

import styles from "./button.module.scss";

interface ButtonProps {
  title: string;
  color: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ title, color, onClick }) => {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[color]}`}>
      {title}
    </button>
  );
};

export default Button;

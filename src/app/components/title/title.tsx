import React, { FC } from "react";

import styles from "./title.module.scss";

const Title: FC<{ title: string }> = ({ title }) => {
  const titleArray = title.split(" ");
  const lastWord = titleArray.pop();
  const titleMod = titleArray.join(" ");

  return (
    <div className={styles.title}>
      {titleMod} <i>{lastWord}</i>
    </div>
  );
};

export default Title;

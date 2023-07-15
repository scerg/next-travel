import Image from "next/image";
import React, { FC } from "react";

import styles from "./loader.module.scss";

const Loader: FC = () => {
  return (
    <div className={styles.loader}>
      <Image src="/loader.svg" width={24} height={24} alt="" />
    </div>
  );
};

export default Loader;

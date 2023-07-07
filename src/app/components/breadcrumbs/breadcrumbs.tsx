import React, { FC } from "react";

import styles from "./breadcrumbs.module.scss";

const Breadcrumbs: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.breadcrumbs}>{children}</div>;
};

export default Breadcrumbs;

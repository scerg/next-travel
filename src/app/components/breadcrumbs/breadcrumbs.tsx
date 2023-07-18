"use client";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./breadcrumbs.module.scss";

const BC: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Breadcrumbs
      separator={
        <Image src="/arrow-breadcrumbs.svg" width={16} height={16} alt="" />
      }
      aria-label="breadcrumb"
      className={styles.breadcrumbs}
    >
      <Link href="/">Главная</Link>
      {children}
    </Breadcrumbs>
  );
};

export default BC;

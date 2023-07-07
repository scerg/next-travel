import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { CityProps } from "@/app/interfaces/city.interface";
import { postRenderer } from "@/app/utils/post-renderer";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./city.module.scss";

const City: FC<{ data: CityProps }> = ({ data: { h1, blocks } }) => {
  return (
    <section>
      <Breadcrumbs>
        <Link href="/">Главная</Link> - <Link href="/cities">О городах</Link> -{" "}
        {h1}
      </Breadcrumbs>
      <h1>{h1}</h1>
      {blocks && blocks?.length > 0 && (
        <div className={styles.items}>
          {blocks.map((section, index) => postRenderer(section, index))}
        </div>
      )}
    </section>
  );
};

export default City;

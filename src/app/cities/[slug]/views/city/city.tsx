import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import H1 from "@/app/components/h1/h1";
import { CityProps } from "@/app/interfaces/city.interface";
import { postRenderer } from "@/app/utils/post-renderer";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./city.module.scss";

const City: FC<{ data: CityProps }> = ({ data: { h1, blocks } }) => {
  return (
    <section>
      <Breadcrumbs>
        <Link href="/cities">Города</Link>
        <span>{h1}</span>
      </Breadcrumbs>
      <H1>{h1}</H1>
      {blocks && blocks?.length > 0 && (
        <div className={styles.items}>
          {blocks.map((section, index) => postRenderer(section, index))}
        </div>
      )}
    </section>
  );
};

export default City;

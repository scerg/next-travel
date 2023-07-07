import { CityProps } from "@/app/interfaces/city.interface";
import { getStrapiMedia } from "@/app/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./cityCard.module.scss";

const CityCard: FC<{ data: Pick<CityProps, "h1" | "slug" | "cover"> }> = ({
  data: { h1, slug, cover },
}) => {
  return (
    <Link href={`/cities/${slug}`} className={styles.link}>
      {cover && (
        <Image
          src={getStrapiMedia(cover.url) || ""}
          alt={cover.alternativeText || ""}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
        />
      )}
      <span className={styles.name}>{h1}</span>
    </Link>
  );
};

export default CityCard;

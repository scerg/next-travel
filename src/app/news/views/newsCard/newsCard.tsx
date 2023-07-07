import { NewsItemProps } from "@/app/interfaces/news.interface";
import { getStrapiMedia } from "@/app/utils/helpers";
import { formatDate } from "@/app/utils/helpers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./newsCard.module.scss";

const NewsCard: FC<{ data: NewsItemProps; variant: string }> = ({
  data: { h1, slug, updatedAt, text_small, image },
  variant,
}) => {
  return (
    <Link href={`/news/${slug}`} className={clsx(styles.link, styles[variant])}>
      {image && (
        <div className={styles.image}>
          <Image
            src={getStrapiMedia(image.url) || ""}
            alt={image.alternativeText || ""}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
          />
        </div>
      )}
      <div className={styles.content}>
        {updatedAt && (
          <div className={styles.date}>{formatDate(updatedAt)}</div>
        )}
        <div className={styles.title}>{h1}</div>
        <div className={styles.text}>{text_small}</div>
      </div>
    </Link>
  );
};

export default NewsCard;

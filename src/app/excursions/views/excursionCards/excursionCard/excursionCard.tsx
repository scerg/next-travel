import Button from "@/app/components/button/button";
import { ExcursionItemProps } from "@/app/interfaces/excursions.interface";
import { Currencies } from "@/app/utils/enums";
import { getStrapiMedia } from "@/app/utils/helpers";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./excursionCard.module.scss";

const ExcursionCard: FC<{
  data: ExcursionItemProps;
  variant: "variant-left" | "variant-right";
}> = ({
  data: {
    h1,
    text_small,
    image,
    cities,
    price: { count, currency },
  },
  variant,
}) => {
  return (
    <div className={clsx(styles.item, styles[variant])}>
      {image && (
        <div className={styles.image}>
          <Image
            src={getStrapiMedia(image.url) || ""}
            alt={image.alternativeText || ""}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
      <div className={styles.content}>
        <div className={styles.title}>{h1}</div>
        <div className={styles.text}>{text_small}</div>
        {cities && cities?.length > 0 && (
          <div className={styles.location}>
            <Image src="/point.svg" width={16} height={22} alt="location" />
            {cities.map((e, i) => {
              return (
                <span key={e.id}>
                  <Link href={`/cities/${e.slug}`} className={styles.link}>
                    {e.h1}
                  </Link>
                  {cities.length - 1 !== i && ","}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className={styles.price}>
        {Currencies[currency]}
        {count}
      </div>
      <div className={styles.btn}>
        <Button title="Подробнее" color="lightBlue" />
      </div>
    </div>
  );
};

export default ExcursionCard;

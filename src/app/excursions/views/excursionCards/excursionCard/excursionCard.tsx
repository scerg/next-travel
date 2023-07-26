"use client";

import Button from "@/app/components/button/button";
import { ExcursionItemProps } from "@/app/interfaces/excursions.interface";
import { Currencies } from "@/app/utils/enums";
import { getStrapiMedia } from "@/app/utils/helpers";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./excursionCard.module.scss";

interface ExcursionCardProps {
  data: ExcursionItemProps;
  variant: "left" | "right";
  i: number;
}

type VariantsProps = {
  // eslint-disable-next-line no-unused-vars
  [key in ExcursionCardProps["variant"]]: Variants;
};

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
    transition: {
      when: "afterChildren",
    },
  },
  onscreen: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delay: custom * 0.2,
    },
  }),
};

const onscreen = {
  x: 0,
  rotate: 0,
  transition: {
    type: "spring",
    bounce: 0.4,
    duration: 0.5,
  },
};

const cardVariants: VariantsProps = {
  left: {
    offscreen: {
      x: -800,
      rotate: 50,
    },
    onscreen,
  },
  right: {
    offscreen: {
      x: 800,
      rotate: -50,
    },
    onscreen,
  },
};

const ExcursionCard: FC<ExcursionCardProps> = ({
  data: {
    h1,
    text_small,
    image,
    cities,
    price: { count, currency },
  },
  i,
  variant,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      layout
      viewport={{ once: true }}
    >
      <motion.div
        className={clsx(styles.item, styles[variant])}
        variants={variants}
        custom={i + 1}
      >
        {image && (
          <motion.div
            className={styles.image}
            variants={cardVariants[`${variant}`]}
          >
            <Image
              src={getStrapiMedia(image.url) || ""}
              alt={image.alternativeText || ""}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              priority
            />
          </motion.div>
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
      </motion.div>
    </motion.div>
  );
};

export default ExcursionCard;

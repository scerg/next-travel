"use client";

import { NewsItemProps } from "@/app/interfaces/news.interface";
import { getStrapiMedia } from "@/app/utils/helpers";
import { formatDate } from "@/app/utils/helpers";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./newsCard.module.scss";

interface NewsCardProps {
  data: NewsItemProps;
  variant: "big" | "small";
  i: number;
}

const variantsBig: Variants = {
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

const variantsSmall: Variants = {
  offscreen: {
    opacity: 0,
    x: 500,
  },
  onscreen: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const cardVariantsBig: Variants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const NewsCard: FC<NewsCardProps> = ({
  data: { h1, slug, updatedAt, text_small, image },
  variant,
  i,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      layout
      viewport={{ once: true }}
    >
      <motion.div
        className={clsx(styles.link, styles[variant])}
        variants={variant === "big" ? variantsBig : variantsSmall}
        custom={i + 1}
      >
        <Link href={`/news/${slug}`}>
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
          <motion.div
            className={styles.content}
            variants={variant === "big" ? cardVariantsBig : undefined}
          >
            {updatedAt && (
              <div className={styles.date}>{formatDate(updatedAt)}</div>
            )}
            <div className={styles.title}>{h1}</div>
            <div className={styles.text}>{text_small}</div>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NewsCard;

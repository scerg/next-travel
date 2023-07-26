"use client";

import { CityProps } from "@/app/interfaces/city.interface";
import { getStrapiMedia } from "@/app/utils/helpers";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./cityCard.module.scss";

const variants: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2 },
  }),
};

const CityCard: FC<{
  data: Pick<CityProps, "h1" | "slug" | "cover">;
  i: number;
}> = ({ data: { h1, slug, cover }, i }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <motion.div variants={variants} custom={i + 1}>
        <Link href={`/cities/${slug}`} className={styles.link}>
          {cover && (
            <motion.div className={styles.image}>
              <Image
                src={getStrapiMedia(cover.url) || ""}
                alt={cover.alternativeText || ""}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 100vw"
                priority
              />
            </motion.div>
          )}
          <span className={styles.name}>{h1}</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CityCard;

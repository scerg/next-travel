"use client";

import Button from "@/app/components/button/button";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./offer.module.scss";

const variantsImage: Variants = {
  offscreen: {
    opacity: 0,
    x: -500,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, type: "tween", delay: 0.5 },
  },
};

const variantsForm: Variants = {
  offscreen: {
    opacity: 0,
    x: -500,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, type: "tween", delay: 0.8 },
    scale: [0.5, 1],
    rotate: [-360, 0],
  },
};

const variantsMap: Variants = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, type: "tween", delay: 1.2 },
  },
};

const Offer: FC = () => {
  return (
    <motion.section
      className={styles.offer}
      initial="offscreen"
      whileInView="onscreen"
      layout
      viewport={{ once: true }}
    >
      <motion.div variants={variantsMap} className={styles.map}></motion.div>
      <div className={styles.form}>
        <motion.div variants={variantsImage} className={styles.image}>
          <Image src="/offer.jpg" width={475} height={475} alt="" priority />
        </motion.div>

        <motion.div variants={variantsForm} className={styles.content}>
          <div className={styles.title}>
            Оставь заявку и мы пришлем полный комплекс предложений
          </div>
          <div className={styles.elements}>
            <div className={styles.element}>
              <input type="text" name="name" placeholder="Имя" />
            </div>
            <div className={styles.element}>
              <input type="text" name="email" placeholder="Электронная почта" />
            </div>
          </div>
          <div className={styles.btn}>
            <Button title="Отправить" color="purple" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Offer;

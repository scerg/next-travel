"use client";

import Media from "@/app/components/media/media";
import Title from "@/app/components/title/title";
import { HomeItemProps } from "@/app/interfaces/homeModule.interface";
import { Variants, motion } from "framer-motion";
import React, { FC } from "react";

import styles from "./activity.module.scss";

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

const Activity: FC<{ data: HomeItemProps }> = ({ data: { title, items } }) => {
  return (
    <section className={styles.activity}>
      <Title title={title} />
      <motion.div
        className={styles.items}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
      >
        {items.map((item, i) => (
          <motion.div
            className={styles.item}
            key={item.id}
            variants={variants}
            custom={i + 1}
          >
            {item.picture && (
              <Media
                data={{
                  image: {
                    ...item.picture,
                    priority: true,
                    placeholder: "blur",
                    blurDataURL:
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8utGvHgAGTAJFWNuuGQAAAABJRU5ErkJggg==",
                  },
                }}
              />
            )}
            <div className={styles.text}>{item.text}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Activity;

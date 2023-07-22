"use client";

import { FaqItemProps } from "@/app/interfaces/faq.interface";
import { getDataHalf } from "@/app/utils/helpers";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import React, { FC, useState } from "react";

import styles from "./accordion.module.scss";

const variants: Variants = {
  visible: {
    marginBottom: 26,
  },
  hidden: {
    marginBottom: 0,
  },
};

const variantsChildren: Variants = {
  visible: {
    opacity: 1,
    height: "100%",
    padding: "0 0 12px 40px",
    lineHeight: "130%",
    x: 0,
  },
  hidden: {
    opacity: 0,
    height: 0,
    padding: 0,
    lineHeight: 0,
    x: "-10%",
  },
};

const Item: FC<{
  item: FaqItemProps;
  expanded: number;
  handleClick: (_id: number) => void;
}> = ({ item, expanded, handleClick }) => (
  <motion.div
    key={item.id}
    className={clsx(styles.item, expanded === item.id && styles.itemActive)}
    layout
    variants={variants}
    initial={expanded === item.id ? "visible" : "hidden"}
    animate={expanded === item.id ? "visible" : "hidden"}
    transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
  >
    <div className={styles.question} onClick={() => handleClick(item.id)}>
      {item.title}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="M12.411 18.5288C12.2122 18.8158 11.7878 18.8158 11.589 18.5288L3.10607 6.28475C2.87633 5.95315 3.11365 5.5 3.51707 5.5L20.4829 5.5C20.8863 5.5 21.1237 5.95315 20.8939 6.28475L12.411 18.5288Z"
            stroke="#C5B14E"
          />
        </g>
      </svg>
    </div>
    <motion.div className={styles.answer} variants={variantsChildren}>
      {item.text}
    </motion.div>
  </motion.div>
);

const Accordion: FC<{ data: FaqItemProps[] }> = ({ data }) => {
  const { part1 = [], part2 = [] } = getDataHalf(data) || {};

  const [expanded, setExpanded] = useState<number>(1);

  const handleClick = (id: number) => {
    setExpanded((expanded) => (expanded === id ? 0 : id));
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.items}>
        {part1.map((item) => (
          <Item
            key={item.id}
            item={item}
            expanded={expanded}
            handleClick={handleClick}
          />
        ))}
      </div>
      <div className={styles.items}>
        {part2.map((item) => (
          <Item
            key={item.id}
            item={item}
            expanded={expanded}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;

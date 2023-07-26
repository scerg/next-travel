"use client";

import Button from "@/app/components/button/button";
import H1 from "@/app/components/h1/h1";
import { HomePageProps } from "@/app/interfaces/home.interface";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import React, { FC, ReactNode, useRef } from "react";

import styles from "./headerContent.module.scss";

const variants: Variants = {
  offscreen: {
    opacity: 0,
    x: 1500,
    y: -1000,
  },
  onscreen: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 70,
      delay: custom * 0.15,
    },
    scale: [0, 0.2, 0.4, 0.6, 0.8, 1],
    rotate: [0, 30, 60, 240, 360],
  }),
};

const MotionImage: FC<{
  i: number;
  children: ReactNode;
}> = ({ i, children }) => (
  <motion.div
    variants={variants}
    custom={i}
    className={clsx(styles.image, styles[`image-${i}`])}
  >
    {children}
  </motion.div>
);

const HeaderContent: FC<Omit<HomePageProps, "navbar" | "seo">> = ({ data }) => {
  const { h1, h2, h3 } = data || {};

  const elementRef = useRef<HTMLDivElement>(null);
  const scrollTo = () => {
    const node = elementRef.current;
    if (node) node.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const notDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <div className={styles.content}>
      <div className={styles.text}>
        <H1 className={styles.h1}>{h1}</H1>
        {h2 && <h2>{h2}</h2>}
        {h3 && <h3>{h3}</h3>}
        <Button title="Начать" color="purple" onClick={scrollTo} />
      </div>
      {notDesktop && (
        <motion.div
          initial="offscreen"
          animate="onscreen"
          viewport={{ once: true }}
          className={styles.images}
        >
          <MotionImage i={1}>
            <Image src="/home/16.png" width={85} height={41} alt="" priority />
          </MotionImage>
          <MotionImage i={2}>
            <Image src="/home/13.png" width={91} height={67} alt="" priority />
          </MotionImage>
          <MotionImage i={3}>
            <Image src="/home/1.png" width={61} height={57} alt="" priority />
          </MotionImage>
          <MotionImage i={4}>
            <Image src="/home/11.png" width={70} height={60} alt="" priority />
          </MotionImage>
          <MotionImage i={5}>
            <Image src="/home/12.png" width={152} height={67} alt="" priority />
          </MotionImage>
          <MotionImage i={6}>
            <Image src="/home/2.png" width={371} height={93} alt="" priority />
          </MotionImage>
          <MotionImage i={7}>
            <Image src="/home/10.png" width={93} height={128} alt="" priority />
          </MotionImage>
          <MotionImage i={8}>
            <Image src="/home/5.png" width={152} height={150} alt="" priority />
          </MotionImage>
          <MotionImage i={9}>
            <Image src="/home/3.png" width={130} height={127} alt="" priority />
          </MotionImage>
          <MotionImage i={10}>
            <Image
              src="/home/17.png"
              width={227}
              height={147}
              alt=""
              priority
            />
          </MotionImage>
          <MotionImage i={11}>
            <Image src="/home/6.png" width={117} height={112} alt="" priority />
          </MotionImage>
          <MotionImage i={12}>
            <Image
              src="/home/14.png"
              width={176}
              height={168}
              alt=""
              priority
            />
          </MotionImage>
          <MotionImage i={13}>
            <Image src="/home/4.png" width={174} height={151} alt="" priority />
          </MotionImage>
          <MotionImage i={14}>
            <Image
              src="/home/18.png"
              width={187}
              height={188}
              alt=""
              priority
            />
          </MotionImage>
          <MotionImage i={15}>
            <Image src="/home/7.png" width={235} height={220} alt="" priority />
          </MotionImage>
          <MotionImage i={16}>
            <Image src="/home/9.png" width={221} height={224} alt="" priority />
          </MotionImage>
          <MotionImage i={17}>
            <Image
              src="/home/19.png"
              width={240}
              height={238}
              alt=""
              priority
            />
          </MotionImage>
          <MotionImage i={18}>
            <Image src="/home/8.png" width={257} height={191} alt="" priority />
          </MotionImage>
          <MotionImage i={19}>
            <Image
              src="/home/20.png"
              width={284}
              height={155}
              alt=""
              priority
            />
          </MotionImage>
          <MotionImage i={20}>
            <Image
              src="/home/15.png"
              width={325}
              height={324}
              alt=""
              priority
            />
          </MotionImage>
        </motion.div>
      )}
      <div className="ref" ref={elementRef}></div>
    </div>
  );
};

export default HeaderContent;

"use client";

import { LinksProps } from "@/app/interfaces/components.interface";
import { Variants, motion, useCycle } from "framer-motion";
import { usePathname } from "next/navigation";
import * as React from "react";
import { FC, useEffect, useRef } from "react";

import styles from "./mobileMenu.module.scss";
import MobileMenuToggle from "./mobileMenuToggle";
import Navigation from "./navigation";

const variants: Variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 44px) 40px)`,
  }),
  closed: {
    clipPath: "circle(30px at calc(100% - 44px) 40px)",
  },
};

const MobileMenu: FC<{ links: LinksProps[]; curPath: string }> = ({
  links,
  curPath,
}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      className={styles.nav}
    >
      <motion.div className={styles.background} variants={variants} />
      <Navigation links={links} curPath={curPath} />
      <MobileMenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileMenu;

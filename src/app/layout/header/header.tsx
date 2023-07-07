"use client";

import Button from "@/app/components/button/button";
import { HomePageProps } from "@/app/interfaces/home.interface";
import { Balsamiq_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useRef } from "react";

import styles from "./header.module.scss";

const balsamiq = Balsamiq_Sans({ subsets: ["cyrillic"], weight: "700" });

const Header: FC<Omit<HomePageProps, "seo">> = ({ data }) => {
  const { navbar, h1, h2, h3 } = data || {};
  const { links } = navbar || {};

  const elementRef = useRef<HTMLDivElement>(null);
  const scrollTo = () => {
    const node = elementRef.current;
    if (node) node.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const path = usePathname();

  return (
    <header className={styles.header}>
      {links?.length && (
        <nav className={styles.nav}>
          <ul className={styles.items}>
            {links.map((item) => (
              <li key={item.id}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      {path === "/" && (
        <>
          <div className={styles.text}>
            <h1 className={balsamiq.className}>{h1}</h1>
            {h2 && <h2>{h2}</h2>}
            {h3 && <h3>{h3}</h3>}
            <Button title="Начать" color="purple" onClick={scrollTo} />
          </div>
          <div className={styles.ref} ref={elementRef}></div>
        </>
      )}
    </header>
  );
};

export default Header;

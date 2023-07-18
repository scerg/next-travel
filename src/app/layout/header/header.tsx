"use client";

import Button from "@/app/components/button/button";
import H1 from "@/app/components/h1/h1";
import { HomePageProps } from "@/app/interfaces/home.interface";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, useRef } from "react";

import styles from "./header.module.scss";

const Header: FC<Omit<HomePageProps, "seo">> = ({ data }) => {
  const { navbar, h1, h2, h3 } = data || {};
  const { links } = navbar || {};

  const elementRef = useRef<HTMLDivElement>(null);
  const scrollTo = () => {
    const node = elementRef.current;
    if (node) node.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const path = usePathname();
  const curPath = "/" + path.split("/")[1];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.items}>
          <li>
            <Link href="/" className={styles.logo}>
              <Image src="/logo.svg" width={64} height={64} alt="" priority />
            </Link>
          </li>
          {links?.length &&
            links.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.url}
                  className={curPath === item.url ? styles.linkActive : ""}
                >
                  {item.text}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      {curPath === "/" && (
        <>
          <div className={styles.text}>
            <H1 className={styles.h1}>{h1}</H1>
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

"use client";

import { HomePageProps } from "@/app/interfaces/home.interface";
import { balsamiq } from "@/app/shared/fonts";
import useMediaQuery from "@mui/material/useMediaQuery";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

import styles from "./header.module.scss";
import HeaderContent from "./headerContent/headerContent";
import MobileMenu from "./mobileMenu/mobileMenu";

const Header: FC<Omit<HomePageProps, "seo">> = ({ data }) => {
  const { navbar, ...otherProps } = data || {};
  const { links } = navbar || {};

  const path = usePathname();
  const curPath = "/" + path.split("/")[1];

  const notMobile = useMediaQuery("(min-width:768px)");

  return (
    <header className={styles.header}>
      <div className={styles.head}>
        <div className={styles.center}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.svg" width={64} height={64} alt="logo" priority />
            <span className={clsx(balsamiq.className, styles.name)}>
              Travel TRNC
            </span>
          </Link>
          {notMobile ? (
            <nav className={styles.nav}>
              <ul className={styles.items}>
                {links?.length &&
                  links.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.url}
                        className={
                          curPath === item.url ? styles.linkActive : ""
                        }
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          ) : (
            <div className={styles.mobileMenu}>
              {links?.length && <MobileMenu links={links} curPath={curPath} />}
            </div>
          )}
        </div>
      </div>
      {curPath === "/" && <HeaderContent data={otherProps} />}
    </header>
  );
};

export default Header;

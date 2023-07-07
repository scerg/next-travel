import { LinksProps } from "@/app/interfaces/components.interface";
import { getDataHalf } from "@/app/utils/helpers";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./footer.module.scss";

const Item = ({ item }: { item: LinksProps }) => (
  <li>
    <Link href={item.url}>{item.text}</Link>
  </li>
);

const Footer: FC<{ links: LinksProps[] }> = ({ links }) => {
  const { part1, part2 } = getDataHalf(links);

  return (
    <footer className={styles.footer}>
      {links?.length && (
        <nav className={styles.nav}>
          <ul className={styles.items}>
            {part1.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
          <ul className={styles.items}>
            {part2.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </footer>
  );
};

export default Footer;

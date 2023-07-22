import { LinksProps } from "@/app/interfaces/components.interface";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

const variants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 30,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileMenuItem: FC<{
  item: LinksProps;
  curPath: string;
}> = ({ item, curPath }) => {
  return (
    <motion.li variants={variants} className="li">
      <Link
        href={item.url}
        className={curPath === item.url ? "linkActive" : ""}
      >
        {item.text}
      </Link>
    </motion.li>
  );
};
export default MobileMenuItem;

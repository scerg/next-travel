import { LinksProps } from "@/app/interfaces/components.interface";
import { Variants, motion } from "framer-motion";
import { FC } from "react";

import MobileMenuItem from "./mobileMenuItem";

const variants: Variants = {
  open: {
    width: "100%",
  },
  closed: {
    width: "0%",
  },
};

const Navigation: FC<{
  links: LinksProps[];
  curPath: string;
}> = ({ links, curPath }) => {
  return (
    <motion.ul className="ul" variants={variants}>
      {links.map((item, i) => (
        <MobileMenuItem curPath={curPath} item={item} key={i} />
      ))}
    </motion.ul>
  );
};
export default Navigation;

import Image from "next/image";
import React, { FC } from "react";

import "./slickArrow.scss";

interface SlickArrowProps {
  className?: string;
  arrow: string;
  onClick?: () => void;
}

const SlickArrow: FC<SlickArrowProps> = ({ className, onClick, arrow }) => {
  return (
    <div
      className={`${className} ${[
        arrow === "next" ? "nextArrow" : "prevArrow",
      ]}`}
      onClick={onClick}
    >
      <Image src="/arrow.svg" width={24} height={24} alt="" />
    </div>
  );
};

export default SlickArrow;

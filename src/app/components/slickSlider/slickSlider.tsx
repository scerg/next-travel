"use client";

import SlickArrow from "@/app/components/slickSlider/slickArrow/slickArrow";
import React, { FC } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.scss";
import "slick-carousel/slick/slick.scss";

import "./slickSlider.scss";

const settingsArrow = {
  nextArrow: <SlickArrow arrow="next" />,
  prevArrow: <SlickArrow arrow="prev" />,
};

const SlickSlider: FC<{ children: React.ReactNode; settings: Settings }> = ({
  children,
  settings,
}) => {
  const props = { ...settings, ...settingsArrow };
  return <Slider {...props}>{children}</Slider>;
};

export default SlickSlider;

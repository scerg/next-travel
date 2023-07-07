import Media from "@/app/components/media/media";
import RichText from "@/app/components/richText/richText";
import React from "react";

import { BlocksProps } from "../interfaces/components.interface";

export function postRenderer(
  section: BlocksProps,
  index: number
): JSX.Element | null {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText key={index} data={section} />;
    case "shared.image":
      return <Media key={index} data={section} />;
    default:
      return null;
  }
}

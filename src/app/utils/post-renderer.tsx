import Media from "@/app/components/media/media";
import RichText from "@/app/components/richText/richText";
import { BlocksProps } from "@/app/interfaces/components.interface";
import React from "react";

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

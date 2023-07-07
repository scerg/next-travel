import { ImageProps } from "@/app/interfaces/components.interface";
import { getStrapiMedia } from "@/app/utils/helpers";
import Image from "next/image";
import React, { FC } from "react";

interface MediaProps {
  data: {
    image: ImageProps;
  };
}

const Media: FC<MediaProps> = ({ data: { image } }) => {
  const imgUrl = getStrapiMedia(image.url);
  return (
    <div className="image">
      <Image
        src={imgUrl || ""}
        alt={image.alternativeText || ""}
        width={image.width}
        height={image.height}
        priority={image.priority}
      />
    </div>
  );
};
export default Media;

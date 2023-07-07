import { BlocksProps, ImageProps, SeoProps } from "./components.interface";

export interface NewsItemProps extends SeoProps {
  id: number;
  h1: string;
  slug: string;
  updatedAt?: string | undefined;
  text_small?: string;
  image?: ImageProps;
  blocks?: BlocksProps[];
}

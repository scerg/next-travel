import { BlocksProps, ImageProps, SeoProps } from "./components.interface";

export interface CityProps extends SeoProps {
  id: number;
  h1: string;
  slug: string;
  updatedAt?: string | undefined;
  text?: string;
  cover?: ImageProps;
  blocks?: BlocksProps[];
}

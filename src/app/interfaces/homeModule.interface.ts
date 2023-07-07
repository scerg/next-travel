import { ImageProps } from "./components.interface";

export interface HomeItemProps {
  title: string;
  items: HomeModuleProps[];
}

export interface HomeModuleProps {
  id: number;
  picture: ImageProps;
  text: string;
}

export interface NewsItemProps {
  id: number;
  h1: string;
  slug: string;
  text_small?: string;
  image: ImageProps;
}

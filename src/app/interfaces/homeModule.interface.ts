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

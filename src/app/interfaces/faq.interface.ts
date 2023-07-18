import { SeoProps } from "./components.interface";

export interface FaqItemProps {
  id: number;
  title: string;
  text: string;
}

export interface FaqProps extends SeoProps {
  h1: string;
  text: string;
  items: FaqItemProps[];
}

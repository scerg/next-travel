import { LinksProps, SeoProps } from "@/app/interfaces/components.interface";

export interface HomePageProps {
  data: {
    h1: string;
    h2?: string;
    h3?: string;
    navbar?: {
      links: LinksProps[];
    };
    seo: SeoProps["seo"];
  };
}

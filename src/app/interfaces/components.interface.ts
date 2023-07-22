export interface ImageProps {
  id: string;
  url: string;
  name: string;
  alternativeText?: string;
  width: number;
  height: number;
  priority?: boolean | undefined;
  placeholder?: "blur" | "empty" | undefined;
  blurDataURL?: string | undefined;
}

export interface RichTextProps {
  body: string;
}

export interface LinksProps {
  id: number;
  url: string;
  text: string;
}

export interface BlocksProps extends RichTextProps {
  id: number;
  __component: "shared.rich-text" | "shared.image";
  image: ImageProps;
}

export interface SeoProps {
  seo?: {
    metaTitle: string;
    metaDescription: string;
  } | null;
}

export interface MetadataProps {
  title: string | undefined;
  description: string | undefined;
}

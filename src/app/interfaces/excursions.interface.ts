import { Currencies } from "@/app/utils/enums";

import { CityProps } from "./city.interface";
import { BlocksProps, ImageProps, SeoProps } from "./components.interface";

type CurrenciesStrings = keyof typeof Currencies;

export interface ExcursionItemProps extends SeoProps {
  id: number;
  h1: string;
  slug: string;
  updatedAt?: string | undefined;
  text_small?: string;
  image?: ImageProps;
  blocks?: BlocksProps[];
  cities?: Pick<CityProps, "id" | "h1" | "slug">[];
  price: {
    count: number;
    currency: CurrenciesStrings;
  };
}

export interface ExcursionsFiltersProps {
  id: number;
  name: string;
  h1?: string | undefined;
  slug: string;
  label?: string | undefined;
  value?: number | undefined;
}

export interface ExcursionsAllFiltersProps {
  id: string;
  title: string;
  data: ExcursionsFiltersProps[];
}

export interface ExcursionsFormProps {
  selects: ExcursionsAllFiltersProps[];
  sliders: ExcursionsAllFiltersProps[];
}

export interface ExcursionsFormDefaultProps {
  selects: ExcursionsFormDefaultSelectsProps[];
  sliders: ExcursionsFormDefaultSlidersProps[];
}

export interface ExcursionsFormDefaultSelectsProps {
  [key: string]: number[];
}

export interface ExcursionsFormDefaultSlidersProps {
  [key: string]: number;
}

export interface ExcursionsFormFilterDataProps {
  [key: string]: {
    id: {
      $in: number[] | number;
    };
  };
}

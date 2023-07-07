import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { CityProps } from "@/app/interfaces/city.interface";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getChunk, getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import styles from "./page.module.scss";
import CityCard from "./views/cityCard/cityCard";

interface CityPageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
  };
}

interface CitiesProps {
  data: CityProps[];
}

async function getCityPage(): Promise<CityPageProps> {
  const path = API.cityPage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getCities(): Promise<CitiesProps> {
  const path = API.cityPage.cities;
  const urlParamsObject = {
    populate: {
      cover: { populate: "*" },
    },
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getCityPage();
  return getMetadata(meta);
};

const Cities = async (): Promise<JSX.Element> => {
  const cityPage = await getCityPage();
  const { h1, text } = cityPage?.data || {};

  const cities = await getCities();

  const citiesChunk = cities?.data?.length > 0 ? getChunk(cities.data, 2) : [];

  return (
    <section>
      <Breadcrumbs>
        <Link href="/">Главная</Link> - {h1}
      </Breadcrumbs>
      <h1>{h1}</h1>
      <div className={styles.text}>{text}</div>
      <div className={styles.cities}>
        {citiesChunk.length > 0 &&
          citiesChunk.map((chunk, i) => (
            <div className={styles.items} key={i}>
              {chunk.map((item: CityProps) => (
                <CityCard key={item.id} data={item} />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default Cities;

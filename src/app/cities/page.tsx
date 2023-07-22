import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import H1 from "@/app/components/h1/h1";
import RichText from "@/app/components/richText/richText";
import { CityProps } from "@/app/interfaces/city.interface";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getChunk, getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
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
        <span>{h1}</span>
      </Breadcrumbs>
      <H1>{h1}</H1>
      <div className={styles.cities}>
        {citiesChunk.length > 0 &&
          citiesChunk.map((chunk, i) => (
            <div className={styles.items} key={i}>
              {chunk.map((item) => (
                <CityCard key={item.id} data={item} i={i} />
              ))}
            </div>
          ))}
      </div>
      <div className={styles.text}>
        <RichText data={{ body: text }} />
      </div>
    </section>
  );
};

export default Cities;

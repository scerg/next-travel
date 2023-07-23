import { CityProps } from "@/app/interfaces/city.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import CityPage from "./views/city/city";

async function getCityBySlug(slug: string): Promise<CityProps> {
  const path = API.cityPage.cities;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      cover: { fields: ["url"] },
      blocks: { populate: "*" },
    },
  };
  const response = await fetchAPI(path, urlParamsObject);
  return response?.data?.[0];
}

async function getMetaData(slug: string): Promise<CityProps> {
  const path = API.cityPage.cities;
  const urlParamsObject = {
    filters: { slug },
    populate: { seo: { populate: "*" } },
  };
  const response = await fetchAPI(path, urlParamsObject);
  return response?.data?.[0];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const meta = await getMetaData(params?.slug);
  return getMetadata({ data: meta });
}

export default async function City({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const { slug } = params || {};
  const data = await getCityBySlug(slug);
  if (!data) notFound();

  return <CityPage data={data} />;
}

export async function generateStaticParams(): Promise<CityProps[]> {
  const path = API.cityPage.cities;
  const urlParamsObject = {
    populate: ["slug"],
  };
  const citiesResponse = await fetchAPI(path, urlParamsObject);
  if (!citiesResponse) return [];

  return citiesResponse.data.map((cities: { slug: string }) => ({
    slug: cities.slug,
  }));
}

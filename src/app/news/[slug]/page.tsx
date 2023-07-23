import { NewsItemProps } from "@/app/interfaces/news.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

import NewsPage from "./views/news/news";

async function getNewsBySlug(slug: string): Promise<NewsItemProps> {
  const path = API.newsPage.news;
  const urlParamsObject = {
    filters: { slug },
    populate: {
      image: { populate: "*" },
      blocks: { populate: "*" },
    },
  };
  const response = await fetchAPI(path, urlParamsObject);
  return response?.data?.[0];
}

async function getMetaData(slug: string): Promise<NewsItemProps> {
  const path = API.newsPage.news;
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

export default async function News({
  params,
}: {
  params: { slug: string };
}): Promise<JSX.Element> {
  const { slug } = params || {};
  const data = await getNewsBySlug(slug);
  if (!data) notFound();

  return <NewsPage data={data} />;
}

export async function generateStaticParams(): Promise<NewsItemProps[]> {
  const path = API.newsPage.news;
  const urlParamsObject = {
    populate: ["slug"],
  };
  const newsResponse = await fetchAPI(path, urlParamsObject);
  if (!newsResponse) return [];

  return newsResponse.data.map((news: { slug: string }) => ({
    slug: news.slug,
  }));
}

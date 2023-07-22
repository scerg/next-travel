import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import H1 from "@/app/components/h1/h1";
import { SeoProps } from "@/app/interfaces/components.interface";
import { NewsItemProps } from "@/app/interfaces/news.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getDataHalf, getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import React from "react";

import styles from "./page.module.scss";
import NewsCard from "./views/newsCard/newsCard";

interface NewsPageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
  };
}

interface NewsProps {
  data: NewsItemProps[];
}

async function getNewsPage(): Promise<NewsPageProps> {
  const path = API.newsPage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getNews(): Promise<NewsProps> {
  const path = API.newsPage.news;
  const urlParamsObject = {
    sort: ["id:desc"],
    pagination: {
      page: 1,
      pageSize: 8,
    },
    populate: {
      image: { populate: "*" },
    },
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getNewsPage();
  return getMetadata(meta);
};

const News = async (): Promise<JSX.Element> => {
  const newsPage = await getNewsPage();
  const { h1, text } = newsPage?.data || {};

  const news = await getNews();
  const { data } = news || {};

  const { part1 = [], part2 = [] } = getDataHalf(data) || {};

  return (
    <section>
      <Breadcrumbs>
        <span>{h1}</span>
      </Breadcrumbs>
      <H1>{h1}</H1>
      <div className={styles.text}>{text}</div>
      <div className={styles.news}>
        {part1?.length > 0 && (
          <div className={styles.items}>
            {part1.map((item: NewsItemProps, i: number) => (
              <NewsCard key={item.id} data={item} i={i} variant="big" />
            ))}
          </div>
        )}
        {part2?.length > 0 && (
          <div className={styles.items}>
            {part2.map((item: NewsItemProps, i: number) => (
              <NewsCard key={item.id} data={item} i={i} variant="small" />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;

import Activity from "@/app/homeModule/activity/activity";
import Excursions from "@/app/homeModule/excursions/excursions";
import Faq from "@/app/homeModule/faq/faq";
import News from "@/app/homeModule/news/news";
import Offer from "@/app/homeModule/offer/offer";
import Reviews from "@/app/homeModule/reviews/reviews";
import { AccordionItemProps } from "@/app/interfaces/components.interface";
import {
  HomeItemProps,
  NewsItemProps,
} from "@/app/interfaces/homeModule.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import React from "react";

async function getHome(): Promise<{ data: HomeItemProps[] }> {
  const path = API.homePage.homes;
  const urlParamsObject = { populate: "deep" };
  return await fetchAPI(path, urlParamsObject);
}

async function getNews(): Promise<{ data: NewsItemProps[] }> {
  const path = API.newsPage.news;
  const urlParamsObject = {
    populate: {
      image: { fields: ["url", "width", "height"] },
    },
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getFaq(): Promise<{ data: { items: AccordionItemProps[] } }> {
  const path = API.faqPage.page;
  const urlParamsObject = {
    populate: ["items"],
  };
  return await fetchAPI(path, urlParamsObject);
}

const Home = async (): Promise<JSX.Element> => {
  const home = await getHome();
  const [activity] = home.data;

  const news = await getNews();
  const { data: newsItems } = news;

  const faq = await getFaq();
  const { items: faqItems } = faq.data;

  return (
    <>
      {activity && <Activity data={activity} />}
      <Excursions />
      <Reviews />
      {newsItems?.length > 0 && <News data={newsItems} />}
      {faqItems?.length > 0 && <Faq data={faqItems} />}
      <Offer />
    </>
  );
};

export default Home;

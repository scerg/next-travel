import Activity from "@/app/homeModule/activity/activity";
import Excursions from "@/app/homeModule/excursions/excursions";
import Faq from "@/app/homeModule/faq/faq";
import News from "@/app/homeModule/news/news";
import Offer from "@/app/homeModule/offer/offer";
import Reviews from "@/app/homeModule/reviews/reviews";
import { ExcursionItemProps } from "@/app/interfaces/excursions.interface";
import { FaqProps } from "@/app/interfaces/faq.interface";
import { HomeItemProps } from "@/app/interfaces/homeModule.interface";
import { NewsItemProps } from "@/app/interfaces/news.interface";
import { ReviewsProps } from "@/app/interfaces/reviews.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import React from "react";

async function getHome(): Promise<{ data: HomeItemProps[] }> {
  const path = API.homePage.homes;
  const urlParamsObject = {
    populate: ["title", "items.picture"],
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getExcursions(): Promise<{
  data: Omit<ExcursionItemProps[], "blocks" | "seo">;
}> {
  const path = API.excursionsPage.excursions;
  const urlParamsObject = {
    populate: ["h1", "slug", "text_small", "image", "cities", "price"],
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getReviews(): Promise<{
  data: ReviewsProps[];
}> {
  const path = API.reviewPage.reviews;
  const urlParamsObject = {
    populate: ["title", "description", "date", "name", "rating"],
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getNews(): Promise<{
  data: Omit<NewsItemProps[], "blocks" | "seo">;
}> {
  const path = API.newsPage.news;
  const urlParamsObject = {
    sort: ["id:desc"],
    populate: ["h1", "slug", "text_small", "image"],
  };
  return await fetchAPI(path, urlParamsObject);
}

async function getFaq(): Promise<{ data: Omit<FaqProps, "seo"> }> {
  const path = API.faqPage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "items"],
  };
  return await fetchAPI(path, urlParamsObject);
}

const Home = async (): Promise<JSX.Element> => {
  const home = await getHome();
  const [activity] = home?.data || [];

  const reviews = await getReviews();
  const { data: reviewsItems } = reviews || {};

  const news = await getNews();
  const { data: newsItems } = news || {};

  const faq = await getFaq();
  const { items: faqItems } = faq?.data || {};

  const excursions = await getExcursions();
  const { data: excursionsItems } = excursions || {};

  return (
    <>
      {activity && <Activity data={activity} />}
      {excursionsItems?.length > 0 && <Excursions data={excursionsItems} />}
      {reviewsItems?.length > 0 && <Reviews data={reviewsItems} />}
      {newsItems?.length > 0 && <News data={newsItems} />}
      {faqItems?.length > 0 && <Faq data={faqItems} />}
      <Offer />
    </>
  );
};

export default Home;

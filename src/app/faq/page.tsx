import Accordion from "@/app/components/accordion/accordion";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import {
  AccordionItemProps,
  SeoProps,
} from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import styles from "./page.module.scss";

interface FaqPageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
    items: AccordionItemProps[];
  };
}

async function getFaqPage(): Promise<FaqPageProps> {
  const path = API.faqPage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "items", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getFaqPage();
  return getMetadata(meta);
};

export default async function Faq(): Promise<JSX.Element | null> {
  const faq = await getFaqPage();
  const { h1, text, items } = faq?.data || {};

  return (
    <section>
      <Breadcrumbs>
        <Link href="/">Главная</Link> - {h1}
      </Breadcrumbs>
      <h1>{h1}</h1>
      <div className={styles.text}>{text}</div>
      {items?.length > 0 && <Accordion data={items} />}
    </section>
  );
}

import Accordion from "@/app/components/accordion/accordion";
import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import H1 from "@/app/components/h1/h1";
import { FaqProps } from "@/app/interfaces/faq.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import React from "react";

import styles from "./page.module.scss";

async function getFaqPage(): Promise<{ data: FaqProps }> {
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

  const data = items.sort((a, b) => a.id - b.id);

  return (
    <section>
      <Breadcrumbs>
        <span>{h1}</span>
      </Breadcrumbs>
      <H1>{h1}</H1>
      <div className={styles.text}>{text}</div>
      {items?.length > 0 && <Accordion data={data} />}
    </section>
  );
}

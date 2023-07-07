import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import styles from "./page.module.scss";

interface ExcursionsPageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
  };
}

async function getExcursionsPage(): Promise<ExcursionsPageProps> {
  const path = API.excursionsPage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getExcursionsPage();
  return getMetadata(meta);
};

export default async function Excursions(): Promise<JSX.Element | null> {
  const excursions = await getExcursionsPage();
  const { h1, text } = excursions?.data || {};

  return (
    <section>
      <Breadcrumbs>
        <Link href="/">Главная</Link> - {h1}
      </Breadcrumbs>
      <h1>{h1}</h1>
      <div className={styles.text}>{text}</div>
    </section>
  );
}

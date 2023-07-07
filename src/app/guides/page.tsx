import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import styles from "./page.module.scss";

interface GuidePageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
  };
}
async function getGuidePage(): Promise<GuidePageProps> {
  const path = API.guidePage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getGuidePage();
  return getMetadata(meta);
};

export default async function Guide(): Promise<JSX.Element | null> {
  const guide = await getGuidePage();
  const { h1, text } = guide?.data || {};

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

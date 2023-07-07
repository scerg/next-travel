import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { SeoProps } from "../interfaces/components.interface";
import styles from "./page.module.scss";

interface PlacePageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
  };
}

async function getPlacePage(): Promise<PlacePageProps> {
  const path = API.placePage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getPlacePage();
  return getMetadata(meta);
};

const Place = async (): Promise<JSX.Element> => {
  const place = await getPlacePage();
  const { h1, text } = place?.data || {};

  return (
    <section>
      <Breadcrumbs>
        <Link href="/">Главная</Link> - {h1}
      </Breadcrumbs>
      <h1>{h1}</h1>
      <div className={styles.text}>{text}</div>
    </section>
  );
};

export default Place;

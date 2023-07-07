import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import type { Metadata } from "next";
import Link from "next/link";
import React from "react";

import { getMetadata } from "../utils/helpers";
import styles from "./page.module.scss";

interface AboutPageProps {
  data: {
    h1: string;
    text: string;
    seo: SeoProps["seo"];
  };
}

async function getAboutPage(): Promise<AboutPageProps> {
  const path = API.aboutPage.page;
  const urlParamsObject = {
    populate: ["h1", "text", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getAboutPage();
  return getMetadata(meta);
};

const About = async (): Promise<JSX.Element> => {
  const about = await getAboutPage();
  const { h1, text } = about?.data;

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

export default About;

import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import H1 from "@/app/components/h1/h1";
import RichText from "@/app/components/richText/richText";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import React from "react";

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
        <span>{h1}</span>
      </Breadcrumbs>
      <H1>{h1}</H1>
      <div className={styles.text}>
        <RichText data={{ body: text }} />
      </div>
    </section>
  );
};

export default About;

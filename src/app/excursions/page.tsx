import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import { SeoProps } from "@/app/interfaces/components.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import React from "react";

import { getExcursionsAllFilters } from "./utils/filters-api";
import ExcursionForm from "./views/excursionForm";

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
  const excursionsPage = await getExcursionsPage();
  const { h1, text } = excursionsPage?.data || {};

  const dataForm = await getExcursionsAllFilters();

  return (
    <section>
      <Breadcrumbs>
        <span>{h1}</span>
      </Breadcrumbs>
      <ExcursionForm h1={h1} dataForm={dataForm} />
      <div>{text}</div>
    </section>
  );
}

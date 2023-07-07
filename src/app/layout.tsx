import { NavigationEvents } from "@/app/components/navigationEvents/navigationEvents";
import { HomePageProps } from "@/app/interfaces/home.interface";
import Footer from "@/app/layout/footer/footer";
import Header from "@/app/layout/header/header";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { getMetadata } from "@/app/utils/helpers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";

import "./globals.scss";

const inter = Inter({ subsets: ["cyrillic", "latin"] });

async function getHomePage(): Promise<HomePageProps> {
  const path = API.homePage.page;
  const urlParamsObject = {
    populate: ["navbar.links", "seo"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export const generateMetadata = async (): Promise<Metadata> => {
  const meta = await getHomePage();
  return getMetadata(meta);
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const home = await getHomePage();
  const { data } = home || {};

  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="wrapper">
          <Header data={data} />
          <main>{children}</main>
          <Footer links={data?.navbar?.links} />
          <Suspense fallback={null}>
            <NavigationEvents />
          </Suspense>
        </div>
      </body>
    </html>
  );
}

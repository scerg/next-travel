import SlickSlider from "@/app/components/slickSlider/slickSlider";
import Title from "@/app/components/title/title";
import { NewsItemProps } from "@/app/interfaces/news.interface";
import { getStrapiMedia } from "@/app/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./news.module.scss";

const settings = {
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 5,
  infinite: true,
  slidesToScroll: 1,
  speed: 200,
  className: styles.newsSlider,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};

const News: FC<{ data: NewsItemProps[] }> = ({ data }) => {
  return (
    <section className={styles.news}>
      <Title title={"Актуальные новости"} />
      <SlickSlider settings={settings}>
        {data.map((item) => (
          <Link
            key={item.id}
            className={`${styles.item} news-item`}
            href={`/news/${item.slug}`}
          >
            <div className={styles.content}>
              {item.image && (
                <div className={`image ${styles.image}`}>
                  <Image
                    src={getStrapiMedia(item.image.url) || ""}
                    alt={item.image.alternativeText || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 50vw"
                  />
                </div>
              )}
              <div className={`${styles.title} news-title`}>{item.h1}</div>
              <div className={`${styles.text} news-text`}>
                {item.text_small}
              </div>
            </div>
          </Link>
        ))}
      </SlickSlider>
    </section>
  );
};

export default News;

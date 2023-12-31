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
  slidesToShow: 3,
  infinite: true,
  slidesToScroll: 1,
  speed: 400,
  className: styles.newsSlider,
  responsive: [
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
          <Link key={item.id} className="news-item" href={`/news/${item.slug}`}>
            <div className={styles.content}>
              {item.image && (
                <div className={`image ${styles.image}`}>
                  <Image
                    src={getStrapiMedia(item.image.url) || ""}
                    alt={item.image.alternativeText || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII="
                  />
                </div>
              )}
              <div className={styles.info}>
                <div className={`${styles.title} news-title`}>{item.h1}</div>
                <div className={`${styles.text} news-text`}>
                  {item.text_small}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </SlickSlider>
    </section>
  );
};

export default News;

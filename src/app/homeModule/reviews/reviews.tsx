import SlickSlider from "@/app/components/slickSlider/slickSlider";
import Title from "@/app/components/title/title";
import { ReviewsProps } from "@/app/interfaces/reviews.interface";
import { formatDate } from "@/app/utils/helpers";
import clsx from "clsx";
import React, { FC } from "react";

import styles from "./reviews.module.scss";

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
  className: styles.reviewsSlider,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false,
        centerMode: false,
        variableWidth: false,
      },
    },
  ],
};

const Reviews: FC<{ data: ReviewsProps[] }> = ({ data }) => {
  return (
    <section className={styles.reviews}>
      <Title title={"Вдохновляющие отзывы"} />
      <SlickSlider settings={settings}>
        {data.map((item) => (
          <div key={item.id} className={styles.item}>
            <div className={styles.content}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.text}>{item.description}</div>
              <div className={styles.inform}>
                <div className={styles.info}>
                  {item.name}, {formatDate(item.date)}
                </div>
                <div className={styles.starsDefault}>
                  <div
                    className={clsx(
                      styles.stars,
                      styles[`star-${item.rating}`],
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </SlickSlider>
    </section>
  );
};

export default Reviews;

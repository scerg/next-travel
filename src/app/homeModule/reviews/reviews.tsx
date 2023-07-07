import SlickSlider from "@/app/components/slickSlider/slickSlider";
import Title from "@/app/components/title/title";
import React, { FC } from "react";

import styles from "./reviews.module.scss";

const settings = {
  arrows: true,
  dots: false,
  infinite: true,
  speed: 200,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
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

const Reviews: FC = () => {
  return (
    <section className={styles.reviews}>
      <Title title={"Вдохновляющие отзывы"} />
      <SlickSlider settings={settings}>
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.title}>
              Посетила дайвинг тур и впечатлилась увиденным
            </div>
            <div className={styles.text}>
              Ездила в субботу на дайвинг-тур с крутыми ребятами Иваном и
              Еленой. Полное обмундирование, качественная техника, вода теплая,
              рыбки красивые. Столько эмоций получила в этот день
            </div>
            <div className={styles.inform}>
              <div className={styles.info}>Катя, 12 марта 2023</div>
              <div className={styles.stars}></div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.title}>
              Посетила дайвинг тур и впечатлилась увиденным
            </div>
            <div className={styles.text}>
              Ездила в субботу на дайвинг-тур с крутыми ребятами Иваном и
              Еленой. Полное обмундирование, качественная техника, вода теплая,
              рыбки красивые. Столько эмоций получила в этот день
            </div>
            <div className={styles.inform}>
              <div className={styles.info}>Катя, 12 марта 2023</div>
              <div className={styles.stars}></div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <div className={styles.title}>
              Посетила дайвинг тур и впечатлилась увиденным
            </div>
            <div className={styles.text}>
              Ездила в субботу на дайвинг-тур с крутыми ребятами Иваном и
              Еленой. Полное обмундирование, качественная техника, вода теплая,
              рыбки красивые. Столько эмоций получила в этот день
            </div>
            <div className={styles.inform}>
              <div className={styles.info}>Катя, 12 марта 2023</div>
              <div className={styles.stars}></div>
            </div>
          </div>
        </div>
      </SlickSlider>
    </section>
  );
};

export default Reviews;

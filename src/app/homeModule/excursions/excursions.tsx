import Button from "@/app/components/button/button";
import Title from "@/app/components/title/title";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./excursions.module.scss";

const Excursions: FC = () => {
  return (
    <section className={styles.excursions}>
      <Title title={"Популярные экскурсии"} />
      <div className={styles.excursionsItems}>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image
              src="/excursions/excursion1.jpg"
              width={350}
              height={280}
              alt="Дайвинг"
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.title}>Дайвинг</div>
              <div className={styles.text}>
                5 часов прекрасных видов под водой. Все обмундирование входит в
                стоимость. Посмотрим на иммиграцию черепах на остров Алагади,
                редких видовы рыб и осьминогов. Цена указана за 1 человека
              </div>
              <div className={styles.location}>
                <Image src="/point.svg" width={16} height={22} alt="location" />
                Гирне, Фамагуста
              </div>
            </div>
            <div className={styles.price}>$450</div>
            <div className={styles.btn}>
              <Button title="Оформить" color="light-blue" />
            </div>
          </div>
          <div className={styles.item}>
            <Image
              src="/excursions/excursion3.jpg"
              width={350}
              height={280}
              alt="Пешие прогулки"
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.title}>Пешие прогулки</div>
              <div className={styles.text}>
                С профессиональным гидом вы посетите гору Буффавенто или
                пройдете по пешим тропам в Лапте. В арсенале есть много
                интересных, красивых мест в районе Лапта, Каршияка. Во время
                прогулок экскурсовод расскажет об истории Северного Кипра,
                создания городов и местных традициях. Стоимость указана за 1
                человека
              </div>
              <div className={styles.location}>
                <Image src="/point.svg" width={16} height={22} alt="location" />
                Гирне, Алсанжак
              </div>
            </div>
            <div className={styles.price}>$140</div>
            <div className={styles.btn}>
              <Button title="Оформить" color="light-blue" />
            </div>
          </div>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image
              src="/excursions/excursion2.jpg"
              width={350}
              height={280}
              alt="Экскурсии по святым местам"
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.title}>Экскурсии по святым местам</div>
              <div className={styles.text}>
                Посетим монастырь Святого Варнавы, Церковь св.Георгия; Мечеть
                Лала Мустафа Паши. Прикоснемся к историческим святым местам.
                Совершим крестный ход и посетим службу к храме.
                Продолжительность экскурсии- 6 часов вместе с дорогой. Цена
                указана за 1 человека
              </div>
              <div className={styles.location}>
                <Image src="/point.svg" width={16} height={22} alt="location" />
                Карпаз, Каршияка
              </div>
            </div>
            <div className={styles.price}>$140</div>
            <div className={styles.btn}>
              <Button title="Оформить" color="light-blue" />
            </div>
          </div>
          <div className={styles.item}>
            <Image
              src="/excursions/excursion4.jpg"
              width={350}
              height={280}
              alt="Сафари-тур"
              className={styles.image}
            />
            <div className={styles.content}>
              <div className={styles.title}>Сафари-тур</div>
              <div className={styles.text}>
                5 часов прекрасных видов под водой. Все обмундирование входит в
                стоимость. Посмотрим на иммиграцию черепах на остров Алагади,
                редких видовы рыб и осьминогов. Цена указана за 1 человека
              </div>
              <div className={styles.location}>
                <Image src="/point.svg" width={16} height={22} alt="location" />
                Эсентепе, Лапта
              </div>
            </div>
            <div className={styles.price}>$140</div>
            <div className={styles.btn}>
              <Button title="Оформить" color="light-blue" />
            </div>
          </div>
        </div>
      </div>
      <Button title="Смотреть больше" color="purple" />
    </section>
  );
};

export default Excursions;

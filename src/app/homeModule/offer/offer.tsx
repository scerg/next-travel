import Button from "@/app/components/button/button";
import Image from "next/image";
import React, { FC } from "react";

import styles from "./offer.module.scss";

const Offer: FC = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.form}>
        <div className={styles.image}>
          <Image src="/offer.jpg" width={475} height={475} alt="" />
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            Оставь заявку и мы пришлем полный комплекс предложений
          </div>
          <div className={styles.elements}>
            <div className={styles.element}>
              <input type="text" placeholder="Имя" />
            </div>
            <div className={styles.element}>
              <input type="text" placeholder="Электронная почта" />
            </div>
          </div>
          <div className={styles.btn}>
            <Button title="Отправить" color="purple" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

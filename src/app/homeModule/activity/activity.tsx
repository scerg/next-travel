import Media from "@/app/components/media/media";
import Title from "@/app/components/title/title";
import { HomeItemProps } from "@/app/interfaces/homeModule.interface";
import React, { FC } from "react";

import styles from "./activity.module.scss";

const Activity: FC<{ data: HomeItemProps }> = ({ data: { title, items } }) => {
  return (
    <section className={styles.activity}>
      <Title title={title} />
      <div className={styles.items}>
        {items.map((item) => (
          <div className={styles.item} key={item.id}>
            {item.picture && (
              <Media data={{ image: { ...item.picture, priority: true } }} />
            )}
            <div className={styles.text}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;

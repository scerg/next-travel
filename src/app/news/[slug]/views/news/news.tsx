import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import Media from "@/app/components/media/media";
import { NewsItemProps } from "@/app/interfaces/news.interface";
import { formatDate } from "@/app/utils/helpers";
import { postRenderer } from "@/app/utils/post-renderer";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./news.module.scss";

const NewsPage: FC<{ data: NewsItemProps }> = ({
  data: { h1, updatedAt, image, blocks },
}) => {
  return (
    <section>
      <Breadcrumbs>
        <Link href="/">Главная</Link> - <Link href="/news">Новости</Link> - {h1}
      </Breadcrumbs>
      {image && (
        <div className={styles.image}>
          <Media data={{ image: { ...image, priority: true } }} />
        </div>
      )}
      <div className={styles.content}>
        {updatedAt && (
          <div className={styles.date}>{formatDate(updatedAt)}</div>
        )}
        <h1 className={styles.title}>{h1}</h1>
        {blocks && blocks?.length > 0 && (
          <div className={styles.items}>
            {blocks.map((section, index) => postRenderer(section, index))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsPage;

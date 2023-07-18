import Breadcrumbs from "@/app/components/breadcrumbs/breadcrumbs";
import H1 from "@/app/components/h1/h1";
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
        <Link href="/news">Новости</Link>
        <span>{h1}</span>
      </Breadcrumbs>
      <div className={styles.news}>
        <div className={styles.head}>
          {updatedAt && (
            <div className={styles.date}>{formatDate(updatedAt)}</div>
          )}
          <H1>{h1}</H1>
        </div>
        <div className={styles.items}>
          {image && (
            <div className={styles.image}>
              <Media data={{ image: { ...image, priority: true } }} />
            </div>
          )}
          {blocks &&
            blocks?.length > 0 &&
            blocks.map((section, index) => postRenderer(section, index))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;

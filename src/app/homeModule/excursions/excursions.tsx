import Button from "@/app/components/button/button";
import Title from "@/app/components/title/title";
import ExcursionCards from "@/app/excursions/views/excursionCards/excursionCards";
import { ExcursionItemProps } from "@/app/interfaces/excursions.interface";
import Link from "next/link";
import React, { FC } from "react";

import styles from "./excursions.module.scss";

const Excursions: FC<{ data: ExcursionItemProps[] }> = ({ data }) => {
  return (
    <section className={styles.excursions}>
      <Title title={"Популярные экскурсии"} />
      {data?.length > 0 && <ExcursionCards data={data} />}
      <Link href={`/excursions/`}>
        <Button title="Смотреть больше" color="purple" />
      </Link>
    </section>
  );
};

export default Excursions;

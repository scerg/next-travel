import Accordion from "@/app/components/accordion/accordion";
import Title from "@/app/components/title/title";
import { AccordionItemProps } from "@/app/interfaces/components.interface";
import React, { FC } from "react";

import styles from "./faq.module.scss";

const Faq: FC<{ data: AccordionItemProps[] }> = ({ data }) => {
  return (
    <section className={styles.faq}>
      <Title title={"Здесь вы найдете ответы на часто задаваемые вопросы"} />
      {data?.length > 0 && <Accordion data={data} />}
    </section>
  );
};

export default Faq;

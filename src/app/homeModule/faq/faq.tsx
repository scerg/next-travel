import Accordion from "@/app/components/accordion/accordion";
import Title from "@/app/components/title/title";
import { FaqItemProps } from "@/app/interfaces/faq.interface";
import React, { FC } from "react";

import styles from "./faq.module.scss";

const Faq: FC<{ data: FaqItemProps[] }> = ({ data }) => {
  const faqItems = data.sort((a, b) => a.id - b.id);
  return (
    <section className={styles.faq}>
      <Title title={"Здесь вы найдете ответы на часто задаваемые вопросы"} />
      {data?.length > 0 && <Accordion data={faqItems} />}
    </section>
  );
};

export default Faq;

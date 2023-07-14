import { ExcursionItemProps } from "@/app/interfaces/excursions.interface";
import { getDataHalf } from "@/app/utils/helpers";
import React, { FC } from "react";

import ExcursionCard from "../excursionCards/excursionCard/excursionCard";
import styles from "./excursionCards.module.scss";

const ExcursionCards: FC<{ data: ExcursionItemProps[] }> = ({ data }) => {
  const { part1 = [], part2 = [] } = getDataHalf(data) || {};
  return (
    <div className={styles.excursionsItems}>
      {part1?.length > 0 && (
        <div className={styles.items}>
          {part1.map((item: ExcursionItemProps) => (
            <ExcursionCard key={item.id} data={item} variant="variant-left" />
          ))}
        </div>
      )}
      {part2?.length > 0 && (
        <div className={styles.items}>
          {part2.map((item: ExcursionItemProps) => (
            <ExcursionCard key={item.id} data={item} variant="variant-right" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExcursionCards;

"use client";

import {
  ExcursionItemProps,
  ExcursionsFormProps,
} from "@/app/interfaces/excursions.interface";
import React, { FC, useCallback, useState } from "react";

import ExcursionCards from "./excursionCards/excursionCards";
import ExcursionFormFilters from "./excursionFormFilters/ExcursionFormFilters";

const ExcursionForm: FC<{
  dataForm: ExcursionsFormProps;
  h1: string;
}> = ({ dataForm, h1 }) => {
  const [data, setData] = useState<[]>([]);

  const getData = useCallback((data: ExcursionItemProps[]) => {
    setData(data);
  }, []);

  return (
    <>
      <ExcursionFormFilters dataForm={dataForm} getData={getData} />
      {data && data.length > 0 && (
        <>
          <h1>{h1}</h1>
          <ExcursionCards data={data} />
        </>
      )}
    </>
  );
};

export default ExcursionForm;

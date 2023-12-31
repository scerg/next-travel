"use client";

import H1 from "@/app/components/h1/h1";
import Loader from "@/app/components/loader/loader";
import {
  ExcursionsFormDefaultProps,
  ExcursionsFormFilterDataProps,
  ExcursionsFormProps,
} from "@/app/interfaces/excursions.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { debounce } from "@/app/utils/helpers";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC, useCallback, useEffect, useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import {
  checkFilledSelects,
  getDataSelect,
  getDataSlider,
  getFilters,
} from "../utils/helpers";
import ExcursionCards from "./excursionCards/excursionCards";
import styles from "./excursionForm.module.scss";
import ExcursionFormChips from "./excursionFormFilters/excursionFormChips/excursionFormChips";
import ExcursionFormMap from "./excursionFormFilters/excursionFormMap/excursionFormMap";
import ExcursionFormSelect from "./excursionFormFilters/excursionFormSelect/excursionFormSelect";
import ExcursionFormSlider from "./excursionFormFilters/excursionFormSlider/excursionFormSlider";

const ExcursionForm: FC<{
  h1: string;
  dataForm: ExcursionsFormProps;
}> = ({ h1, dataForm: { selects, sliders } }) => {
  const [filters, setFilters] = useState({});

  const methods = useForm<ExcursionsFormDefaultProps>();
  const { handleSubmit, watch, reset } = methods;
  const currentValues = watch();
  const hasSelects = checkFilledSelects(currentValues.selects);

  const getExcursions = async (
    filters: { $and?: ExcursionsFormFilterDataProps[] } = {},
  ) => {
    const path = API.excursionsPage.excursions;
    let urlParamsObject = {
      populate: {
        image: { populate: "*" },
        cities: { populate: "h1" },
        price: { populate: "*" },
      },
      filters: {},
    };

    if (filters) {
      urlParamsObject = {
        ...urlParamsObject,
        filters,
      };
    }

    const responseData = await fetchAPI(path, urlParamsObject);
    return responseData;
  };

  const onSubmit: SubmitHandler<ExcursionsFormDefaultProps> = useCallback(
    (data) => {
      const filters = getFilters(data, sliders);
      setFilters(() => filters);
    },
    [sliders],
  );

  useEffect(() => {
    const processSubmit = debounce(() => handleSubmit(onSubmit)(), 1000);
    const subscription = watch(() => processSubmit());
    return () => subscription.unsubscribe();
  }, [watch, handleSubmit, onSubmit]);

  const { data, isLoading, isSuccess, isPreviousData } = useQuery({
    queryKey: ["excursions", filters],
    queryFn: () => getExcursions(filters),
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });

  const notDesktop = useMediaQuery("(min-width:1024px)");

  return (
    <>
      <FormProvider {...methods}>
        <div className={styles.excursionsFormFilters}>
          <div className={styles.excursionsFormItemsSelects}>
            {selects.map((e, i) => (
              <ExcursionFormSelect
                key={e.id}
                name={`selects.${i}.${e.id}`}
                data={getDataSelect(e.data)}
                title={e.title}
              />
            ))}
          </div>
          <div className={styles.excursionsFormItemsSliders}>
            {sliders.map((e, i) => (
              <ExcursionFormSlider
                key={e.id}
                name={`sliders.${i}.${e.id}`}
                data={getDataSlider(e.data, i === 0 ? "Любая" : "Любой")}
                title={e.title}
              />
            ))}
          </div>
          <motion.div
            layoutId="excursionsFormChips"
            className={styles.excursionsFormChips}
          >
            {selects.map((e, i) => (
              <ExcursionFormChips
                key={e.id}
                name={`selects.${i}.${e.id}`}
                data={e.data}
              />
            ))}
            {hasSelects && (
              <div className={styles.excursionsFormReset}>
                <Link
                  component="button"
                  onClick={() =>
                    reset({
                      selects: [],
                      sliders: currentValues?.sliders || [],
                    })
                  }
                >
                  Убрать все
                  <Image src="/close.svg" width={24} height={24} alt="" />
                </Link>
              </div>
            )}
          </motion.div>
          {notDesktop && (
            <motion.div
              layoutId="excursionFormMap"
              className={styles.excursionsFormMap}
            >
              <ExcursionFormMap />
            </motion.div>
          )}
        </div>
      </FormProvider>
      <div className={styles.excursionsFormResult}>
        <motion.div layoutId="excursionsFormResultH1">
          <H1>{h1}</H1>
        </motion.div>
        {data && data.data?.length > 0 ? (
          <ExcursionCards data={data.data} />
        ) : (
          isSuccess && (
            <>
              <Image
                className={styles.excursionsFormEmpty}
                src="/empty.jpg"
                width={339}
                height={200}
                alt=""
              />
              <p>
                К сожалению, пока в нашем каталоге нет нужной экскурсии, но мы
                расширяемся и совсем скоро всё будет.
              </p>
            </>
          )
        )}
        {(isLoading || isPreviousData) && <Loader />}
      </div>
    </>
  );
};

export default ExcursionForm;

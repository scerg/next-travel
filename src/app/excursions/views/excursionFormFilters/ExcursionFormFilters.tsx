"use client";

import {
  ExcursionsFormDefaultProps,
  ExcursionsFormFilterDataProps,
  ExcursionsFormProps,
} from "@/app/interfaces/excursions.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";
import { debounce } from "@/app/utils/helpers";
import Link from "@mui/material/Link";
import Image from "next/image";
import React, { FC, useCallback, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

import ExcursionFormChips from "./excursionFormChips/excursionFormChips";
import styles from "./excursionFormFilters.module.scss";
import ExcursionFormMap from "./excursionFormMap/excursionFormMap";
import ExcursionFormSelect from "./excursionFormSelect/excursionFormSelect";
import ExcursionFormSlider from "./excursionFormSlider/excursionFormSlider";
import {
  checkFilledSelects,
  defaultValue,
  getDataSelect,
  getDataSlider,
} from "./utils/helpers";

const ExcursionFormFilters: FC<{
  dataForm: ExcursionsFormProps;
  getData: () => void;
}> = ({ dataForm: { selects, sliders }, getData }) => {
  const getExcursions = useCallback(
    async (filters: { $and?: ExcursionsFormFilterDataProps[] } = {}) => {
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

      getData(responseData.data);
    },
    [getData]
  );

  useEffect(() => {
    getExcursions();
  }, [getExcursions]);

  const methods = useForm<ExcursionsFormDefaultProps>();

  const { handleSubmit, watch, reset } = methods;
  const currentValues = watch();
  const hasSelects = checkFilledSelects(currentValues.selects);

  const onSubmit: SubmitHandler<ExcursionsFormProps> = async (data) => {
    const { selects: selectsData, sliders: slidersData } = data;

    const filtersData = [] as ExcursionsFormFilterDataProps[];
    selectsData.forEach((e) => {
      const [name] = Object.keys(e);
      const res = e[name];

      if (res && !res?.includes(defaultValue)) {
        filtersData.push({
          [name]: {
            id: {
              $in: res,
            },
          },
        });
      }
    });
    slidersData.forEach((e) => {
      const [name] = Object.keys(e);

      const sliderItem = sliders?.find((el) => el.id === name)?.data;
      const sliderItemMod = sliderItem ? getDataSlider(sliderItem) : [];
      const el = e[name];

      const res = el
        ? sliderItemMod?.find((it) => it.value === el)?.id
        : undefined;

      if (res) {
        filtersData.push({
          [name]: {
            id: {
              $in: res,
            },
          },
        });
      }
    });

    const filters = {
      $and: filtersData,
    };

    getExcursions(filters);
  };

  useEffect(() => {
    const processSubmit = debounce(() => handleSubmit(onSubmit)(), 1500);
    const subscription = watch(() => processSubmit());
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
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
              data={getDataSlider(
                e.data,
                e.id === "difficulties" ? "Любая" : "Любой"
              )}
              title={e.title}
            />
          ))}
        </div>
        <div className={styles.excursionsFormChips}>
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
        </div>
        <div className={styles.excursionsFormMap}>
          <ExcursionFormMap />
        </div>
      </div>
    </FormProvider>
  );
};

export default ExcursionFormFilters;

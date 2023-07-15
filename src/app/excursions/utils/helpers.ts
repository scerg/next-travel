import {
  ExcursionsAllFiltersProps,
  ExcursionsFiltersProps,
  ExcursionsFormDefaultProps,
  ExcursionsFormFilterDataProps,
} from "@/app/interfaces/excursions.interface";

export const defaultValue = 0 as number;

export const getDataSelect = (data: ExcursionsFiltersProps[]) => {
  const defaultData = [{ id: defaultValue, name: "Все", slug: "vse" }];

  let result = defaultData;
  if (data?.length > 0) result = [...result, ...data];
  return result;
};

export const getDataSlider = (
  data: ExcursionsFiltersProps[],
  name?: string
) => {
  const defaultData = [
    { id: defaultValue, label: name, name, value: defaultValue },
  ] as ExcursionsFiltersProps[];

  let result = defaultData;
  if (data?.length > 0) result = [...result, ...data];
  return result.map((e, i) => ({
    ...e,
    label: e.name,
    value: i * 50,
  }));
};

export const checkFilledSelects = (
  selects: ExcursionsFormDefaultProps["selects"]
) => {
  if (!selects) return false;

  return selects.reduce((acc: boolean, item) => {
    const [name] = Object.keys(item);
    const res = item[name];
    if (res && !res?.includes(defaultValue)) {
      acc = true;
    }
    return acc;
  }, false);
};

export const getCitiesInSelects = (
  selects: ExcursionsFormDefaultProps["selects"]
) => {
  if (!selects) return [];

  return selects.reduce((acc: number[], item) => {
    const [name] = Object.keys(item);
    const res = item[name];
    if (res && !res?.includes(defaultValue) && name === "cities") {
      acc = res;
    }
    return acc;
  }, []);
};

export const getFilters = (
  data: ExcursionsFormDefaultProps,
  sliders: ExcursionsAllFiltersProps[]
) => {
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

  return filters;
};

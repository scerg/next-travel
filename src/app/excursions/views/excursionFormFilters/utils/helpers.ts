import {
  ExcursionsFiltersProps,
  ExcursionsFormDefaultProps,
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

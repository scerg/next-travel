import {
  ExcursionsFiltersProps,
  ExcursionsFormProps,
} from "@/app/interfaces/excursions.interface";
import { API } from "@/app/utils/api";
import { fetchAPI } from "@/app/utils/fetch-api";

export async function getExcursionsKinds(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.excursionsPage.kinds;
  const urlParamsObject = {
    fields: ["name", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsCities(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.cityPage.cities;
  const urlParamsObject = {
    fields: ["h1", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsDurations(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.excursionsPage.durations;
  const urlParamsObject = {
    fields: ["name", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsActivities(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.excursionsPage.activities;
  const urlParamsObject = {
    fields: ["name", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsGroups(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.excursionsPage.groups;
  const urlParamsObject = {
    fields: ["name", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsDifficulties(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.excursionsPage.difficulties;
  const urlParamsObject = {
    fields: ["name", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsAges(): Promise<{
  data: ExcursionsFiltersProps[];
}> {
  const path = API.excursionsPage.ages;
  const urlParamsObject = {
    fields: ["name", "slug"],
  };
  return await fetchAPI(path, urlParamsObject);
}

export async function getExcursionsAllFilters(): Promise<ExcursionsFormProps> {
  const kinds = await getExcursionsKinds();
  const { data: dataKinds } = kinds || {};

  const cities = await getExcursionsCities();
  const { data: dC } = cities || {};
  const dataCities = dC.map((e) => ({
    ...e,
    name: e.h1 || "",
  }));

  const durations = await getExcursionsDurations();
  const { data: dataDurations } = durations || {};

  const activities = await getExcursionsActivities();
  const { data: dataActivities } = activities || {};

  const groups = await getExcursionsGroups();
  const { data: dataGroups } = groups || {};

  const difficulties = await getExcursionsDifficulties();
  const { data: dataDifficulties } = difficulties || {};

  const ages = await getExcursionsAges();
  const { data: dataAges } = ages || {};

  const dataForm = {
    selects: [
      { id: "excursions_kinds", title: "Вид экскурсии", data: dataKinds },
      { id: "cities", title: "Город", data: dataCities },
      {
        id: "excursions_durations",
        title: "Продолжительность",
        data: dataDurations,
      },
      {
        id: "excursions_activities",
        title: "Активность",
        data: dataActivities,
      },
      { id: "excursions_groups", title: "Группа", data: dataGroups },
    ],
    sliders: [
      {
        id: "excursions_difficulties",
        title: "Сложность",
        data: dataDifficulties,
      },
      { id: "excursions_ages", title: "Возраст", data: dataAges },
    ],
  };

  return dataForm;
}

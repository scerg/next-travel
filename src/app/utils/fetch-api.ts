import qs from "qs";

import { getStrapiURL } from "./helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {},
) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  try {
    const mergedOptions = {
      next: { revalidate: 60 },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      ...options,
    };

    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`,
    )}`;

    const response = await fetch(requestUrl, mergedOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(
        `Please check if your server is running and you set all the required tokens.`,
      );
    }
  }
}

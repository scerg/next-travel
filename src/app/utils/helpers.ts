import { SeoProps } from "@/app/interfaces/components.interface";

interface MetadataReturn {
  title: string | undefined;
  description: string | undefined;
}

export function getMetadata(meta: { data: SeoProps }): MetadataReturn {
  const metadataDefault = {
    title: "Северный Кипр - Путешествия. Туры. Экскурсии.",
    description: "Агрегатор туров и экскурсий по Северному Кипру",
  };

  if (!meta?.data?.seo) return metadataDefault;

  const { seo } = meta.data;
  const result = {
    title: seo?.metaTitle,
    description: seo?.metaDescription,
    other: {
      "emotion-insertion-point": " ",
    },
  };
  return result;
}

export function getStrapiURL(path = ""): string {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || ""}${path}`;
}

export function getStrapiMedia(url: string | null): string | null {
  if (url == null) {
    return null;
  }

  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }

  return `${getStrapiURL()}${url}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("ru-RU", options);
}

export function getDataHalf<T>(
  data: Array<T>
): { part1: T[]; part2: T[] } | null {
  if (data?.length > 0) {
    const dataHalf = data.length / 2;
    const part1 = data.slice(0, dataHalf);
    const part2 = data.slice(dataHalf);

    return { part1, part2 };
  }

  return null;
}

export function getChunk<T>(arr: Array<T>, size: number): T[][] {
  const result = [];
  for (let s = 0, e = size; s < arr.length; s += size, e += size)
    result.push(arr.slice(s, e));
  return result;
}

export function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

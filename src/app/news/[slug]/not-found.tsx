import H1 from "@/app/components/h1/h1";
import Link from "next/link";
import React, { FC } from "react";

const NotFound: FC = () => {
  return (
    <section>
      <H1>Страница не найдена</H1>
      <p>
        <Link href="/news">Новости</Link>
      </p>
    </section>
  );
};

export default NotFound;

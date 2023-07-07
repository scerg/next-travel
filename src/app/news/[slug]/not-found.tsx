import Link from "next/link";
import React, { FC } from "react";

const NotFound: FC = () => {
  return (
    <section>
      <h1>Страница не найдена</h1>
      <p>
        <Link href="/news">Новости</Link>
      </p>
    </section>
  );
};

export default NotFound;

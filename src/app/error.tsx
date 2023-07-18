"use client";

import Button from "@/app/components/button/button";
import H1 from "@/app/components/h1/h1";
import React, { FC, useEffect } from "react";

const Error: FC<{ error: Error; reset: () => void }> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section>
      <H1>Что-то пошло не так!</H1>
      <Button
        title="Попробуйте еще раз"
        color="purple"
        onClick={() => reset()}
      />
    </section>
  );
};

export default Error;

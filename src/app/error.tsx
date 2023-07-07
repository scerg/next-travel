"use client";

import Button from "@/app/components/button/button";
import React, { FC, useEffect } from "react";

const Error: FC<{ error: Error; reset: () => void }> = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section>
      <h1>Что-то пошло не так!</h1>
      <Button
        title="Попробуйте еще раз"
        color="purple"
        onClick={() => reset()}
      />
    </section>
  );
};

export default Error;

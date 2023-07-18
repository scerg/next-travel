"use client";

import Button from "@/app/components/button/button";
import H1 from "@/app/components/h1/h1";
import React, { FC } from "react";

const GlobalError: FC<{ error: Error; reset: () => void }> = ({ reset }) => {
  return (
    <html>
      <body>
        <div className="wrapper">
          <section>
            <H1>Что-то пошло не так!</H1>
            <Button
              title="Попробуйте еще раз"
              color="purple"
              onClick={() => reset()}
            />
          </section>
        </div>
      </body>
    </html>
  );
};

export default GlobalError;

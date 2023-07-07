"use client";

import Button from "@/app/components/button/button";
import React, { FC } from "react";

const GlobalError: FC<{ error: Error; reset: () => void }> = ({ reset }) => {
  return (
    <html>
      <body>
        <div className="wrapper">
          <section>
            <h1>Что-то пошло не так!</h1>
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

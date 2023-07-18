import { balsamiq } from "@/app/shared/fonts";
import clsx from "clsx";
import React, { FC } from "react";

const H1: FC<{ children: React.ReactNode; className?: string | undefined }> = ({
  children,
  className,
}) => {
  return <h1 className={clsx(balsamiq.className, className)}>{children}</h1>;
};

export default H1;

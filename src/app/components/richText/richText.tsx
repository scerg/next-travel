import { RichTextProps } from "@/app/interfaces/components.interface";
import clsx from "clsx";
import React, { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import styles from "./richText.module.scss";

const RichText: FC<{ data: RichTextProps }> = ({ data }) => {
  return (
    <div className={clsx(styles.richText, "richText")}>
      <Markdown remarkPlugins={[remarkGfm]}>{data.body}</Markdown>
    </div>
  );
};

export default RichText;

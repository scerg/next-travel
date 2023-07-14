"use client";

import { ExcursionsFiltersProps } from "@/app/interfaces/excursions.interface";
import Chip from "@mui/material/Chip";
import FormControl from "@mui/material/FormControl";
import Image from "next/image";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { defaultValue } from "../utils/helpers";
import styles from "./excursionFormChips.module.scss";

interface ExcursionFormChipsProps {
  name: string;
  data: ExcursionsFiltersProps[];
}

const ExcursionFormChips: FC<ExcursionFormChipsProps> = ({ name, data }) => {
  const { control, setValue } = useFormContext();

  const onDelete = (value: number[], i: number) => {
    let res = [...value];
    res.splice(i, 1);
    res = res?.length === 0 ? [defaultValue] : res;
    setValue(name, res);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value } }) => (
        <FormControl>
          {value &&
            !value.includes(defaultValue) &&
            value.map((id: number, i: number) => (
              <Chip
                key={id}
                label={data?.find((e) => e.id === id)?.name}
                onClick={() => onDelete(value, i)}
                onDelete={() => onDelete(value, i)}
                deleteIcon={
                  <Image src="/close.svg" width={24} height={24} alt="" />
                }
                variant="outlined"
                className={styles.excursionsFormChip}
              />
            ))}
        </FormControl>
      )}
    />
  );
};

export default ExcursionFormChips;

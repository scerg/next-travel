"use client";

import { ExcursionsFiltersProps } from "@/app/interfaces/excursions.interface";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Slider from "@mui/material/Slider";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styles from "../excursionFormFilters.module.scss";
import { defaultValue } from "../utils/helpers";

interface ExcursionFormSelectProps {
  name: string;
  title: string;
  data: ExcursionsFiltersProps[];
}

interface MarksProps {
  id: number;
  value: number;
  label: string;
}

const ExcursionFormSelect: FC<ExcursionFormSelectProps> = ({
  name,
  data,
  title,
}) => {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className={styles.excursionsFormItem}>
          <InputLabel
            id={`${name}-label`}
            className={styles.excursionsFormLabel}
          >
            {title}
          </InputLabel>
          <FormControl>
            <Slider
              {...field}
              id={name}
              aria-label={`${name}-label`}
              aria-labelledby={`${name}-label`}
              step={null}
              marks={data as MarksProps[]}
              onChange={(_, value) => setValue(name, value)}
              value={field.value || defaultValue}
            />
          </FormControl>
        </div>
      )}
    />
  );
};

export default ExcursionFormSelect;

"use client";

import { defaultValue } from "@/app/excursions/utils/helpers";
import { ExcursionsFiltersProps } from "@/app/interfaces/excursions.interface";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SvgIcon from "@mui/material/SvgIcon";
import React, { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";

import styles from "../../excursionForm.module.scss";

interface ExcursionFormSelectProps {
  name: string;
  title: string;
  data: ExcursionsFiltersProps[];
}

const ExcursionFormSelect: FC<ExcursionFormSelectProps> = ({
  name,
  data,
  title,
}) => {
  const { control, setValue } = useFormContext();

  const onChangeSelect = (e: SelectChangeEvent<number[]>): void => {
    let val = (e.target.value as number[]) || [];
    const [curEl = defaultValue] = val.slice(-1);

    if (curEl !== defaultValue) {
      if (val.length === data.length - 1) {
        val = [defaultValue];
      } else {
        val = val.filter((item: number) => item !== defaultValue);
      }
    } else {
      val = [curEl];
    }

    setValue(name, val);
  };

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
            <Select
              {...field}
              className={styles.excursionsFormSelect}
              displayEmpty
              labelId={`${name}-label`}
              id={name}
              multiple
              onChange={onChangeSelect}
              value={field.value || [defaultValue]}
              input={<OutlinedInput />}
              renderValue={(selected) =>
                data
                  .filter((e) => selected?.includes(e.id))
                  .map((e) => e.name)
                  .join(", ")
              }
              IconComponent={(props) => (
                <SvgIcon {...props}>
                  <g>
                    <path
                      d="M12.411 18.5288C12.2122 18.8158 11.7878 18.8158 11.589 18.5288L3.10607 6.28475C2.87633 5.95315 3.11365 5.5 3.51707 5.5L20.4829 5.5C20.8863 5.5 21.1237 5.95315 20.8939 6.28475L12.411 18.5288Z"
                      stroke="#C5B14E"
                    />
                  </g>
                  <defs></defs>
                </SvgIcon>
              )}
            >
              {data.map(({ id, name }) => (
                <MenuItem key={id} value={id}>
                  <ListItemText primary={name} />
                  <Checkbox
                    checked={
                      field.value?.indexOf(id) > -1 ||
                      (!field.value && id === defaultValue)
                    }
                    className={styles.excursionsFormCheckbox}
                  />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      )}
    />
  );
};

export default ExcursionFormSelect;

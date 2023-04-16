import React from "react";
import { UseFormRegister } from "react-hook-form";
import "./styles.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  title: string;
  register: UseFormRegister<any>;
  name: string;
}

const SelectComponent = ({
  options,
  title,
  register,
  name,
  ...rest
}: SelectProps) => {
  return (
    <div className="select">
      <label className="select__title" htmlFor={name}>
        {title}
      </label>
      <select
        className="select__select"
        id={name}
        {...register(name)}
        {...rest}
      >
        {options.map((option) => (
          <option
            className="select__select-option"
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;

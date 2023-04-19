import React from "react";
import { ISelect } from "../../interfases/select";
import "./styles.scss";

const SelectComponent: React.FC<ISelect> = ({
  options,
  title,
  register,
  name,
  ...rest
}: ISelect) => {
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

import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { IYearPicker } from "../../interfases/yearPicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

const YearPicker: React.FC<IYearPicker> = ({
  name,
  label,
  register,
  selects,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>();

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <DatePicker
        id={name}
        name={name}
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        showYearPicker
        dateFormat="yyyy"
        customInput={<input ref={register} />}
        maxDate={new Date()}
        yearItemNumber={12}
        selectsStart={selects === "selectsStart"}
        selectsEnd={selects === "selectsEnd"}
        placeholderText="Click to select a year"
      />
    </div>
  );
};

export default YearPicker;

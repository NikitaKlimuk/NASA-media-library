import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

interface YearPickerProps {
  name: string;
  label: string;
  register: any;
  selects?: string;
}

const YearPicker: React.FC<YearPickerProps> = ({
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

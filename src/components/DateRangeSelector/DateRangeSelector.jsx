import React, { useState } from "react";
import DatePicker from "../../components/DatePicker/DatePicker";
import Button from "../Button/Button";
import { LABELS } from "../../shared/constants";
import "./DateRangeSelector.css";

const DateRangeSelection = ({
  defaultStartDate,
  defaultEndDate,
  handleBtnClick,
}) => {
  const [startDate, setStartDate] = useState(defaultStartDate);
  const [endDate, setEndDate] = useState(defaultEndDate);
  return (
    <section className="daterangeselect__wrapper">
      <div className="daterangeselect__datepickers">
        <DatePicker
          label={LABELS.START_DATE}
          value={startDate}
          onChange={setStartDate}
        />
        <DatePicker
          label={LABELS.END_DATE}
          value={endDate}
          onChange={setEndDate}
        />
      </div>
      <Button
        handleBtnClick={() => {
          handleBtnClick({ startDate, endDate });
        }}
      >
        Apply
      </Button>
    </section>
  );
};

export default DateRangeSelection;

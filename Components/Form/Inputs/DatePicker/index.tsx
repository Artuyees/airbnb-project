import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React, { useContext } from "react";
import { QueryContext } from "../../../../pages/_app";

type Props = {
  isArrival: boolean;
};
const RangePicker = (props: Props) => {
  const query = useContext(QueryContext);
  if (props.isArrival) {
    return (
      <DatePicker
        disablePast
        label="Date of arrival"
        openTo="day"
        views={["day", "month", "year"]}
        value={query?.query.dateArrival}
        onChange={(newValue) => {
          query?.setQuery({ ...query.query, dateArrival: newValue });
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    );
  } else {
    return (
      <DatePicker
        disablePast
        label="Data of departure"
        openTo="day"
        minDate={query?.query.dateArrival}
        views={["day", "month", "year"]}
        value={query?.query.dateDeparture}
        onChange={(newSecondValue) => {
          query?.setQuery({
            ...query.query,
            dateDeparture: newSecondValue,
          });
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    );
  }
};

export default RangePicker;

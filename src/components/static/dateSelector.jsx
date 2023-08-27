import React from "react";
import { MenuItem, Select } from "@mui/material";
import { months, years } from "../../data/dateSelect";

const DateSelector = (props) => {
  const { handleChange, values } = props;

  return (
    <div style={{marginTop:"10px", marginBottom: "10px"}}>
      <div style={{display:"flex", flexDirection:"column"}}>
        <label style={{marginBottom: "5px"}}>Starting Date</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxHeight: "100px",
            flexWrap: "nowrap",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div style={{ width: "49%" }}>
            <Select defaultValue={values.start_month} fullWidth onChange={handleChange}>
              {months.map((month) => (
                <MenuItem key={`start_month_${month.value}`} value={month.value}>
                  {month.month}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ width: "49%" }}>
            <Select defaultValue={values.start_year} fullWidth onChange={handleChange}>
              {years.map((year) => (
                <MenuItem key={`start_year_${year}`} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div style={{display:"flex", flexDirection:"column"}}>
        <label style={{marginBottom: "5px"}}>Ending Date</label>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxHeight: "100px",
            flexWrap: "nowrap",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <div style={{ width: "49%" }}>
            <Select defaultValue={values.end_month} fullWidth onChange={handleChange}>
              {months.map((month) => (
                <MenuItem key={`end_month_${month.value}`} value={month.value}>
                  {month.month}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ width: "49%" }}>
            <Select defaultValue={values.end_year} fullWidth onChange={handleChange}>
              {years.map((year) => (
                <MenuItem key={`${Math.random()*10000}`} value={year}>{year}</MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DateSelector;

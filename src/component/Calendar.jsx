import React, { useContext, useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";

import "react-day-picker/lib/style.css";
import NavBar from "./NavBar";
import { AppContext } from "./Context";
const Calendar = ({ tagname, journeyType }) => {
  const [showWarning, setShowWarning] = useState(false);
  const { handleDaychange, passengerData } = useContext(AppContext);

  return (
    <div className="col-6">
      <DayPickerInput
        onDayChange={handleDaychange}
        component={React.forwardRef((props, ref) => (
          <div>
            <label
              htmlFor={tagname}
              className="form-label"
              style={{ textTransform: "capitalize" }}
            >
              {tagname}
            </label>
            <div className="input-group">
              <input
                id={tagname}
                className="form-control"
                {...props}
                onKeyPress={(e) => {
                  e.preventDefault();
                  setShowWarning(true);
                }}
                placeholder="select date"
                value={passengerData.day}
                disabled={journeyType === "oneWay"}
              />
            </div>
            {showWarning && (
              <p className="text-danger fs-6">please select {tagname} date</p>
            )}
          </div>
        ))}
        dayPickerProps={{
          numberOfMonths: 2,
          navbarElement: <NavBar />,
          fromMonth: new Date(),
          disabledDays: { before: new Date() },
        }}
      />
    </div>
  );
};

export default Calendar;

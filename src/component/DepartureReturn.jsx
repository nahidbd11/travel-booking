import React, { useContext } from "react";
import Calendar from "./Calendar";
import { AppContext } from "./Context";

const DepartureReturn = () => {
  const { passengerData } = useContext(AppContext);
  return (
    <div className="col-12 col-md-4">
      <div className="row">
        <Calendar tagname="departure" />
        <Calendar tagname="return" journeyType={passengerData.journeyType} />
      </div>
    </div>
  );
};

export default DepartureReturn;

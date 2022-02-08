import React, { createContext, useState } from "react";
import data from "./data";
export const AppContext = createContext(undefined);
function ContextWrapper({ children }) {
  //state will be here

  const [passengerData, setPassengerData] = useState({
    total: 1,
    passdata: data,
    travelClass: "economy",
    day: "",
    journeyType: "",
    from: "",
    to: "",
    isPModal: false,
  });

  //TODO:all methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //handle departure and return date change
  const handleDaychange = (day) =>
    setPassengerData({ ...passengerData, day: day.toLocaleDateString() });

  //handle passenger number inc or dec or change
  function changeNumb(id, type, val) {
    const newpassData = passengerData["passdata"].map((passenger) => {
      if (passenger.id === id) {
        switch (type) {
          case "inc":
            passenger.num = passenger.num + 1;
            break;
          case "dec":
            if (passenger.num === 0) break;
            passenger.num = passenger.num - 1;
            break;
          case "assign":
            passenger.num = parseInt(val);
            break;
          default:
            break;
        }
      }
      return passenger;
    });
    //every time we change the numb of passenger the total numb will also change
    let newtotal = newpassData.reduce((accum, currentItem) => {
      return accum + currentItem.num;
    }, 0);
    setPassengerData({
      ...passengerData,
      passdata: newpassData,
      total: newtotal,
    });
  }
  const PassengerNumInc = (id) => changeNumb(id, "inc");
  const PassengerNumDec = (id) => changeNumb(id, "dec");
  const handlePassengerChange = (id, val) => changeNumb(id, "assign", val);

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handlePassengerChange,
        PassengerNumInc,
        PassengerNumDec,
        passengerData,
        setPassengerData,
        handleDaychange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextWrapper;

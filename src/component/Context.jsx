import React, { createContext, useState } from "react";
export const AppContext = createContext(undefined);
function ContextWrapper({ children }) {
  //state will be here
  const [day, setDay] = useState("");
  const [journeyType, setJourneyType] = useState();
  const [isPModal, setIsPModal] = useState(false);

  //all methods
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleDaychange = (day) => setDay(day.toLocaleDateString());
  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleDaychange,
        day,
        journeyType,
        setJourneyType,
        isPModal,
        setIsPModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default ContextWrapper;

import React, { createContext, useState } from "react";

export const TeamContext = createContext();

const TeamContextProvider = ({ children }) => {
  const [teamStatus, setTeamStatus] = useState(false);
  const updateTeamStatus = (newStatus) => {
    setTeamStatus(newStatus);
  };
  return (
    <TeamContext.Provider value={{ teamStatus, updateTeamStatus }}>
      {children}
    </TeamContext.Provider>
  );
};

export default TeamContextProvider;



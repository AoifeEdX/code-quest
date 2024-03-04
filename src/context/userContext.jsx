import { createContext, useContext, useState } from "react";


export const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [finalPoints, setFinalPoints] = useState(0);
  const [, forceUpdate] = useState();

  const savePlayer = (name) => {
    setUsername(name);
  };

  const saveFinalPoints = (points) => {
    setFinalPoints(points);
    forceUpdate((prev) => !prev);
  };

  return (
    <UserContext.Provider value={{ finalPoints, username, savePlayer, saveFinalPoints }}>
      {children}
    </UserContext.Provider>
  );
};
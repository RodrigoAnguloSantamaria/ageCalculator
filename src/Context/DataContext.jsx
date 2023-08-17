import { createContext, useState } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [birthdate, setbirthDate] = useState({
    birthdate: "",
  });
  const [isBirthDate, setisBirthDate] = useState(false);

  return (
    <DataContext.Provider
      value={{
        birthdate,
        setbirthDate,
        isBirthDate,
        setisBirthDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

import React, { createContext } from 'react';

const user = {
  firstname: 'yavuz Le BG du 67',
  lastname: 'kutuk',
};

export const CurrentUserContext = createContext();

export const CurrentUserContextProvider = ({ children }) => {
  return (
    <CurrentUserContext.Provider value={{ user }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

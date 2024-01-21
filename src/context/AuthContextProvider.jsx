import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [authDetails, setAuthDetails] = useState({isAuth: false, token: ""})
  
  let providerState = {
    authDetails: authDetails,
    login: (token) => {
      setAuthDetails({isAuth:true, token: token})
    },
    logout: () => {
      setAuthDetails({isAuth:false, token: ""})
    }};

  //** dont change the below code **
  if (window.Cypress) {
    window.store = providerState;
  }
  //** dont change the above code **

  return (
    <AuthContext.Provider value={{providerState}}>
      {children}
    </AuthContext.Provider>
  )
};

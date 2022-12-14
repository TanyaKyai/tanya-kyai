import { createContext } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  if (Cookies.get("userCredential")) {
    var user = JSON.parse(Cookies.get("userCredential"));
  }
  const userRole = user?.userRole;
  const name = user?.name;
  const picture = user?.picture;

  const value = { name, picture, userRole };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

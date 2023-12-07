import React, { useEffect, useState } from "react";
import UserLogin from "../dtos/UserLogin";
import Cookies from "js-cookie";
import LoginContextType from "../models/User/LoginContextType";


type LoginContextProps = {
  children?: React.ReactNode;
};

export const LoginContext = React.createContext<LoginContextType | null>(null);

const LoginProvider: React.FC<LoginContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserLogin>({
    id: 0,
    email: "NOEMAIL",
    token: "NOTOKEN",
    firstName: "NOFIRSTNAME",
    lastName: "NOLASTNAME",
    userRole: "NOUSERROLE",
  });

  useEffect(() => {
    const authedUser = Cookies.get("authedUser");
    if (authedUser) {
      setUser(JSON.parse(authedUser) as UserLogin);
    }
  }, []);

  function setUserCookie(user: UserLogin) {
    Cookies.set("authedUser", JSON.stringify(user), { expires: 1 });
    setUser(user);
  }

  return (
    <LoginContext.Provider value={{ user, setUserCookie }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

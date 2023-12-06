import React, { useEffect, useState } from "react";
import UserLogin from "../dtos/UserLogin";
import Cookies from "js-cookie";

type LoginContextType = {
  children?: React.ReactNode;
};


export const LoginContext = React.createContext<LoginContextType>({});

const LoginProvider: React.FC<LoginContextType> = ({ children }) => {
    const [user, setUser] = useState<UserLogin>({
        id: 0,
        email:"NOEMAIL",
        token:"NOTOKEN",
        firstName:"NOFIRSTNAME",
        lastName:"NOLASTNAME",
        userRole:"NOUSERROLE",    
    });

    useEffect(() => {
       const authedUser = Cookies.get("authedUser");
         if (authedUser) {
              setUser(JSON.parse(authedUser));
         }
    }, []);


    


  return <div>LoginProvider</div>;
};

export default LoginProvider;

import UserLogin from "../../dtos/UserLogin";

type LoginContextType = {
    user: UserLogin;
    setUserCookie: (user: UserLogin) => void;
};

export default LoginContextType;
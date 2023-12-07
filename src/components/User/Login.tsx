import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginProvider";
import LoginContextType from "../../models/User/LoginContextType";
import { useForm } from "react-hook-form";
import ServiceUser from "../../services/ServiceUser";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  let { user, setUserCookie } = useContext(LoginContext) as LoginContextType;
  const { register, handleSubmit , formState:{errors} } = useForm<FormData>();
  let userService = new ServiceUser();
  let nav=useNavigate();

  let handleNavHome=()=>{
    nav("/");
  }

  let onSubmit = async (data: FormData) => {

    try {
      let user = await userService.login(data);
      setUserCookie(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="main__login">
      <div className="main__container__left">
        <h2 className="main__login__title">Login</h2>
        <form
          className="main__login__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="main__login__form__input"
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", { required: true, minLength: 3 })}
          />
          {errors.email && <span>This field email is required</span>}
          <input
            className="main__login__form__input"
            type="password"
            id="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 3 })}
          />
          {errors.password && <span>This field password is required</span>}
          <button className="btn__primary" type="submit">
            Login In
          </button>
        </form>
      </div>
      <div className="main__container__right">
        <h2 className="main__login__title">New Here ?</h2>
        <p className="main__container__text">
          Sing up and discover a greate ammount of new opportunities
        </p>
        <button className="btn__primary">
          Sign up
        </button>
      </div>
      ,
    </div>
  );
};

export default Login;

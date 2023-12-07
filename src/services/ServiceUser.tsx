import React from "react";
import ApiServer from "../util/ApiServer";
import UserLogin from "../dtos/UserLogin";
import LoginRequest from "../dtos/LoginRequest";
import RegisterRequest from "../dtos/RegisterRequest";
import User from "../models/User/User";

class ServiceUser extends ApiServer {
  login = async (user: LoginRequest): Promise<UserLogin> => {
    const data = await this.api<LoginRequest, UserLogin>(
      `/user/login`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };

  register = async (user: RegisterRequest): Promise<UserLogin> => {
    const data = await this.api<RegisterRequest, UserLogin>(
      `/user/register`,
      "POST",
      user,
      ""
    );
    if (data.status === 200) {
      const user = await data.json();
      return user;
    } else {
      return Promise.reject([]);
    }
  };
}

export default ServiceUser;

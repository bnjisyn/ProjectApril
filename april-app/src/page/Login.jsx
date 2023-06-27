import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Email from "../assets/Email.svg";
import Password from "../assets/Password.svg";
import Google from "../assets/Google.svg";
import Facebook from "../assets/Facebook.svg";
import LoginLogo from "../assets/Login.svg";

const Login = () => {
  return (
    <div className="h-screen flex flex-col items-center space-y-8">
      <div className="basis-1/12 flex flex-col items-center mt-8">
        <p>Hey There,</p>
        <p className="font-bold text-[20px]">Create an Account</p>
      </div>

      <form action="|" className="basis-8/12 flex flex-col space-y-8">
        <div className="basis-4/5 space-y-4 flex flex-col items-center">
          <div className="flex space-x-2 input">
            <img src={Email} className="pl-3 pr-1" />
            <input
              type="email"
              placeholder="youremail@yteam.com"
              className="input-text"
            />
          </div>
          <div className="flex space-x-2 input">
            <img src={Password} className="pl-3 pr-1" />
            <input
              type="password"
              placeholder="Password"
              className="input-text"
            />
          </div>
        </div>
      </form>

      <div
        className="w-4/5 md:w-3/5 xl:w-2/5 
                      basis-3/12 flex flex-col py-8 space-y-8"
      >
        <Link to='/home' className="flex justify-center rounded-full bg-[#95ADFE]">
          <button
            type="button"
            className="flex space-x-2 items-center"
          >
            <img src={LoginLogo} />
            <p className="py-3 font-bold text-white">Login</p>
          </button>
        </Link>
        <div className="basis-1/5 space-y-5">
          <div className="px-2 flex justify-center">
            {/* <hr /> */}
            Or
          </div>
          <div className="flex justify-center space-x-4">
            <Link to="www.google.com">
              <img src={Google} alt="google" className="social-logo" />
            </Link>
            <Link to="www.facebook.com">
              <img src={Facebook} alt="facebook" className="social-logo" />
            </Link>
          </div>
          <div className="flex justify-center">
            Don't have an account yet?&nbsp;
            <Link to="/register">
              <span className="text-[#EEA4CE] font-medium">Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

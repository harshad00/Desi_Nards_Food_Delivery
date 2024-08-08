/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BottomWarning,
  Button,
  Heading,
  InputBox,
  SubHeading,
} from "../components";
import Logo from "../components/Logo";

// import axios from "axios";
// import Cookies from "js-cookie";
// import { useLocation } from "react-router-dom";

function Login() {
  //   const navigate = useNavigate();
  const [detail, setDetail] = useState({
    identifier: "",
    password: "",
  
  });
  const [buttonClass, setButtonClass] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState(""); // Add error state

  const handleInputChange = (e) => {};
  //     setDetail({ ...detail, [e.target.name]: e.target.value });
  //   };

  const handleRoleChange = (e) => {
      setDetail({ ...detail, role: e.target.value });
    };

  const handleButtonClick = async () => {};
  
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleButtonClick();
      }}
      className="bg-red-400 h-screen flex justify-center"
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          {/* {message && (
            <p className=" font-semibold text-green-400 text-2xl ">{message}</p>
          )}
        </div>*/}

          {error && (
            <p className=" font-semibold text-red-400 text-2xl ">{error}</p>
          )}
          <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
            <Heading label={"Login"} />
            <SubHeading
              label={"Enter your credentials to access your account"}
            />
            <div>
              {" "}
              <Logo size={"1rem"} />{" "}
            </div>
            <InputBox
              onChange={handleInputChange}
              name="identifier"
              placeholder="Enter your Email or Phone Number"
              label={"Email or PhoneNo."}
            />
            <InputBox
              onChange={handleInputChange}
              name="password"
              placeholder="123456"
              label={"Password"}
            />
            <Link to={"/forgot_password"}>
              <div className="text-blue-600 pt-3 font-semibold text-start pl-1 hover:underline">
                Forgot Password
              </div>
            </Link>
            <div className="pt-4">
              <Button
                label={loading ? "Loading..." : "Login"}
                className={`${buttonClass} ${
                  loading ? "bg-red-400 cursor-not-allowed" : ""
                }`}
                disabled={loading} // Disable button while loading
              />
            </div>
            <BottomWarning
              label={"Don't have an account?"}
              buttonText={"Sign up"}
              to={"/signup"}
            />
            <BottomWarning
              label={"This is for only Admin."}
              buttonText={"Admin Login"}
              to={"/admin/adminlogin"}
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;

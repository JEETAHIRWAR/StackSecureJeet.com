// SignupForm.js

import React, { useState } from "react";
import axios from "axios";
import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../Layout/index";
import { NavigationBar, UserProfile } from "../../components/index";
import "./SignUpForm.scss";
import "../../global.scss";
import { Form } from "react-router-dom";
import Card from "../common/card/card";
import {
  FaSquarePlus,
  FaSort,
  FaCircleMinus,
  FaCircleXmark,
  FaAt,
  FaKey,
} from "react-icons/fa6";
import { HiTerminal } from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbArrowRightCircle, TbArrowBadgeRightFilled } from "react-icons/tb";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/users/register", formData);
      console.log("User Registered Successfully:", response.data);
      // Handle successful signIn
    } catch (error) {
      console.error(
        "Error occurred during user registration:",
        // error.response?.data
        error.response?.data || error.message
      );
      // Handle signUp error
    }
  };

  return (
    <>
      <div className="signUpContainer">
        <Card className="h-full w-full">
          <div className="flex flex-row	 items-center h-full w-full justify-around top-0 mt-4">
            <div className="border-b-2 ml-2 mr-2">
              <FaSquarePlus />
            </div>
            <div className="ml-20 mr-12">
              <HiTerminal className="text-xl" />
            </div>
            <div className="flex flex-row	 items-center w-16 ml-12 justify-around">
              <div className="h-4 w-4 rounded-full bg-white flex justify-center items-center">
                <FaSort className="rounded-full bg-white text-black text-xs	 rotate-45	" />
              </div>
              <FaCircleMinus />
              <FaCircleXmark />
            </div>
          </div>
          <div className="w-full h-0 border-b	border-slate-800 mt-3"></div>

          <div className="mt-8 flex flex-row items-center ml-3">
            <span className="flex flex-row items-center mr-2">
              <FaLongArrowAltRight />|
            </span>
            <p className="text ">[ Sign Up / Register ]</p>
            <div className="absolute w-8 h-12 border-b-2 border-l-2 rounded-sm	border-white mt-11"></div>
            <div className="absolute left-10 mts top-24 ">
              <TbArrowRightCircle className="text-xl" />
            </div>
            <div>
              <TbArrowBadgeRightFilled />
            </div>
            <div className="absolute left-14 mt-12 top-20 text-green-500">
              <TbArrowBadgeRightFilled className="mt" />
            </div>
            <div className="absolute h-9 w-2 border-l-2 border-b-2 border-t-2 rounded-sm	border-white left-16 top-28 mt-2 ml-2"></div>
            <div className="absolute h-9 w-2 border-r-2 border-b-2 border-t-2 rounded-sm	border-white right-56 top-28 mt-2 ml-2"></div>
            <div className="absolute top-28 left-11 w-0 h-16 border-b-2 border-l-2 rounded-sm	border-white mt-7"></div>
            <div className="absolute left-10 mts top-40 ">
              <TbArrowRightCircle className="text-xl" />
            </div>
            <div className="absolute left-14 mt-12 top-36 text-green-500">
              <TbArrowBadgeRightFilled className="mt" />
            </div>
            <div className="absolute h-9 w-2 border-l-2 border-b-2 border-t-2 rounded-sm	border-white left-16 top-44 mt-2 ml-2"></div>
            <div className="absolute h-9 w-2 border-r-2 border-b-2 border-t-2 rounded-sm	border-white right-56 top-44 mt-2 ml-2"></div>
            <span className="flex flex-row items-center mr-2 absolute top-96 mt-8 ">
              <FaLongArrowAltRight />|
            </span>
            {/* <p className="text absolute top-64 mt-8 left-10">[ Sign In ]</p> */}
            <div className="absolute top-96 mt-9 ml-1 left-28">
              <TbArrowBadgeRightFilled />
            </div>

            <div className="absolute top-44 left-11 w-0 h-16 border-b-2 border-l-2 rounded-sm	border-white mt-7"></div>
            <div className="absolute left-10 mts top-56 ">
              <TbArrowRightCircle className="text-xl" />
            </div>
            <div className="absolute left-14 mt-12 top-52 text-green-500">
              <TbArrowBadgeRightFilled className="mt" />
            </div>
            <div className="absolute h-9 w-2 border-l-2 border-b-2 border-t-2 rounded-sm	border-white left-16 top-60 mt-2 ml-2"></div>
            <div className="absolute h-9 w-2 border-r-2 border-b-2 border-t-2 rounded-sm	border-white right-56 top-60 mt-2 ml-2"></div>

            <div className="absolute top-60 left-11 w-0 h-16 border-b-2 border-l-2 rounded-sm	border-white mt-7"></div>
            <div className="absolute left-10 mts top-72 ">
              <TbArrowRightCircle className="text-xl" />
            </div>
            <div className="absolute left-14 mt-16 top-64 text-green-500">
              <TbArrowBadgeRightFilled className="mt" />
            </div>
            <div className="absolute h-9 w-2 border-l-2 border-b-2 border-t-2 rounded-sm	border-white left-16 top-72 mt-6 ml-2"></div>
            <div className="absolute h-9 w-2 border-r-2 border-b-2 border-t-2 rounded-sm	border-white right-56 top-72 mt-6 ml-2"></div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="absolute text-green-500 bg-transparent top-32 left-20 w-72 outline-none focus:border-violet-500 border-transparent border-2 rounded px-1 py-0"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
              <input
                className="absolute text-green-500 bg-transparent top-48 left-20 w-72 outline-none focus:border-violet-500 border-transparent border-2 rounded px-1 py-0"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <input
                className="absolute text-green-500 bg-transparent top-60 mt-[13px] left-20 w-72 outline-none focus:border-violet-500 border-transparent border-2 rounded px-1 py-0"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <FaAt className="absolute top-60 mt-[17px] left-80 ml-5 text-slate-400 " />
              <input
                className="absolute text-green-500 bg-transparent top-80 mt-[-2px] left-20 w-72 outline-none focus:border-violet-500 border-transparent border-2 rounded px-1 py-0"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <FaKey className="absolute left-80 ml-5 text-slate-400 top-80 mt-[3px]" />
              <button
                className="text absolute rounded-md top-96 mt-8 left-10 text-white hover:text-green-500"
                type="submit"
              >
                [ Sign Up ]
              </button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import axios from "axios";
import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../Layout/index";
import { NavigationBar, UserProfile } from "../../components/index";
import "./SignInForm.scss";
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

function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/auth/login", formData);
      console.log(response.data);
      // Handle successful login (e.g., store user token, redirect user)
    } catch (error) {
      console.error(error.response.data);
      // Handle login error (e.g., show error message to user)
    }
  };
  return (
    <>
      <div className="signInContainer">
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
            <p className="text ">[ Sign In / Register ]</p>
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
            <span className="flex flex-row items-center mr-2 absolute top-64 mt-8 ">
              <FaLongArrowAltRight />|
            </span>
            {/* <p className="text absolute top-64 mt-8 left-10">[ Sign In ]</p> */}
            <div className="absolute top-64 mt-9 left-28">
              <TbArrowBadgeRightFilled />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="absolute text-green-500 bg-transparent top-32 left-20 w-72 outline-none focus:border-violet-500 border-transparent border-2 rounded px-1 py-0"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <FaAt className="absolute top-32 left-80 ml-5 text-slate-400 mt-1" />
              <input
                className="absolute text-green-500 bg-transparent top-48 left-20 w-72 outline-none focus:border-violet-500 border-transparent border-2 rounded px-1 py-0"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              <FaKey className="absolute top-48 left-80 ml-5 text-slate-400 mt-1" />
              <button
                className="text absolute rounded-md top-64 mt-8 left-10 text-white hover:text-green-500"
                type="submit"
              >
                [ Sign In ]
              </button>
            </form>
          </div>
        </Card>
      </div>
    </>
  );
}

export default SignInForm;

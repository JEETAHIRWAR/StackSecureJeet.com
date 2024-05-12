import React from "react";
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
} from "react-icons/fa6";
import { HiTerminal } from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbArrowRightCircle, TbArrowBadgeRightFilled } from "react-icons/tb";

function SignInForm() {
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
            <p className="text ">[ Sign In ]</p>
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
            <div className="absolute top-28 left-11 w-0 h-12 border-b-2 border-l-2 rounded-sm	border-white mt-7"></div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default SignInForm;

import React from "react";
import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../../Layout/index";
import { NavigationBar, UserProfile } from "../../../components/index";
import "./About.scss";
import "../../../global.scss";

function About() {
  return (
    <>
      <div className="layoutContainer">
        <div className="con1">
          <SecondContainer>
            <UserProfile />
          </SecondContainer>
        </div>
        <div className="con2">
          <FirstContainer>
            <NavigationBar />
          </FirstContainer>
        </div>
        <div className="con3">
          <ThirdContainer>Hello this is About Page Container</ThirdContainer>
        </div>
      </div>
    </>
  );
}

export default About;

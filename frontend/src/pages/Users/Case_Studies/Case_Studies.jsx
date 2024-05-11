import React from "react";
import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../../Layout/index";
import { NavigationBar, UserProfile } from "../../../components/index";
import "./Case_Studies.scss";
import "../../../global.scss";

function Case_Studies() {
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
          <ThirdContainer>
            Hello this is CaseStudy Page Container
          </ThirdContainer>
        </div>
      </div>
    </>
  );
}

export default Case_Studies;

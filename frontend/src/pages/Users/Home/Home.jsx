import React from "react";
import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
} from "../../../Layout/index";
import {
  NavigationBar,
  UserProfile,
  MainContainer,
} from "../../../components/index";
import "./Home.scss";

function Home() {
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
            <MainContainer>Hello this is main Container</MainContainer>
          </ThirdContainer>
        </div>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";

const TemplateOne = (props) => {
  return (
    <FlexContainer>
      <Menus top="5%" left="10%" right="10%" width="80%">
        <StyledImg src={props.restaurant_logo("1")} />
      </Menus>
      <Menus top="40%" left="10%" right="10%" width="80%">
        {/* <StyledImg src={qrcode} /> */}
        <StyledImg src={props.restaurant_logo("1")} />
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {props.restaurant_title("1")}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateOne;

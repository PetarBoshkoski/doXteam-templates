import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";

const TemplateOne = (props) => {
  return (
    <FlexContainer>
      <Menus top="5%" left="0" right="0">
        <StyledImg src={props.restaurant_logo("1")} />
      </Menus>
      <Menus top="50%" left="25%" right="25%" width="50%">
        {/* <StyledImg src={qrcode} /> */}
      </Menus>
      <Menus bottom="5%" left="25%" right="25" width="50%">
        {props.restaurant_title("1")}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateOne;

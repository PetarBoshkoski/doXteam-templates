import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";
import QrCode from "qrcode.react";

const TemplateTwo = (props) => {
  return (
    <FlexContainer style={{ width: "100%" }}>
      <Menus left="5%" top="50%" width="40%">
        <StyledImg src={props.restaurant_logo("2")} />
      </Menus>
      <Menus bottom="5%" left="5%" right="5%" width="90%">
        {props.restaurant_title("2")}
      </Menus>
      <Menus right="5%" top="50%" width="40%">
        {props.restaurant_qrcode("2")}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateTwo;

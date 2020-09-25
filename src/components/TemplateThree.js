import React from "react";
import { FlexContainer, Menus } from "../styles/template1";
import QrCode from "qrcode.react";

const TemplateThree = (props) => {
  return (
    <FlexContainer background={props.restaurant_logo("3")}>
      <Menus top="5%" left="5%" right="5%" width="90%">
        {props.restaurant_title("3")}
      </Menus>
      <Menus bottom="5%" right="5%">
        {props.restaurant_qrcode("3")}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateThree;

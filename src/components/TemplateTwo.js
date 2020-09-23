import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";

const TemplateTwo = (props) => {
  return (
    <FlexContainer style={{ width: "100%" }}>
      <Menus left="5%" top="50%" width="40%">
        <StyledImg src={props.restaurant_logo("2")} />
      </Menus>
      <Menus left="25%" bottom="5%" width="50%">
        {props.restaurant_title("2")}
      </Menus>
      <Menus right="5%" top="50%" width="40%">
        {/* <StyledImg src={qrcode} /> */}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateTwo;

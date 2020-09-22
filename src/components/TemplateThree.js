import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";

const TemplateThree = (props) => {
  return (

    <FlexContainer background={props.template_id === "3" ? props.restaurant_logo : ""}>
      <Menus top="5%" left="25%" width="50%">
        {props.template_id === "3" ? props.restaurant_title : ""}
      </Menus>
      <Menus bottom="5%" right="5%">
        {/* <StyledImg src={qrcode} /> */}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateThree;

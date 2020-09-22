import React from "react";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";

const TemplateOne = (props) => {
    return (            
    <FlexContainer>
      <Menus top="10%" left="25%" right="25%" width="50%">
        <StyledImg src={props.template_id === "1" ? props.restaurant_logo : ""} />
      </Menus>
      <Menus top="50%" left="25%" right="25%" width="50%">
        {/* <StyledImg src={qrcode} /> */}
      </Menus>
      <Menus bottom="5%" left="25%" right="25" width="50%">
        {props.template_id === "1" ? props.restaurant_title : ""}
      </Menus>
    </FlexContainer>
  );
};

export default TemplateOne;

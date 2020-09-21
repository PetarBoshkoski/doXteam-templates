import React from "react";

import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../styles/template1.js";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";
const TemplatesContainer = (props) => { 
  const handleChangeTitle = (id)  => {
    return id === props.radioChecker ? props.inputUrl : ""
  }
  const handleChangeLogo = (id)  => {
    return id === props.radioChecker ? props.inputLogo : ""
  }
  return (

    <div className="templates-container">
      <Container>
        <FlexContainer>
                    <Menus top="10%" left="25%" right="25%" width="50%" ><StyledImg src={handleChangeLogo("1")}/></Menus>
                    <Menus top="50%" left="25%" right="25%" width="50%"><StyledImg src={props.qrcode} /></Menus>
                    <Menus bottom="5%" left="25%" right="25" width="50%">{handleChangeTitle("1")}</Menus>
        </FlexContainer>
      </Container>
    </div>
  );
};

export default TemplatesContainer;

import React from "react";

import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../styles/template1.js";
import { FlexContainer, Menus } from "../styles/template1";

const TemplatesContainer = () => { 
  return (

    <div className="templates-container">
      <Container>
        <Row>
          <Col>
          <FlexContainer>
            <Menus top="10%" left="25%" right="25%" width="50%" >l</Menus>
            <Menus top="50%" left="25%" right="25%" width="50%">QR Code tuka</Menus>
            <Menus bottom="5%" left="25%" right="25" width="50%">Ime tuka</Menus>
          </FlexContainer>  
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
          <FlexContainer>
          <Menus left="5%" top="50%" width="40%"> Logo tuka</Menus>
          <Menus left="25%" bottom="5%" width="50%" >Ime tuka</Menus>
          <Menus right="5%" top="50%" width="40%">
            QR Code tuka
          </Menus> 
          </FlexContainer>
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
          <FlexContainer>
            <Menus top="5%" left="25%" width="50%">Ime tuka</Menus>
            Logoto e background
            <Menus bottom="5%" right="5%">QR Code tuka</Menus>
          </FlexContainer>  
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TemplatesContainer;

import React from "react";
import Template from "../templates/Template";
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "../styles/template1.js";
import { FlexContainer, Menus } from "../styles/template1";

const TemplatesContainer = () => {
  return (
    <div className="templates-container">
      <Container>
        <Row>
          <Col>
          <FlexContainer direction="column" justify="space-between" align="center">
            <Menus margin="10px 25% 10px 25%">Logo tuka PRV</Menus>
            <Menus margin="10px 25% 10px 25%">QR Code tuka</Menus>
            <Menus alignSelf="flex-end">Ime tuka</Menus>
          </FlexContainer>  
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
          <FlexContainer direction="row" justify="space-around" align="center">
          <Menus>
            Logo tuka
          </Menus>
          <Menus alignSelf="flex-end">Ime tuka</Menus>
          <Menus>
            QR Code tuka
          </Menus> 
          </FlexContainer>
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
          <FlexContainer direction="column" justify="space-between" align="center">
            <Menus margin="10px 25% 10px 25%">Ime tuka</Menus>
            Logoto e background
            <Menus margin="10px 25% 10px 25%">QR Code tuka</Menus>
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

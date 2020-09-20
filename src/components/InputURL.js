import React, { useState } from 'react'
import InputLogo from './InputLogo'
import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../styles/template1.js";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";

const InputURL = () => {
    const [inputUrl, setUrl] = useState("")
    const [inputLogo, setLogo] = useState("")
    console.log(inputUrl)
    return (
        <div>
            <div>
                <input type="text" placeholder="Please enter your restaurant logo URL" onChange={(e) => setLogo(e.target.value)} />
            </div>
            <input type="text" name="inputUrl" placeholder="Please enter your restaurant URL" onChange={(e) => setUrl(e.target.value)}  />
            <button>Generate QR Code</button>
            <div className="templates-container">
      <Container>
        <Row>
          <Col>
          <FlexContainer>
            <Menus top="10%" left="25%" right="25%" width="50%" ><StyledImg src={inputLogo}/></Menus>
            <Menus top="50%" left="25%" right="25%" width="50%">QR Code tuka</Menus>
            <Menus bottom="5%" left="25%" right="25" width="50%">{inputUrl}</Menus>
          </FlexContainer>  
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
          <FlexContainer>
          <Menus left="5%" top="50%" width="40%"><StyledImg src={inputLogo}/></Menus>
          <Menus left="25%" bottom="5%" width="50%" >{inputUrl}</Menus>
          <Menus right="5%" top="50%" width="40%">
            QR Code tuka
          </Menus> 
          </FlexContainer>
            <ToggleButtonGroup type="radio" name="options">
              <ToggleButton>Pick this!</ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
          <FlexContainer background={inputLogo}>
            <Menus top="5%" left="25%" width="50%">{inputUrl}</Menus>
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
        </div>
        
    )
}

export default InputURL
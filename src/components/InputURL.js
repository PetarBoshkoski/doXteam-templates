import React, { useState } from 'react'
import InputLogo from './InputLogo'
import { Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "../styles/template1.js";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";
import '../styles/style.css'
import qrcode from '../images/qrcode.png'
import ShowTemplateModal from './ShowTemplateModal'

const InputURL = () => {
    const [inputUrl, setUrl] = useState("")
    const [inputLogo, setLogo] = useState("")
    const [radioChecker, setRadioChecker] = useState("")
    const [modalShow, setModalShow] = React.useState(false);

    const handleChangeTitle = (id)  => {
      return id === radioChecker ? inputUrl : ""
    }
    const handleChangeLogo = (id)  => {
      return id === radioChecker ? inputLogo : ""
    }
    return (

        <div>
          <div className="inputs-container">
              <div>
                  <input type="text" disabled={!radioChecker} placeholder="Please enter your restaurant logo URL" onChange={(e) => setLogo(e.target.value)} />
              </div>
              <input type="text" disabled={!radioChecker} name="inputUrl" placeholder="Please enter your restaurant URL" onChange={(e) => setUrl(e.target.value)}  />
              <br />
              <button disabled={!radioChecker} onClick={() => setModalShow(true)} >Generate</button>
            <div className="templates-container" radioChecker inputUrl inputLogo qrcode>
              <Container>
                <Row>
                  <Col>
                  <FlexContainer>
                    <Menus top="10%" left="25%" right="25%" width="50%" ><StyledImg src={handleChangeLogo("1")}/></Menus>
                    <Menus top="50%" left="25%" right="25%" width="50%"><StyledImg src={qrcode} /></Menus>
                    <Menus bottom="5%" left="25%" right="25" width="50%">{handleChangeTitle("1")}</Menus>
                  </FlexContainer>  
                    <input type="radio" name="selectedTemplate" checked={radioChecker === "1"} value="1" onChange={(e) => setRadioChecker(e.target.value)}/>
                    &nbsp;Choose this template
                  </Col>
                  <Col>
                  <FlexContainer>
                    <Menus left="5%" top="50%" width="40%"><StyledImg src={handleChangeLogo("2")}/></Menus>
                    <Menus left="25%" bottom="5%" width="50%" >{handleChangeTitle("2")}</Menus>
                    <Menus right="5%" top="50%" width="40%"><StyledImg src={qrcode} /></Menus> 
                  </FlexContainer>
                  <input type="radio" name="selectedTemplate" checked={radioChecker === "2"} value="2" onChange={(e) => setRadioChecker(e.target.value)}/>
                  &nbsp;Choose this template
                  </Col>
                  <Col>
                  <FlexContainer background={handleChangeLogo("3")}>
                    <Menus top="5%" left="25%" width="50%">{handleChangeTitle("3")}</Menus>
                    <Menus bottom="5%" right="5%"><StyledImg src={qrcode} /></Menus>
                  </FlexContainer>  
                  <input type="radio" name="selectedTemplate" checked={radioChecker === "3"} value="3" onChange={(e) => setRadioChecker(e.target.value)}/>
                  &nbsp;Choose this template
                  </Col>
                </Row>
                <ShowTemplateModal show={modalShow} onHide={() => setModalShow(false)} inputurl={inputUrl} inputlogo={inputLogo} radiochecker = {radioChecker} ></ShowTemplateModal>
              </Container>
        </div>
        </div>
        </div>
        
    )
}

export default InputURL
import React, { useState } from "react"
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap"
import { FlexContainer, Menus, StyledImg } from "../styles/template1";
import qrcode from '../images/qrcode.png'

const ShowTemplateModal = (props) =>  {
        console.log(props)
    return (
        <Modal
        {...props}

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            YOUR TEMPLATE
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
                <Row>
                  <Col>
                  {props.radiochecker === "3" ? <FlexContainer background={props.inputlogo}>
                    <Menus top="5%" left="25%" width="50%">{props.inputurl}</Menus>
                    <Menus bottom="5%" right="5%"><StyledImg src={qrcode} /></Menus>
                  </FlexContainer>  : ""}
                  </Col>
                </Row>
              </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ShowTemplateModal
import React, { useState } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";
import qrcode from "../images/qrcode.png";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";

const ShowTemplateModal = React.forwardRef((props, ref) => {
  const staticTemplates = [
    {
      id: "1",
      templateBody: <TemplateOne />,
    },
    {
      id: "2",
      templateBody: <TemplateTwo />,
    },
    {
      id: "3",
      templateBody: <TemplateThree />,
    },
  ];
  let selectedTemplate = staticTemplates
    .filter((template) => template.id === props.idtemplate)
    .map((item) => <div key={item.id}>{item.templateBody}</div>);
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
            <Col>{selectedTemplate}</Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default ShowTemplateModal;

import React  from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import qrcode from "../images/qrcode.png";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";

const ShowTemplateModal = React.forwardRef((props) => {
  const staticTemplates = [
    {
      id: "1",
      templateBody: <TemplateOne {...props.customProps}/>,
    },
    {
      id: "2",
      templateBody: <TemplateTwo {...props.customProps}/>,
    },
    {
      id: "3",
      templateBody: <TemplateThree {...props.customProps} />,
    },
  ];
console.log(props.template_id)
  let selectedTemplate = staticTemplates
    .filter((template) => template.id === props.template_id)
    .map((item) => <div key={item.id}><div>{item.templateBody}</div></div>);

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

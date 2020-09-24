import React, { useState, useEffect }  from "react";
import { Modal, Button, Row, Col, Container } from "react-bootstrap";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";

const ShowTemplateModal = ((props) => {
  const staticTemplates = [
    {
      id: "1",
      templateBody: <TemplateOne {...props.custom_props}/>,
    },
    {
      id: "2",
      templateBody: <TemplateTwo {...props.custom_props}/>,
    },
    {
      id: "3",
      templateBody: <TemplateThree {...props.custom_props} />,
    },
  ];
  const [selectedtemplate, setSelectedTemplate] = useState(null);

  
  useEffect(() => {
    setSelectedTemplate(staticTemplates
      .filter((template) => template.id === props.template_id)
      .map((item) => <div key={item.id}><div>{item.templateBody}</div></div>))
  }, [props.template_id, props.custom_props])
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
            <Col>{selectedtemplate}</Col>
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

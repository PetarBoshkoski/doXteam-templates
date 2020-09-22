import React, { useState, useRef } from "react";
import InputLogo from "./InputLogo";
import {
  Container,
  Row,
  Col,
  ToggleButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import "../styles/template1.js";
import { FlexContainer, Menus, StyledImg } from "../styles/template1";
import "../styles/style.css";
import qrcode from "../images/qrcode.png";
import ShowTemplateModal from "./ShowTemplateModal";
import staticData from "../utils/staticData";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";

const InputURL = () => {
  const [inputUrl, setUrl] = useState("");
  const [inputLogo, setLogo] = useState("");
  const [radioChecker, setRadioChecker] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const staticTemplates = [
    {
      id: "1",
      templateBody: <TemplateOne template_id={radioChecker} restaurant_title={inputUrl} restaurant_logo={inputLogo}/>,
    },
    {
      id: "2",
      templateBody: <TemplateTwo template_id={radioChecker} restaurant_title={inputUrl} restaurant_logo={inputLogo}/>,
    },
    {
      id: "3",
      templateBody: <TemplateThree template_id={radioChecker} restaurant_title={inputUrl} restaurant_logo={inputLogo}/>,
    },
  ].map((item) => (
    <div key={item.id} className={item.id}>
      {item.templateBody}
      <input
        type="radio"
        name="templateChecked"
        value={item.id}
        onChange={(event) => setRadioChecker(event.target.value)}
      />
      &nbsp; Choose this template
    </div>
  ));

  return (
    <div>
      <div className="inputs-container">
        <div>
          <input
            type="text"
            disabled={!radioChecker}
            placeholder="Please enter your restaurant logo URL"
            onChange={(e) => setLogo(e.target.value)}
          />
        </div>
        <input
          type="text"
          disabled={!radioChecker}
          name="inputUrl"
          placeholder="Please enter your restaurant URL"
          onChange={(e) => setUrl(e.target.value)}
        />
        <br />
        <button disabled={!radioChecker} onClick={() => setModalShow(true)}>
          Generate
        </button>
        <div className="templates-container">
          {staticTemplates}

          <ShowTemplateModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            idtemplate={radioChecker}
            restaurant_title={inputUrl}
          >



          </ShowTemplateModal>
        </div>
      </div>
    </div>
  );
};

export default InputURL;

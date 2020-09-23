import React, { useState, useEffect } from "react";
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
  // dconst [id, setRadioChecker] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    console.log("I am executed")
  }, radioChecker)

  const restaurant_logo = (id) => {
    return radioChecker === id ? inputLogo : "";
  }

  const restaurant_title = (id) => {
    return radioChecker === id ? inputUrl : "";
  }

  const customProps = {
    template_id: radioChecker,
    restaurant_logo: restaurant_logo,
    restaurant_title: restaurant_title
  }
 
  const staticTemplates = [
    {
      id: "1",
      templateBody: (
        <TemplateOne
          {...customProps}
        />
      ),
    },
    {
      id: "2",
      templateBody: (
        <TemplateTwo
          {...customProps}
        />
      ),
    },
    {
      id: "3",
      templateBody: (
        <TemplateThree
        {...customProps}
        />
      ),
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
            template_id={radioChecker}
            onHide={() => setModalShow(false)}
            customProps={customProps}
          ></ShowTemplateModal>
        </div>
      </div>
    </div>
  );
};

export default InputURL;

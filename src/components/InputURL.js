import React, { useState, useEffect } from "react";
import "../styles/template1.js";
import "../styles/style.css";
import ShowTemplateModal from "./ShowTemplateModal";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";
import TemplateThree from "./TemplateThree";
import QrCode from "qrcode.react";

const InputURL = () => {
  const [inputUrl, setUrl] = useState("");
  const [inputLogo, setLogo] = useState("");
  const [radioChecker, setRadioChecker] = useState(null);
  const [templateId, setTemplateId] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setTemplateId(radioChecker);
  }, [radioChecker]);

  const restaurant_logo = (id) => {
    return radioChecker === id ? inputLogo : "";
  };

  const restaurant_title = (id) => {
    return radioChecker === id ? inputUrl : "";
  };

  const restaurant_qrcode = (id) => {
    return restaurant_title(id) ? <QrCode value={restaurant_title(id)} /> : "";
  };

  const customProps = {
    template_id: radioChecker,
    restaurant_logo: restaurant_logo,
    restaurant_title: restaurant_title,
    restaurant_qrcode: restaurant_qrcode,
  };

  const staticTemplates = [
    {
      id: "1",
      templateBody: <TemplateOne {...customProps} />,
    },
    {
      id: "2",
      templateBody: <TemplateTwo {...customProps} />,
    },
    {
      id: "3",
      templateBody: <TemplateThree {...customProps} />,
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
            template_id={templateId}
            onHide={() => setModalShow(false)}
            custom_props={customProps}
          ></ShowTemplateModal>
        </div>
      </div>
    </div>
  );
};

export default InputURL;

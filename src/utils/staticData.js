import React from "react";

import TemplateOne from "../components/TemplateOne";
import TemplateTwo from "../components/TemplateTwo";
import TemplateThree from "../components/TemplateThree";

// const [id,setId] = useState(null)

// const fun = (attr) => {
//   console.log(attr);
// };
export const staticData = [
  {
    id: 1,
    templateBody: <TemplateOne />,
  },
  {
    id: 2,
    templateBody: <TemplateTwo />,
  },
  {
    id: 3,
    templateBody: <TemplateThree />,
  },
];

export default staticData;

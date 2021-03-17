import React from "react";
import ReactDOM from "react-dom";

import RenamerInput from "./components/renamer-input/renamer-input";

import "./index.less";

function RemoteRenamerIndex():JSX.Element
{
  return <>
    <RenamerInput/>
  </>;
}

function main()
{
  ReactDOM.render(<RemoteRenamerIndex/>,document.querySelector(".main"));
}

window.onload=main;
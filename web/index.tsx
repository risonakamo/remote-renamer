import React from "react";
import ReactDOM from "react-dom";

import RenamerInput from "./components/renamer-input/renamer-input";
import RenameEntry from "./components/rename-entry/rename-entry";

import "./index.less";

function RemoteRenamerIndex():JSX.Element
{
  return <>
    <div className="input-zone">
      <RenamerInput className="rename-input"/>
    </div>

    <div className="entries-zone">
      <RenameEntry/>
    </div>
  </>;
}

function main()
{
  ReactDOM.render(<RemoteRenamerIndex/>,document.querySelector(".main"));
}

window.onload=main;
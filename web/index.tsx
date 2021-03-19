import React from "react";
import ReactDOM from "react-dom";

import RenamerInput from "./components/renamer-input/renamer-input";
import RenameEntries from "./components/rename-entries/rename-entries";

import "./index.less";

function RemoteRenamerIndex():JSX.Element
{
  return <>
    <div className="input-zone">
      <RenamerInput className="rename-input"/>
    </div>

    <RenameEntries/>
  </>;
}

function main()
{
  ReactDOM.render(<RemoteRenamerIndex/>,document.querySelector(".main"));
}

window.onload=main;
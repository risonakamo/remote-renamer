import React from "react";
import ReactDOM from "react-dom";

import RenamerInput from "./components/renamer-input/renamer-input";
import RenameEntries from "./components/rename-entries/rename-entries";

import "./index.less";

const _exampleEntries:RenameItem[]=[
  {
    name:"[Erai-raws] Non Non Biyori Nonstop - 09 [1080p][Multiple Subtitle].mkv",
    shortname:"nonnonbiyorinonstop"
  },
  {
    name:"[SubsPlease] Azur Lane - Bisoku Zenshin! - 09 (1080p) [463D748A].mkv",
    shortname:"azurlane"
  },
  {
    name:"[Erai-raws] Non Non Biyori Nonstop - 10 [1080p][Multiple Subtitle].mkv",
    shortname:"nonnonbiyorinonstop"
  }
];

function RemoteRenamerIndex():JSX.Element
{
  return <>
    <div className="input-zone">
      <RenamerInput className="rename-input"/>
    </div>

    <RenameEntries items={_exampleEntries}/>
  </>;
}

function main()
{
  ReactDOM.render(<RemoteRenamerIndex/>,document.querySelector(".main"));
}

window.onload=main;
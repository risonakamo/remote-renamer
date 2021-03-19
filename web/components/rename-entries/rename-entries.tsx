import React from "react";

import RenameEntry from "../rename-entry/rename-entry";

import "./rename-entries.less";

export default function RenameEntries():JSX.Element
{
  return <div className="rename-entries">
    <div className="shortname-group">
      <h2 className="rename-entry-header">nonnonbiyorinonstop</h2>
      <RenameEntry/>
      <RenameEntry/>
    </div>

    <div className="shortname-group">
      <h2 className="rename-entry-header">nonnonbiyorinonstop</h2>
      <RenameEntry/>
    </div>
  </div>;
}
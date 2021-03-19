import React from "react";

import "./rename-entry.less";

interface RenameEntryProps
{
  entry:RenameItem
}

/** a single rename entry. */
export default function RenameEntry(props:RenameEntryProps):JSX.Element
{
  return <div className="rename-entry">
    <div className="wrap">
      <p className="name">{props.entry.name}</p>
      <p className="short-name">{props.entry.shortname}</p>

      <div className="rename-zone">
        <img src="/assets/edit-entry-button_PLACEHOLDER.png"/>
        <input className="entry-rename"/>
      </div>
    </div>

    <img src="/assets/edit-entry-button_PLACEHOLDER.png" className="button edit-entry-button"/>
  </div>;
}
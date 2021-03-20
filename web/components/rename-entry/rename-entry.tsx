import React from "react";
import cx from "classnames";

import "./rename-entry.less";

interface RenameEntryProps
{
  entry:RenameItem
  selected?:boolean
  faded?:boolean

  // onclick returns the name of the entry
  onClick?(name:string):void
}

/** a single rename entry. */
export default function RenameEntry(props:RenameEntryProps):JSX.Element
{
  function clickHandler():void
  {
    if (props.onClick)
    {
      props.onClick(props.entry.name);
    }
  }

  // class on top level
  var topClasses={
    selected:props.selected,
    faded:props.faded
  };

  var renameZoneClass={
    showing:props.selected
  };

  return <div className={cx("rename-entry",topClasses)} onClick={clickHandler}>
    <div className="wrap">
      <p className="name">{props.entry.name}</p>
      <p className="short-name">{props.entry.shortname}</p>

      <div className={cx("rename-zone",renameZoneClass)}>
        <img src="/assets/edit-entry-button_PLACEHOLDER.png"/>
        <input className="entry-rename"/>
      </div>
    </div>

    <img src="/assets/edit-entry-button_PLACEHOLDER.png" className="button edit-entry-button"/>
  </div>;
}
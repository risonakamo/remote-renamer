import React,{useRef,useEffect} from "react";
import cx from "classnames";

import "./rename-entry.less";

interface RenameEntryProps
{
  entry:RenameItem
  selected?:boolean
  faded?:boolean

  // onclick returns the name of the entry
  onClick?(name:string):void

  // triggers on X button
  onDeselect?():void
}

/** a single rename entry. */
export default function RenameEntry(props:RenameEntryProps):JSX.Element
{
  const renameInput=useRef<HTMLInputElement>(null);

  // on selected change to true
  useEffect(()=>{
    if (props.selected)
    {
      (async ()=>{
        renameInput.current!.value=await navigator.clipboard.readText();
        renameInput.current!.focus();
      })();
    }
  },[props.selected]);

  async function clickHandler():Promise<void>
  {
    if (props.onClick)
    {
      props.onClick(props.entry.name);
    }
  }

  function rightButtonHandler():void
  {
    if (props.selected && props.onDeselect)
    {
      props.onDeselect();
    }

    else if (!props.selected && props.onClick)
    {
      clickHandler();
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

  var editOrCloseButton:string;

  if (props.selected)
  {
    editOrCloseButton="/assets/x_PLACEHOLDER.png";
  }

  else
  {
    editOrCloseButton="/assets/edit-entry-button_PLACEHOLDER.png";
  }

  return <div className={cx("rename-entry",topClasses)}>
    <div className="wrap" onClick={clickHandler}>
      <p className="name">{props.entry.name}</p>
      <p className="short-name">{props.entry.shortname}</p>

      <div className={cx("rename-zone",renameZoneClass)}>
        <img src="/assets/edit-entry-button_PLACEHOLDER.png"/>
        <div className="input-wrap">
          <input className="entry-rename" ref={renameInput}/>
          <img src="/assets/submit_PLACEHOLDER.png" className="submit-button"/>
        </div>
      </div>
    </div>

    <img src={editOrCloseButton} className="button edit-entry-button"
      onClick={rightButtonHandler}/>
  </div>;
}
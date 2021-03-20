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

  // triggers on submit action. submit also triggers de-select.
  // includes user inputed text.
  onSubmit?(text:string):void
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

  /** for clicking body of entry */
  async function clickHandler():Promise<void>
  {
    props.onClick?.(props.entry.name);
  }

  /** clicking top right button (close or open) */
  function rightButtonHandler():void
  {
    // if selected, perform the deselect action (x button)
    if (props.selected)
    {
      props.onDeselect?.();
    }

    // otherwise identical to clicking the body
    else if (!props.selected)
    {
      clickHandler?.();
    }
  }

  /** clicking submit button */
  function submitHandler(e:React.MouseEvent|React.KeyboardEvent):void
  {
    e.stopPropagation();
    props.onSubmit?.(renameInput.current!.value);
    props.onDeselect?.();
  }

  /** key control in rename input */
  function renameEntryKeyHandler(e:React.KeyboardEvent):void
  {
    // perform submit on enter key.
    if (e.key=="Enter")
    {
      e.preventDefault();
      submitHandler(e);
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
          <input className="entry-rename" ref={renameInput} onKeyDown={renameEntryKeyHandler}/>
          <img src="/assets/submit_PLACEHOLDER.png" className="submit-button"
            onClick={submitHandler}/>
        </div>
      </div>
    </div>

    <img src={editOrCloseButton} className="button edit-entry-button"
      onClick={rightButtonHandler}/>
  </div>;
}
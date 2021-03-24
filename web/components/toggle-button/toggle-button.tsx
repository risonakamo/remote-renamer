import React,{useState,useEffect} from "react";
import cx from "classnames";

import "./toggle-button.less";

interface ToggleButtonProps
{
  inactiveText:string
  activeText:string

  initialState?:boolean

  onToggle?(active:boolean):void
}

export default function ToggleButton(props:ToggleButtonProps):JSX.Element
{
  const [isActive,setActive]=useState<boolean>(false);

  // set initial state
  useEffect(()=>{
    if (props.initialState)
    {
      setActive(true);
    }
  },[props.initialState]);

  function clickHandler():void
  {
    props.onToggle?.(!isActive);
    setActive(!isActive);
  }

  var toggleButtonClasses={
    selected:isActive
  };

  var text:string=isActive?props.activeText:props.inactiveText;

  return <div className={cx("toggle-button",toggleButtonClasses)} onClick={clickHandler}>
    {text}
  </div>;
}
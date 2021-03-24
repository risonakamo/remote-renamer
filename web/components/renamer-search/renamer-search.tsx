import React,{useEffect,useRef} from "react";
import cx from "classnames";

import ToggleButton from "components/toggle-button/toggle-button";

import "./renamer-search.less";

interface RenamerSearchProps
{
  className?:string

  onSubmit?(input:string):void
}

export default function RenamerSearch(props:RenamerSearchProps):JSX.Element
{
  const theInput=useRef<HTMLInputElement>(null);

  useEffect(()=>{
    theInput.current?.focus();
  },[]);

  /** handle input change event */
  function changeHandler(e:React.ChangeEvent):void
  {
    props.onSubmit?.((e.currentTarget as HTMLInputElement).value);
  }

  return <div className="renamer-search-wrap">
    <div className="button-zone">
      <ToggleButton activeText="SHORTNAME ON" inactiveText="SHORTNAME OFF"
        initialState={true}/>
    </div>
    <input className={cx("renamer-search",props.className)}
      onChange={changeHandler} ref={theInput}/>
  </div>;
}
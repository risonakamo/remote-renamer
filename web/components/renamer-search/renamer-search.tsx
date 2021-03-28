import React,{useEffect,useRef,forwardRef,useImperativeHandle} from "react";
import cx from "classnames";

import ToggleButton from "components/toggle-button/toggle-button";

import "./renamer-search.less";

interface RenamerSearchProps
{
  className?:string

  shortnameActive:boolean

  onSubmit?(input:string,simplify:boolean):void
  onShortnameToggle(active:boolean):void
}

export interface RenamerSearchRef
{
  focusInput():void
}

export default forwardRef(RenamerSearch);
function RenamerSearch(props:RenamerSearchProps,ref:React.Ref<RenamerSearchRef>):JSX.Element
{
  const theInput=useRef<HTMLInputElement>(null);

  useImperativeHandle(ref,()=>({
    focusInput
  }));

  // focus this input on page load
  useEffect(()=>{
    theInput.current?.focus();
  },[]);

  // call change handler when shortname active changes
  useEffect(()=>{
    changeHandler();
  },[props.shortnameActive]);

  /** handle input change event */
  function changeHandler():void
  {
    props.onSubmit?.(
      theInput.current!.value,
      props.shortnameActive
    );
  }

  /** focus on the input */
  function focusInput():void
  {
    theInput.current?.focus();
  }

  return <div className="renamer-search-wrap">
    <div className="button-zone">
      <ToggleButton activeText="SHORTNAME ON" inactiveText="SHORTNAME OFF"
        initialState={true} onToggle={props.onShortnameToggle}/>
    </div>
    <input className={cx("renamer-search",props.className)}
      onChange={changeHandler} ref={theInput}/>
  </div>;
}
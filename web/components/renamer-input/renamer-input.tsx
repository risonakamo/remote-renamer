import React from "react";
import cx from "classnames";

import "./renamer-input.less";

interface RenamerInputProps
{
  className?:string
}

export default function RenamerInput(props:RenamerInputProps):JSX.Element
{
  return <input className={cx("renamer-input",props.className)}/>;
}
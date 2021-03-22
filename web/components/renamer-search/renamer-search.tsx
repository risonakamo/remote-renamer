import React from "react";
import cx from "classnames";

import "./renamer-search.less";

interface RenamerSearchProps
{
  className?:string
}

export default function RenamerSearch(props:RenamerSearchProps):JSX.Element
{
  return <input className={cx("renamer-search",props.className)}/>;
}
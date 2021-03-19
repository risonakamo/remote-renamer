import React from "react";
import _ from "lodash";

import {groupEntriesByShortName} from "web/lib/entry-helpers";

import RenameEntry from "../rename-entry/rename-entry";

import "./rename-entries.less";

interface RenameEntriesProps
{
  // the rename entries
  items:RenameItem[]
}

/** manages multiple rename entries. */
export default function RenameEntries(props:RenameEntriesProps):JSX.Element
{
  var entries:RenameItemsByShortName=groupEntriesByShortName(props.items);

  return <div className="rename-entries">
    <div className="shortname-group">
      <h2 className="rename-entry-header">nonnonbiyorinonstop</h2>
      {_.map(props.items,(x:RenameItem,i:number)=>{
        return <RenameEntry entry={x} key={i}/>;
      })}
    </div>
  </div>;
}
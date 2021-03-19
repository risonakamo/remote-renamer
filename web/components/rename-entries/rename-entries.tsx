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
  var groupedEntries:RenameItemsByShortName=groupEntriesByShortName(props.items);

  var groupedEntriesElements:JSX.Element[]=_.map(groupedEntries,createShortnameGroup);

  return <div className="rename-entries">
    {groupedEntriesElements}
  </div>;
}

/** given rename items and a shortname, create RenameEntry elements for each item
 *  and group them into a shortname-group */
function createShortnameGroup(items:RenameItem[],shortname:string):JSX.Element
{
  return <div className="shortname-group">
    <h2 className="rename-entry-header">{shortname}</h2>
    {_.map(items,(x:RenameItem,i:number)=>{
      return <RenameEntry entry={x} key={i}/>;
    })}
  </div>;
}
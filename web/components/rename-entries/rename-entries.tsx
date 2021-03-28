import React,{useState} from "react";
import _ from "lodash";
import cx from "classnames";

import {groupEntriesByShortName} from "web/lib/entry-helpers";

import RenameEntry from "components/rename-entry/rename-entry";

import "./rename-entries.less";

interface RenameEntriesProps
{
  // the rename entries
  items:RenameItem[]

  selectedItem:string|null

  onSelectItem(itemName:string):void
  onDeselectItem():void
  onSubmit(entry:string,newName:string):void
}

/** manages multiple rename entries. */
export default function RenameEntries(props:RenameEntriesProps):JSX.Element
{
  /** given rename items and a shortname, create RenameEntry elements for each item
   *  and group them into a shortname-group */
  function createShortnameGroup(items:RenameItem[],shortname:string):JSX.Element
  {
    return <div className="shortname-group" key={shortname}>
      <h2 className="rename-entry-header">{shortname}</h2>
      {_.map(items,(x:RenameItem,i:number)=>{
        var selected:boolean=x.name==props.selectedItem;
        var faded:boolean=props.selectedItem!=null && !selected;

        return <RenameEntry entry={x} key={i} selected={selected}
          onClick={props.onSelectItem} faded={faded} onDeselect={props.onDeselectItem}
          onSubmit={props.onSubmit}/>;
      })}
    </div>;
  }

  var groupedEntries:RenameItemsByShortName=groupEntriesByShortName(props.items);

  var groupedEntriesElements:JSX.Element[]=_.map(groupedEntries,createShortnameGroup);

  var noEntriesClasses={
    showing:!groupedEntriesElements.length
  };

  return <div className="rename-entries">
    <div className={cx("no-entries",noEntriesClasses)}>
      <p>no entries.</p>
    </div>
    {groupedEntriesElements}
  </div>;
}
import React,{useEffect,useState,useRef} from "react";
import ReactDOM from "react-dom";

import RenamerSearch from "components/renamer-search/renamer-search";
import RenameEntries from "components/rename-entries/rename-entries";

import {searchRenameItems,renameItem} from "web/lib/renamer-api";

import "./index.less";

function RemoteRenamerIndex():JSX.Element
{
  const [theCurrentItems,setCurrentItems]=useState<RenameItem[]>([]);
  const [theSelectedItem,setSelectedItem]=useState<string|null>(null);
  const [shortnameActive,setShortnameActive]=useState<boolean>(true);

  const lastQuery=useRef<string>("");

  useEffect(()=>{
    (async ()=>{
      setCurrentItems(await searchRenameItems("",true));
    })();
  },[]);

  /** set the current items to items found by a query */
  async function searchItems(query:string,simplify:boolean):Promise<void>
  {
    setCurrentItems(await searchRenameItems(query,simplify));
    deselectItem();
    lastQuery.current=query;
  }

  /** deselect item */
  function deselectItem():void
  {
    setSelectedItem(null);
  }

  /** do rename item with api */
  async function doRenameItem(target:string,newName:string):Promise<void>
  {
    await renameItem(target,newName);
    searchItems(lastQuery.current,shortnameActive);
  }

  return <>
    <div className="input-zone">
      <RenamerSearch className="rename-input" onSubmit={searchItems} shortnameActive={shortnameActive}
        onShortnameToggle={setShortnameActive}/>
    </div>

    <RenameEntries items={theCurrentItems} selectedItem={theSelectedItem} onSelectItem={setSelectedItem}
      onDeselectItem={deselectItem} onSubmit={doRenameItem}/>
  </>;
}

function main()
{
  ReactDOM.render(<RemoteRenamerIndex/>,document.querySelector(".main"));
}

window.onload=main;
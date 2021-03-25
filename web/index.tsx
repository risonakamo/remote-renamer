import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom";

import RenamerSearch from "components/renamer-search/renamer-search";
import RenameEntries from "components/rename-entries/rename-entries";

import {searchRenameItems} from "web/lib/renamer-api";

import "./index.less";

function RemoteRenamerIndex():JSX.Element
{
  const [theCurrentItems,setCurrentItems]=useState<RenameItem[]>([]);

  useEffect(()=>{
    (async ()=>{
      setCurrentItems(await searchRenameItems("",true));
    })();
  },[]);

  /** set the current items to items found by a query */
  async function searchItems(query:string,simplify:boolean):Promise<void>
  {
    setCurrentItems(await searchRenameItems(query,simplify));
  }

  return <>
    <div className="input-zone">
      <RenamerSearch className="rename-input" onSubmit={searchItems}/>
    </div>

    <RenameEntries items={theCurrentItems}/>
  </>;
}

function main()
{
  ReactDOM.render(<RemoteRenamerIndex/>,document.querySelector(".main"));
}

window.onload=main;
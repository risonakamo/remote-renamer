import React from "react";

import "./rename-entry.less";

export default function RenameEntry():JSX.Element
{
  return <div className="rename-entry">
    <div className="wrap">
      <p className="name">[Erai-raws] Non Non Biyori Nonstop - 09 [1080p][Multiple Subtitle].mkv</p>
      <p className="short-name">nonnonbiyorinonstop</p>

      <div className="rename-zone">
        <img src="/assets/edit-entry-button_PLACEHOLDER.png"/>
        <input className="entry-rename"/>
      </div>
    </div>

    <img src="/assets/copy-button_PLACEHOLDER.png" className="button copy-button"/>
    <img src="/assets/edit-entry-button_PLACEHOLDER.png" className="button edit-entry-button"/>
  </div>;
}
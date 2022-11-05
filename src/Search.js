import React, {useState} from "react";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword]= useState("");
  function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }
  function handleKeywordChange(event)
  {setKeyword(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" 
        onChange={handleKeywordChange}
        autoFocus={true} />
      </form>
    </div>
  );
}
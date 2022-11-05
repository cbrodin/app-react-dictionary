import React from "react";
import "./Search.css";

export default function Search() {
  function search(){
    alert("Searching");
  }
  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
}
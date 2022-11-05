import React, {useState} from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search() {
  let [keyword, setKeyword]= useState("");
  let [results, setResults] = useState(null);
  
  function handleResponse(response){
    setResults(response.data[0]);
  }

  
  function search(event) {
    event.preventDefault();
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse)
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
      <Results  results={results} />
    </div>
  );
}
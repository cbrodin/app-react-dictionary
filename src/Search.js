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
      <h3>What word do you want to look up?</h3>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>
      <p1 className="searchExample">i.e. food, dog, forest, sunrise </p1>
      <Results results={results} />
    </div>
  );
}
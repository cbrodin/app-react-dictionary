import React, {useState} from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";

export default function Search(props) {
  let [keyword, setKeyword]= useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState (false);
  
  function handleResponse(response){
    setResults(response.data[0]);
  }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
}

  function handleSubmit(event) {
    event.preventDefault();
search();
  }

  function handleKeywordChange(event)
  {setKeyword(event.target.value);
  }

  function load(){
    setLoaded(true);
    search();
  }

  if (loaded) {
  return (
    <div className="Search">
      <section>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={false}
          />
        </form>
        <p1 className="searchExample">i.e. food, dog, tea, yoga </p1>
      </section>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Results results={results} />{" "}
          </div>
        </div>
      </div>
    </div>
  ); } else {
load(); 
return "Loading...."
  } }
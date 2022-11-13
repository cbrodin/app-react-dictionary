import React, {useState} from "react";
import axios from "axios";
import "./Search.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Search(props) {
  let [keyword, setKeyword]= useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState (false);
  let [photos,setPhotos] = useState(null);
  
  function handleResponse(response){
    setResults(response.data[0]);
  }

    function handlePexelsResponse(response) {
      setPhotos(response.data.photos);
    }

  function search() {
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000178d28a701aa44a50a75062078acdc4ba";
      let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
      let headers = {Authorization: `Bearer ${pexelsApiKey}`};
      axios.get(pexelsApiUrl, { headers: headers}) .then(handlePexelsResponse);
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
            <Results results={results} />{" "}
            <Photos photos={photos}/>
          </div>
  ); } else {
load(); 
return "Loading...."
  } }
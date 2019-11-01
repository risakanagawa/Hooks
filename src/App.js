import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import List from "./List";

const apikey = process.env.REACT_APP_MOVIE_API_KEY;
const url = `https://api.unsplash.com/search/photos/`;

function App() {
  const [data, setData] = useState();
  const [firstData, setFirstData] = useState();
  const [ifSearch, setToggle] = useState(false);

  useEffect(() => {
    const randomCities = ["prague", "tokyo", "london", "new york", "bali"];
    const ramdomNum = Math.floor(Math.random() * 5);
    fetch(url + `?query=${randomCities[ramdomNum]}`, {
      headers: {
        Authorization: "Client-ID " + apikey
      }
    })
      .then(res => res.json())
      .then(res => setFirstData(res.results))
      .catch(res => console.log("error", res));
  }, []);

  const search = query => {
    setToggle(true);
    fetch(url + `?query=${query}`, {
      headers: {
        Authorization: "Client-ID " + apikey
      }
    })
      .then(res => res.json())
      .then(res => setData(res.results))
      .catch(res => console.log("error", res));
  };

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar search={search} />
        <List data={ifSearch ? data : firstData} />
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import CharactersGrid from './components/CharactersGrid';
import Search from './components/Search';



function App() {
  
  // declare useEffects 
  const [items ,setItems] = useState([]);
  const [isLoading , setIsLoding] = useState(true);
  const [query, setQuery] = useState('')

  useEffect(() => {

    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(response => response.json())
    .then(data => {
      setItems(data);
      setIsLoding(false)
    }).catch((err) => console.log(err))

  } , [query])

  return (
    <div className="App">
      <Nav/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;

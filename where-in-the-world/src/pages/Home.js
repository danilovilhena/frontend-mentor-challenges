import { useEffect, useState } from 'react'
import { navigate } from '@reach/router'

import '../styles/Home.scss';

const Home = () => {
  const [original, setOriginal] = useState([])
  const [countries, setCountries] = useState([])
  const pick = (obj, ...keys) => Object.fromEntries(keys.filter(key => key in obj).map(key => [key, obj[key]]));
  const slugify = (str) => str.trim().toLowerCase().replace(/[\[\]?.,\/#!$%\^&\*;:{}=\"\-_~()…–—·'’\s]/g, "-").replace(/[\-]{2,}/g, "-").replace(/^[\-]/g, "").replace(/[\-]$/g, "");

  const onSearchChange = (event) => {
    setCountries(original.filter(el => el.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  const onSelectChange = (event) => {
    if(event.target.value === "")
      setCountries(original)
    else
      setCountries(original.filter(el => el.region.toLowerCase() === event.target.value))
  }

  const navigateTo = (name) => {
    navigate(`/country/${slugify(name)}`)
  }

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(res => {
      let filtered = []
      res.forEach(el => {
        filtered.push(pick(el, 'name', 'flag', 'population', 'region', 'capital'))
      })
      setCountries(filtered)
      setOriginal(filtered)
    })
  }, [])

  return (
    <main className="container">
      <div className="inputs">
        <input type="text" placeholder="Search for a country..." onChange={onSearchChange}/>
        <select name="select" onChange={onSelectChange}>
          <option value="" selected>Filter by region</option>
          {[...new Set(original.map(el => el.region))].map(el => 
            <option value={el.toLowerCase()}>{el}</option>
          )}
        </select>
      </div>
      <div className="grid">
        {countries.map(el => 
          <div className="grid-item" key={el.name} role="button" onClick={() => {navigateTo(el.name)}}>
            <img src={el.flag} alt={el.name + " flag"} />
            <div className="grid-content">
              <h2>{el.name}</h2>
              <p><b>Population: </b>{el.population}</p>
              <p><b>Region: </b>{el.region}</p>
              <p><b>Capital: </b>{el.capital}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Home;

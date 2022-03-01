import {useEffect, useState} from 'react'

import '../styles/Home.scss';

const Home = () => {
  const [countries, setCountries] = useState([])
  const pick = (obj, ...keys) => Object.fromEntries(keys.filter(key => key in obj).map(key => [key, obj[key]]));

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(res => {
      let filtered = []
      res.forEach(el => {
        filtered.push(pick(el, 'name', 'flag', 'population', 'region', 'capital'))
      })
      setCountries(filtered)
    })
  }, [])

  return (
    <main className="container">
      <div className="grid">
        {countries.map(el => 
          <div className="grid-item" key={el.name}>
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

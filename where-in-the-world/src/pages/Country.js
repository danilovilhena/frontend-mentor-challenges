import { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import '../styles/Country.scss';

const Country = (props) => {
  const [country, setCountry] = useState({})
  const slugify = (str) => str.trim().toLowerCase().replace(/[\[\]?.,\/#!$%\^&\*;:{}=\"\-_~()…–—·'’\s]/g, "-").replace(/[\-]{2,}/g, "-").replace(/^[\-]/g, "").replace(/[\-]$/g, "");

  const returnHome = () => { navigate('/') }

  useEffect(() => {
    if(props.countryName.length === 3) {
      fetch(`https://restcountries.com/v2/alpha/${props.countryName}`)
      .then(res => res.json())
      .then(res => {setCountry(res)})
    }
    else {
      fetch("https://restcountries.com/v2/all")
      .then(res => res.json())
      .then(res => { 
        res.forEach(el => {
          if(slugify(el.name) === props.countryName) setCountry(el)
        })      
      })
    }
  }, [props.countryName]);
  
  return (
    <div className="container">
      <button className="back-button" onClick={returnHome}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000" className="bi bi-arrow-left" viewBox="0 0 16 16"><path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg>
        Back
      </button>
      {Object.keys(country).length == 0 && <h2>Country not found!</h2>}
      {Object.keys(country).length != 0 &&
      <div className="grid" id="country-info">
        <img src={country.flag} alt={country.name + " flag"}></img>
        <div>
          <h2>{country.name}</h2>
          <div className="grid">
            <div>
              <p><b>Native name: </b>{country.nativeName}</p>
              <p><b>Population: </b> {country.population}</p>
              <p><b>Region: </b> {country.region}</p>
              <p><b>Sub Region: </b> {country.subregion}</p>
              <p><b>Capital: </b> {country.capital}</p>
            </div>
            <div>
              <p><b>Top Level Domain: </b>{country.nativeName}</p>
              <p><b>Currencies: </b> {country.currencies.map(el => el.name).join(', ')}</p>
              <p><b>Languages: </b> {country.languages.map(el => el.name).join(', ')}</p>
            </div>
          </div>
          <div id="border">
            <b>Border countries: </b>
            {country.borders.map(border => <a className="badge" href={`/country/${border}`} key={border}>{border}</a>)}
          </div>
        </div>
      </div>
      }
    </div>
  );
}

export default Country;

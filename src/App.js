import { FormControl, MenuItem, Select } from '@mui/material'
import React, { useState, useEffect } from 'react'
import './App.css'
function App() {

  const [countries, setCountries] = useState([]);
  //STATE :- How to write a variable in react
  //USEEFFECT = Runs a piece of code based on a given condition
  const [country, setCountry] = useState("WorldWide");

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    console.log(countryCode);
    setCountry(countryCode);
  }

  useEffect(() => {
    //the code inside this function will run once, when the component loads and not again
    //async -> run a piece of code which is asynchronous 
    // send a req, wait,do smthng wd that info
    
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then(res => res.json())
        .then(data => {
          const countries = data.map(country => (
            {
              name: country.country,
              value: country.countryInfo.iso2,
            }

          ));
          setCountries(countries);
        }

        );
    };
    getCountriesData();

  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h2>COVID-19 TRACKER</h2>
        <FormControl className="app__dropDown">
          <Select
            variant="outlined"
            value={country}
            onChange={onCountryChange}
          >
            <MenuItem value="Worldwide"> Worldwide</MenuItem>
            {/* loop through all the countries and put a drpdown */}
            {
              countries.map(country => {
                return <MenuItem value={country.value}> {country.name} </MenuItem>
              })}

          </Select>
        </FormControl>
      </div>

    </div>

  )
}

export default App

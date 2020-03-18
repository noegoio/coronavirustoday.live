import React, { useState, useEffect } from 'react';
import corona from './coronavirus.png';
import './App.css';
import axios from 'axios'

function App() {

  const [allStats, setAllStats] = useState([])
  const [stats, setStats] = useState([])

  useEffect(() => {
    axios({
      "method": "GET",
      "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
      "headers": {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "NJXY7AXooOmshXiPILL9lu0H06Khp1Bsopsjsnpqr7N1NNX2jc"
      }
    })
      .then((response) => {
        const { countries_stat } = response.data
        console.log('RESPONSE: ', countries_stat)
        setAllStats(countries_stat)
        setStats(countries_stat)
      })
      .catch((error) => {
        console.log('ERROR: ', error)
      })
  }, [])

  const filterStats = (query: string) => {
    setStats(allStats.filter((country: any) => new RegExp(`${query}.*`, 'i').test(country.country_name)))
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={corona} className="App-logo" alt="logo" />
        <input type="text" onChange={(e) => filterStats(e.target.value)} />
        {stats && stats.map((country: any) => (
          <>
          <h2>{country.country_name}</h2>
            <span>Cases : {country.cases}</span>
            <span>Deaths : {country.deaths}</span>
            <span>New Cases : {country.new_cases}</span>
            <span>New Deaths : {country.new_deaths}</span>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;

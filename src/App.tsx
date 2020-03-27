import React, { useState, useEffect } from 'react';
import corona from './coronavirus.png';
import './App.css';
import { getCasesByCountry, Stats } from './Service'
import { Grid } from './Grid';
import { Spinner } from 'react-rainbow-components';


function App() {

  const [allStats, setAllStats] = useState([])
  const [stats, setStats] = useState([])

  useEffect(() => {
    getCasesByCountry()
      .then((response) => {
        const { countries_stat } = response.data
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
        <h1>Corona Virus Statistics</h1>
      </header>
      <div className="Content">
        {!stats && <Spinner size="large" />}
        <div className="Filter">
          <label>Filter by country: &nbsp;
            <input type="text" onChange={(e) => filterStats(e.target.value)} />
          </label>
        </div>
        {stats && stats.map((country: Stats) => country && (
          <div className="Country">
            <p className="CountryHeading">{country.country_name}</p>
            <Grid fields={['new_deaths', 'deaths', 'new_cases', 'cases', 'total_recovered']} data={country} />
          </div>
        ))}
      </div>
      <div className="Footer">
        <a href="https://noego.io" target="_blank" rel="noopener noreferrer">noego.io</a>&nbsp;|&nbsp;2020
      </div>
    </div>
  );
}

export default App;

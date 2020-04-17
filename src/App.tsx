import React, { useState, useEffect } from 'react';
import corona from './coronavirus.png';
import kofi from './kofi.png';
import noego from './noego.png';
import './App.css';
import { getCasesByCountry, Stats } from './Service'
import { Grid } from './Grid';


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
        <div className="header-content">
          <img src={corona} className="App-logo" alt="logo" />
          <h1 className="heading">Corona Virus Statistics</h1>
        </div>
        <div className="donate">
          <a href="https://ko-fi.com/noego" target="_blank" rel="noopener noreferrer">
            <img src={kofi} className="donate" alt="logo" />
          </a>
        </div>
      </header>
      <div className="Content">
        <div className="Filter">
            <input type="text" className="filter-input" placeholder="filter by country" onChange={(e) => filterStats(e.target.value)} />
        </div>
        {stats && stats.map((country: Stats) => country && country.country_name && (
          <div className="Country">
            <p className="CountryHeading">{country.country_name}</p>
            <Grid fields={['new_deaths', 'deaths', 'new_cases', 'cases', 'total_recovered']} data={country} />
          </div>
        ))}
      </div>
      <div className="Footer">
        <img src={noego} className="noego" alt="logo" />
        <a href="https://noego.io" target="_blank" rel="noopener noreferrer">noego.io</a>&nbsp;@&nbsp;2020
      </div>
    </div>
  );
}

export default App;

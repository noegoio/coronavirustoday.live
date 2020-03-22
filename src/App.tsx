import React, { useState, useEffect } from 'react';
import corona from './coronavirus.png';
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
        {stats && stats.map((country: Stats) => (
          <>
            <h2>{country.country_name}</h2>
            <Grid fields={['cases', 'deaths', 'new_deaths', 'total_recovered']} data={country}/>
          </>
        ))}
      </header>
    </div>
  );
}

export default App;

import axios from "axios"

export type StatsType = {
    countries_stat: Stats[],
    statistic_taken_at: Date
}

export type Stats = {
    country_name: string,
    cases: number,
    deaths: number,
    total_recovered: number,
    new_deaths: number,
    new_cases: number,
    serious_critical: number,
    active_cases: number,
    total_cases_per_1m_population: number
}

export const Labels = {
    country_name: 'Country',
    cases: 'Cases',
    deaths: 'Deaths',
    total_recovered: 'Total Recovered',
    new_deaths:'New Deaths',
    new_cases: 'New Cases',
    serious_critical: 'Serious Critical',
    active_cases: 'Active Cases',
    total_cases_per_1m_population: 'Total Cases per 1m'
}

export async function getCasesByCountry() {
    return await axios({
        "method": "GET",
        "url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
        "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "NJXY7AXooOmshXiPILL9lu0H06Khp1Bsopsjsnpqr7N1NNX2jc"
        }
    })
}


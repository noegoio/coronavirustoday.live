import axios from "axios"

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


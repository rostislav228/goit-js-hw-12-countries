export default function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(r => {
            if (r.ok) {
                return r.json()
            }
        })
        .then(data => data)
}

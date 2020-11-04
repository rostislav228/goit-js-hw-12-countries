export default function fetchCountries(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(r => r.json())
        .then(data => data)
}

const fetchApi = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = countries => {

    const allCountry = countries.map((country) => getCountry(country))
    const displayId = document.getElementById('countries');
    displayId.innerHTML = allCountry.join(' ');
}


const getCountry = country => {
    return `
    <div class="country">
    <h2>${country.name.common}</h2>
    <h3>${country.continents}</h3>
    <img src="${country.flags.png}">
    </div>
    `;
}
fetchApi();
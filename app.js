console.log("HI!")

const getCountryByName = (countryName) => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => response.json())
    .then(data => {
        const nameOfCountry = document.querySelector("#countries")
        const countryData = document.createElement("div")
        countryData.innerHTML = `Country Name: ${data[0].name.common}<br>Country Population: ${data[0].population}`
        nameOfCountry.append(countryData);
    })
}

// getCountryByName("Mexico");

const getAllCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        const nameOfCountry = document.querySelector("#countries");
        data.forEach(country => {
            const countryData = document.createElement("div");
            countryData.innerHTML = `Country Name: ${country.name.common}<br>Country Population: ${country.population}`;
            nameOfCountry.append(countryData);
        });
    });
}

// getAllCountries()


//call message on page load
window.addEventListener("load", getAllCountries);

   



//---------------------------------------------------------------------------------------------------------
// });
// document.getElementById('generate_info')
// .addEventListener('click', () => {getCountryByName("Sweden")});}


// {document.getElementById("country_info");

// console.log(`countryName: ${"Peru"}`);

// document.getElementById("generate_info").addEventListener("click",() => {getCountryByName("Sweden")});

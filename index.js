
let container = document.getElementById("container");

var api = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`

let data = []

fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        data = res.data;
          console.log("data:", data);
        displayData(data);
      });

function displayData(data){
    data.forEach(function (country){
        let div = document.createElement("div");

        let countryName = document.createElement("h1");
        countryName.innerText = country.country;

        let id = document.createElement("p");
        id.innerText = country.id;

        let rank = document.createElement("p");
        rank.innerText = country.Rank;

        let population = document.createElement("p");
        population.innerText = country.population;

        div.append(countryName, rank, population, id);

        container.append(div);
    });
} 


document.getElementById("btn").addEventListener("click", () => {

    fetch(api)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            data = res.data;
            data.sort((a, b) => b.population - a.population);
            container.innerHTML = "";
            displayData(data);
        });
});
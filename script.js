// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
// 1.1. name - miesto pavadinimas (string)
// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

let cities = [
{
    name: "Vilnius",
    population: 500000,
    location: {
    continent: "Europe",
    country: "Lithuania"
    },
    touristAttractions: ["Žvėrynas", "Katedra", "Akropolis", "Seimas", "Landsbergis"],
    isCapital: true
},
{
    name: "Kaunas",
    population: 300000,
    location: {
    continent: "Europe",
    country: "Lithuania"
    },
    touristAttractions: ["Rotušė", "Vytauto bažnyčia", "Kauno pilis", "Maironio kapas", "Arkikatedra"],
    isCapital: false
},
{
    name: "Riga",
    population: 700000,
    location: {
    continent: "Europe",
    country: "Latvia"
    },
    touristAttractions: ["Center", "Beach"],
    isCapital: true
},
{
    name: "Moscow",
    population: 1000000,
    location: {
    continent: "Europe",
    country: "Russia"
    },
    touristAttractions: [],
    isCapital: true
},
{
    name: "Sydney",
    population: 1100000,
    location: {
    continent: "Australia",
    country: "Australia"
    },
    touristAttractions: ["Opera"],
    isCapital: false
},
{
    name: "Rome",
    population: 900000,
    location: {
    continent: "Europe",
    country: "Italy"
    },
    touristAttractions: ["Colosseum", "Pizza", "Castle of the Angel", "Ruins"],
    isCapital: true
},
{
    name: "Paris",
    population: 200000,
    location: {
    continent: "Europe",
    country: "France"
    },
    touristAttractions: ["Ark of Triumph", "Tower", "Mars Fields", "Louvre", "River Seine"],
    isCapital: true
},
{
    name: "Toronto",
    population: 400000,
    location: {
    continent: "North America",
    country: "Canada"
    },
    touristAttractions: ["Tower", "Royal Museum", "Distillery District"],
    isCapital: false
},
{
    name: "Daka",
    population: 1700000,
    location: {
    continent: "Asia",
    country: "Bangladesh"
    },
    touristAttractions: [],
    isCapital: true
},
{
    name: "La Paz",
    population: 990000,
    location: {
    continent: "South America",
    country: "Bolivia"
    },
    touristAttractions: ["Museum", "Basilica", "Valle", "Rocks", "Market", "Parque" ],
    isCapital: false
}
];


// 1.6. Visus miestų masyvų narius išvesti į konsolę.
// 1.6.1. Visų miestų pavadinimis išvesti į konsolę.
// cities.forEach(city => {
//     console.log(city.name);
//     });

// 1.6.2. Visų miestų populiaciją išvesti į konsolę.

// cities.forEach(function(city) {
//     console.log(`${city.name}: ${city.population}`);
// });

// 1.6.3. Visų miestų žemyną išvesti į konsolę.

// cities.forEach(city => {
//     console.log(`${city.name}: ${city.location.continent}`);
// });

// 1.6.4. Visų miestų šalį išvesti į konsolę.

// cities.forEach(city => {
//     console.log(`${city.name}: ${city.location.country}`);
// });

// 1.6.5. Į konsolę išvesti ar miestas yra sostinė, ar ne.

// for (let i = 0; i < cities.length; i++) {
//     let city = cities[i];

//     if (city.isCapital) {
//     console.log(city.name + " is a capital");
//     } else {
//     console.log(city.name + " is not a capital");
//     }
// }

// 1.6.6. Į konsolę išvesti visas miesto lankytinas vietas.

// cities.forEach(city => {
//     console.log(city.name);
//     city.touristAttractions.forEach(attraction => {
//         console.log(`- ${attraction}`);
//     });
// });


// 2. HTML faile sukurti tuščią div elementą, kuriame bus atvaizduoti visi miestai.
// 2.1. Panaudojant ciklą, atvaizduoti visus miestus ekrane pagal nurodytą stilių.

// 3.1. Jeigu miestas yra sostinė, tai:
// 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
// 3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".

// let cityContainer = document.querySelector("#cities");

// function renderCities() {
// cities.forEach((city) => {
//     let cityWrapper = document.createElement("div");
//     cityWrapper.classList.add("city");

//     let cityName = document.createElement("h2");
//     if (city.isCapital) {
//     cityName.textContent = `${city.name} (capital)`;
//     } else {
//     cityName.textContent = city.name;
//     }

//     cityWrapper.appendChild(cityName);

//     if (city.isCapital) {
//     let capitalDescription = document.createElement("p");
//     capitalDescription.textContent = `${city.name} is the capital of ${city.location.country}`;
//     cityWrapper.classList.add("capital");
//     cityWrapper.appendChild(capitalDescription);
//     }

//     if (city.touristAttractions.length > 0) {
//     let attractionsList = document.createElement("ul");
//     city.touristAttractions.forEach((attraction) => {
//         let listItem = document.createElement("li");
//         listItem.textContent = attraction;
//         attractionsList.appendChild(listItem);
//     });
//     cityWrapper.appendChild(attractionsList);
//     }

//     cityContainer.appendChild(cityWrapper);
// });
// }

// renderCities();

// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
// 4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
// 4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
// 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

// let cityContainer = document.querySelector("#cities");

// function renderCities() {
// cities.forEach((city) => {
//     let cityWrapper = document.createElement("div");
//     cityWrapper.classList.add("city");

//     let cityName = document.createElement("h2");
//     if (city.isCapital) {
//     cityName.textContent = `${city.name} (capital)`;
//     } else {
//     cityName.textContent = city.name;
//     }

//     cityWrapper.appendChild(cityName);

    // if (city.isCapital) {
    // let capitalDescription = document.createElement("p");
    // capitalDescription.textContent = `${city.name} is the capital of ${city.location.country}`;
    // cityWrapper.classList.add("capital");
    // cityWrapper.appendChild(capitalDescription);
    // }

//     if (city.touristAttractions.length > 0) {
//     let attractionsList = document.createElement("ul");
//     city.touristAttractions.forEach((attraction) => {
//         let listItem = document.createElement("li");
//         listItem.textContent = attraction;
//         attractionsList.appendChild(listItem);
//     });
// let attractionText = "";
//     if (city.touristAttractions.length === 1) {
//         attractionText = "Main Tourist attraction of";
//     } else {
//         attractionText = "Main Tourist attractions of";
//     }

//     let attractionDescription = document.createElement("p");

//     if (city.touristAttractions.length === 1) {
//         attractionDescription.textContent = `${attractionText} ${city.name} is`;
//     } else {
//         attractionDescription.textContent = `${attractionText} ${city.name} are`;
//     }

//     cityWrapper.appendChild(attractionDescription);
//     cityWrapper.appendChild(attractionsList);
//     }

//     cityContainer.appendChild(cityWrapper);
// });
// }

// renderCities();


// 5. Naudojant tik JavaScript:
// 5.1. Pakeisti visų sostinių teksto spalvą.
// 5.2. Pakeisti kas antro miesto fono spalvą.
// 5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
// 5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

// let cityContainer = document.querySelector("#cities");

// function renderCities() {
//     cities.forEach((city, cityIndex) => { 
//         let cityWrapper = document.createElement("div");
//         cityWrapper.classList.add("city");

//         let cityName = document.createElement("h2");
//         if (city.isCapital) {
//             cityName.textContent = `${city.name} (capital)`;
//         } else {
//             cityName.textContent = city.name;
//         }

//         cityWrapper.appendChild(cityName);

//         if (city.isCapital) {
//             let capitalDescription = document.createElement("p");
//             capitalDescription.textContent = `${city.name} is the capital of ${city.location.country}`;
//             cityWrapper.classList.add("capital");
//             cityWrapper.appendChild(capitalDescription);
//             }

//         if (city.isCapital) {
//             cityName.style.color = "green";
//         }

//         if (cityIndex % 2 === 1) { 
//             cityWrapper.style.backgroundColor = "lightgray";
//         }

//         if (city.touristAttractions.length > 0) {
//             let attractionsList = document.createElement("ul");
//             city.touristAttractions.forEach((attraction, attrIndex) => {
//                 let listItem = document.createElement("li");
//                 listItem.textContent = attraction;

//                 if (attrIndex === 0) {
//                     listItem.style.color = "green";
//                 }

//                 if (city.touristAttractions.length > 3 && attrIndex === city.touristAttractions.length - 1) {
//                     listItem.style.color = "red";
//                 }

//                 attractionsList.appendChild(listItem);
//             });

//             let attractionText = city.touristAttractions.length === 1 ? "Main Tourist attraction of" : "Main Tourist attractions of";

//             let attractionDescription = document.createElement("p");
//             attractionDescription.textContent = `${attractionText} ${city.name} ${city.touristAttractions.length === 1 ? 'is' : 'are'}`;
//             cityWrapper.appendChild(attractionDescription);
//             cityWrapper.appendChild(attractionsList);
//         }

//         cityContainer.appendChild(cityWrapper);
//     });
// }

// renderCities();


// 6. Miestų plotis turi būti 50%.
// 6.1. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%.

let cityContainer = document.querySelector("#cities");

function renderCities() {
    cities.forEach((city, cityIndex) => { 
        let cityWrapper = document.createElement("div");
        cityWrapper.classList.add("city");

        let cityName = document.createElement("h2");
        if (city.isCapital) {
            cityName.textContent = `${city.name} (capital)`;
        } else {
            cityName.textContent = city.name;
        }

        cityWrapper.appendChild(cityName);

        if (city.isCapital) {
            let capitalDescription = document.createElement("p");
            capitalDescription.textContent = `${city.name} is the capital of ${city.location.country}`;
            cityWrapper.classList.add("capital");
            cityWrapper.appendChild(capitalDescription);
            }

        if (city.isCapital) {
            cityName.style.color = "green";
        }

        if (cityIndex % 2 === 1) { 
            cityWrapper.style.backgroundColor = "lightgray";
        }

        if (cityIndex % 2 !== 0) {
            cityWrapper.style.width = '50%';
        }

        if (city.touristAttractions.length > 0) {
            let attractionsList = document.createElement("ul");
            city.touristAttractions.forEach((attraction, attrIndex) => {
                let listItem = document.createElement("li");
                listItem.textContent = attraction;

                if (attrIndex === 0) {
                    listItem.style.color = "green";
                }

                if (city.touristAttractions.length > 3 && attrIndex === city.touristAttractions.length - 1) {
                    listItem.style.color = "red";
                }

                attractionsList.appendChild(listItem);
            });

            let attractionText = city.touristAttractions.length === 1 ? "Main Tourist attraction of" : "Main Tourist attractions of";

            let attractionDescription = document.createElement("p");
            attractionDescription.textContent = `${attractionText} ${city.name} ${city.touristAttractions.length === 1 ? 'is' : 'are'}`;
            cityWrapper.appendChild(attractionDescription);
            cityWrapper.appendChild(attractionsList);
        }

        cityContainer.appendChild(cityWrapper);
    });
}

renderCities();
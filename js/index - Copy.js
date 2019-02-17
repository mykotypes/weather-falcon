const appKey = "c154a7561656648a3f8d9f2f70575ae9";

let searchButton = document.querySelector(".search-btn");
let searchInput = document.querySelector(".search-txt");
let cityName = document.querySelector(".city-name");
let icon = document.querySelector(".icon");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity-div");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  icon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = jsonObject.main.humidity + "%";
}

function httpRequestAsync(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

// city list - Copenhagen

// let cityTitle = document.querySelector(".city-title");
// let theCityCph = "copenhagen";
// let cityTemp = document.querySelector(".city-temp");
// let cityHumidity = document.querySelector(".city-humidity");
// let skyIcon = document.querySelector(".sky-icon");


// let myCityArray = ["copenhagen", "new york", "berlin", "budapest", "sofia", "melbourne"];
// let pasteCity = document.querySelector(".pasteCity");
// for(let i = 0; i < myCityArray.length; i++){

//     console.log("city name: " + myCityArray[i]);
//     cityArray = myCityArray[i];
//     let cityGrabAll = "https://api.openweathermap.org/data/2.5/weather?q=" + cityArray + "&appid="+appKey;
//       httpRequestAsyncCph(cityGrabAll, theResponseCity);
//     pasteCity.innerHTML = "city name: " + myCityArray[i];

//  }

 

 function theResponseCity(response) {
    let jsonObject = JSON.parse(response);
    cityTitle.innerHTML = jsonObject.name;
    skyIcon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTemp.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidity.innerHTML = jsonObject.main.humidity + "%";
  }


// let cityGrab = "https://api.openweathermap.org/data/2.5/weather?q=" + theCityCph + "&appid="+appKey;
//       httpRequestAsyncCph(cityGrab, theResponseCph);

// function theResponseCph(response) {
//     let jsonObject = JSON.parse(response);
//     cityTitle.innerHTML = jsonObject.name;
//     skyIcon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
//     cityTemp.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
//     cityHumidity.innerHTML = jsonObject.main.humidity + "%";
//   }

function httpRequestAsyncCph(url, callback)
{
//   console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}

// List

let myCityArray = ["copenhagen", "new york", "berlin", "budapest", "sofia", "melbourne"];
let weatherLink = "https://api.openweathermap.org/data/2.5/weather?q=";

var linkStr ="";
var cityStr ="";
var iconStr ="";
var tempStr ="";
var humidityStr ="";

var printCityData ="";
var tempvar = "";
 
 myCityArray.forEach(function(myCityArray) {
   linkStr += weatherLink + myCityArray + "&appid=" + appKey;
//    printCityData += '<div>' + linkStr + '</div>';
   printCityData += linkStr;
   
 }); 
 

 console.log(linkStr);

//  document.querySelector(".pasteCity").innerHTML = printCityData;

httpRequestAsyncAll(printCityData, theResponseAll);

function theResponseAll(response) {
    let jsonObject = JSON.parse(response);
    cityTitle.innerHTML = jsonObject.name;
    skyIcon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTemp.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidity.innerHTML = jsonObject.main.humidity + "%";
  }

function httpRequestAsyncAll(url, callback)
{
  console.log("hello");
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}
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

// ------------------ city list - Copenhagen
let cityTitle = document.querySelector(".copenhagen .city-title");
let theCityCph = "copenhagen";
let cityTemp = document.querySelector(".copenhagen .city-temp");
let cityHumidity = document.querySelector(".copenhagen .city-humidity");
let skyIcon = document.querySelector(".copenhagen .sky-icon");

let cityGrab = "https://api.openweathermap.org/data/2.5/weather?q=" + theCityCph + "&appid="+appKey;
      httpRequestAsync(cityGrab, theResponseCph);

function theResponseCph(response) {
    let jsonObject = JSON.parse(response);
    cityTitle.innerHTML = jsonObject.name;
    skyIcon.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTemp.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidity.innerHTML = jsonObject.main.humidity + "%";
  }



// ------------------ city list - New york
let cityTitleNY = document.querySelector(".new-york .city-title");
let theCityNY = "new york";
let cityTempNY = document.querySelector(".new-york .city-temp");
let cityHumidityNY = document.querySelector(".new-york .city-humidity");
let skyIconNY = document.querySelector(".new-york .sky-icon");

let cityGrabNY = "https://api.openweathermap.org/data/2.5/weather?q=" + theCityNY + "&appid="+appKey;
      httpRequestAsync(cityGrabNY, theResponseNY);

function theResponseNY(response) {
    let jsonObject = JSON.parse(response);
    cityTitleNY.innerHTML = jsonObject.name;
    skyIconNY.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTempNY.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidityNY.innerHTML = jsonObject.main.humidity + "%";
}

// ------------------ city list - berlin
let cityTitleBerlin = document.querySelector(".berlin .city-title");
let theCityBerlin = "berlin";
let cityTempBerlin = document.querySelector(".berlin .city-temp");
let cityHumidityBerlin = document.querySelector(".berlin .city-humidity");
let skyIconBerlin = document.querySelector(".berlin .sky-icon");

let cityGrabBerlin = "https://api.openweathermap.org/data/2.5/weather?q=" + theCityBerlin + "&appid="+appKey;
      httpRequestAsync(cityGrabBerlin, theResponseBerlin);

function theResponseBerlin(response) {
    let jsonObject = JSON.parse(response);
    cityTitleBerlin.innerHTML = jsonObject.name;
    skyIconBerlin.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTempBerlin.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidityBerlin.innerHTML = jsonObject.main.humidity + "%";
}

// ------------------ city list - Budapest
let cityTitleBudapest = document.querySelector(".budapest .city-title");
let theCityBudapest = "Budapest";
let cityTempBudapest = document.querySelector(".budapest .city-temp");
let cityHumidityBudapest = document.querySelector(".budapest .city-humidity");
let skyIconBudapest = document.querySelector(".budapest .sky-icon");

let cityGrabBudapest = "https://api.openweathermap.org/data/2.5/weather?q=" + theCityBudapest + "&appid="+appKey;
      httpRequestAsync(cityGrabBudapest, theResponseBudapest);

function theResponseBudapest(response) {
    let jsonObject = JSON.parse(response);
    cityTitleBudapest.innerHTML = jsonObject.name;
    skyIconBudapest.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTempBudapest.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidityBudapest.innerHTML = jsonObject.main.humidity + "%";
}

// ------------------ city list - Sofia
let cityTitleSofia = document.querySelector(".sofia .city-title");
let theCitySofia = "sofia";
let cityTempSofia = document.querySelector(".sofia .city-temp");
let cityHumiditySofia = document.querySelector(".sofia .city-humidity");
let skyIconSofia = document.querySelector(".sofia .sky-icon");

let cityGrabSofia = "https://api.openweathermap.org/data/2.5/weather?q=" + theCitySofia + "&appid="+appKey;
      httpRequestAsync(cityGrabSofia, theResponseSofia);

function theResponseSofia(response) {
    let jsonObject = JSON.parse(response);
    cityTitleSofia.innerHTML = jsonObject.name;
    skyIconSofia.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTempSofia.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumiditySofia.innerHTML = jsonObject.main.humidity + "%";
}

// ------------------ city list - Melbourne
let cityTitleMelbourne = document.querySelector(".melbourne .city-title");
let theCityMelbourne = "melbourne";
let cityTempMelbourne = document.querySelector(".melbourne .city-temp");
let cityHumidityMelbourne = document.querySelector(".melbourne .city-humidity");
let skyIconMelbourne = document.querySelector(".melbourne .sky-icon");

let cityGrabMelbourne = "https://api.openweathermap.org/data/2.5/weather?q=" + theCityMelbourne + "&appid="+appKey;
      httpRequestAsync(cityGrabMelbourne, theResponseMelbourne);

function theResponseMelbourne(response) {
    let jsonObject = JSON.parse(response);
    cityTitleMelbourne.innerHTML = jsonObject.name;
    skyIconMelbourne.src = "https://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    cityTempMelbourne.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
    cityHumidityMelbourne.innerHTML = jsonObject.main.humidity + "%";
}



// local storage


//array to store values
var stores = Array();
//input field text
var inputField = document.getElementById('inputString');
// var inputField = document.querySelector('.inputString');
var nameSave = document.querySelector('.nameSave');
var iconSave = document.querySelector('.icon');
var tempSave = document.querySelector('.tempSave');
var humiditySave = document.querySelector('.humiditySave');


//clear the storage
function clearStorage() {
    //clear the storage
    stores = Array();
    localStorage.clear("database");
    //visually cleared
    document.querySelector('.saveCity').innerHTML = "storage cleared.";
}

// save the string
function saveStatusLocally() {
    //grab the value of the text box
    var stringToSave = inputField.value;
    var divOpen = "<div class='city-single'>";
    var nameStringSave = "<div class='city-title'>" + nameSave.innerHTML + "</div>";
    var iconStringSave = "<span><img src='" + iconSave.src + "' alt='' class='sky-icon'></span>";
    var tempStringSave = "<div class='city-temp'>" + tempSave.innerHTML + "</div>";
    var humidityStringSave = "<div class='city-humidity'>" + humiditySave.innerHTML + "</div>";
    var divClose = "</div>";

    if ((stringToSave == null) || (stringToSave == "")) {
        document.getElementById('write').innerHTML = "nothing to store.";
    } else {
        //push that value to the array
        stores.push(divOpen, nameStringSave, iconStringSave, tempStringSave, humidityStringSave, divClose);
        //clear the input field for visual 
        inputField.value = "";
        document.querySelector('.saveCity').innerHTML = "";
        //print that value into the local storage named database and joing by a non-breaking space
        window.localStorage.setItem("database", stores.join(" "));
        //confirm write
        document.querySelector('.saveCity').innerHTML = "data stored.";
        //clear message after 1s
        setTimeout(function() {
            document.querySelector('.saveCity').innerHTML = "";
        }, 1000);

    }
}

// read the string
function readStatus() {
    //print the value of the local storage "database" key
    if (window.localStorage.getItem("database") == null) {
        document.querySelector('.saveCity').innerHTML = "nothing stored.";
    } else {
        document.querySelector('.saveCity').innerHTML = window.localStorage.getItem("database");
    }
}
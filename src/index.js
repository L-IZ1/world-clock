function updateTime(){
  //freiburg
let selectFreiburg = document.querySelector("#freiburg");
if (selectFreiburg) {
let selectFreiburgDate = selectFreiburg.querySelector(".currentdate");
let selectFreiburgTime=selectFreiburg.querySelector(".time");
let localTimeFreiburg = moment().tz("Europe/Berlin");

selectFreiburgDate.innerHTML=localTimeFreiburg.format("dddd, MMMM Do, YYYY");
selectFreiburgTime.innerHTML=localTimeFreiburg.format("h:mm:ss [<small>]A[</small>]");
}

//Mexico

let selectMexico=document.querySelector("#mexico");
if (selectMexico) {
let selectMexicoDate=selectMexico.querySelector(".currentdate");
let selectMexicoTime=selectMexico.querySelector(".time");
let localTimeMexico = moment().tz("America/Mexico_City");

selectMexicoDate.innerHTML=localTimeMexico.format("dddd, MMMM Do, YYYY");
selectMexicoTime.innerHTML=localTimeMexico.format("h:mm:ss [<small>]A[</small>]");
}

//lons

let selectLons=document.querySelector("#lons");
if (selectLons) {
let selectLonsDate=selectLons.querySelector(".currentdate")
let selectLonsTime=selectLons.querySelector(".time")
let localTimeLons = moment().tz("Europe/Paris");

selectLonsDate.innerHTML=localTimeLons.format("dddd, MMMM Do, YYYY");
selectLonsTime.innerHTML=localTimeLons.format("h:mm:ss [<small>]A[</small>]");
}
}


function displayCity(event) {
let cityTimeZone = event.target.value;

if(cityTimeZone === "current") {
cityTimeZone = moment.tz.guess();
}
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);

let citiesElement=document.querySelector("#cities");
citiesElement.innerHTML =`

 <div class="cities">
        <div class="row">
          <div class="col 6">
            <div class="city">
              <h2>${cityName}</h2>
              <div class="date">
                <h4 class="currentdate">${cityTime.format("dddd, MMMM Do, YYYY")}</h4>
              </div>
            </div>
          </div>
          <div class="col 6">
            <h2 class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</h2>
          </div>
        </div>
        </div>`;
}

updateTime();
setInterval(updateTime,1000);

let selectCity = document.querySelector("#clock");
selectCity.addEventListener("change", displayCity);

function refresh(){
        window.location.reload("Refresh")
      };

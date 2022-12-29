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
let selectMexicoDate=selectMexico.querySelector(".date");
let selectMexicoTime=selectMexico.querySelector(".time");
let localTimeMexico = moment().tz("America/Mexico_City");

selectMexicoDate.innerHTML=localTimeMexico.format("dddd, MMMM Do, YYYY");
selectMexicoTime.innerHTML=localTimeMexico.format("h:mm:ss [<small>]A[</small>]");
}

//lons

let selectLons=document.querySelector("#lons");
if (selectLons) {
let selectLonsDate=selectLons.querySelector(".date")
let selectLonsTime=selectLons.querySelector(".time")
let localTimeLons = moment().tz("Europe/Lons-le-Saunier");

selectLonsDate.innerHTML=localTimeLons.format("dddd, MMMM Do, YYYY");
selectLonsTime.innerHTML=localTimeLons.format("h:mm:ss [<small>]A[</small>]");
}
}


function displayCity(event) {
let timeZone = event.target.value;

if(timeZone === "current"){
timeZone = moment.tz.guess();
}
let cityName = timeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(timeZone);

let citiesElement=document.querySelector("#cities");
citiesElement.innerHTML =`

 <div id="cities" class="cities">
        <div class="row" id="freiburg">
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

function updateTime(){
let selectFreiburg=document.querySelector("#freiburg");
if (selectFreiburg) {
let selectFreiburgDate=selectFreiburg.querySelector(".date")
let selectFreiburgTime=selectFreiburg.querySelector(".time")
selectFreiburgDate.innerHTML=moment().format("dddd, MMMM Do, YYYY");
selectFreiburgTime.innerHTML=moment().tz("Europe/Berlin").format("h:mm:ss [<small>]A[</small>]");
}
let selectParis=document.querySelector("#paris");
if (selectParis){
let selectParisDate=selectParis.querySelector(".date")
let selectParisTime=selectParis.querySelector(".time")
selectParisDate.innerHTML=moment().format("dddd, MMMM Do, YYYY");
selectParisTime.innerHTML=moment().tz("Europe/Paris").format("h:mm:ss [<small>]A[</small>]");
}

let selectMexico=document.querySelector("#mexico");
if (selectMexico){
let selectMexicoDate=selectMexico.querySelector(".date")
let selectMexicoTime=selectMexico.querySelector(".time")
let localTime = moment().tz("America/Mexico_City");

selectMexicoDate.innerHTML=localTime.format("dddd, MMMM Do, YYYY");
selectMexicoTime.innerHTML=localTime.format("h:mm:ss [<small>]A[</small>]");
}

let selectLons=document.querySelector("#lons");
if (selectLons){
let selectLonsDate=selectLons.querySelector(".date")
let selectLonsTime=selectLons.querySelector(".time")
selectLonsDate.innerHTML=moment().format("dddd, MMMM Do, YYYY");
selectLonsTime.innerHTML=moment().tz("Europe/Lons-le-Saunier").format("h:mm:ss [<small>]A[</small>]");
}
}

updateTime();
setInterval(updateTime,1000);

function displayCity(event) {
let timeZone = event.target.value;
let cityName=event.target.options[event.target.selectedIndex].text;
let cityTime=moment().tz(timeZone);

let citiesElement=document.querySelector("#cities");

 if (timeZone.length >0){
        citiesElement.innerHTML =`<div id="cities">
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
            <div class="time">  
         <h2>${cityTime.format("h:mm:ss [<small>]A[</small>]")}</h2>
            </div>
          </div>
        </div>
        </div>`;
        }else{alert("hello")};}
      

// citiesElement.innerHTML=`<div id="cities">
//         <div class="row" id="freiburg">
//           <div class="col 6">
//             <div class="city">
//               <h2>${cityName}</h2>
//               <div class="date">
//                 <h4 class="currentdate">${cityTime.format("MMMM	Do YYYY")}</h4>
//               </div>
//             </div>
//           </div>
//           <div class="col 6">
//             <div class="time">
//               <h2>${cityTime.format("h:mm:ss A")}</h2>
//             </div>
//           </div>
//         </div>
//         </div>`;
//         }
      

let selectCity = document.querySelector("#clock");
selectCity.addEventListener("change", displayCity);

function refresh(){
        window.location.reload("Refresh")
      };

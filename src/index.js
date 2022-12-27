function updateTime(){
let selectFreiburg=document.querySelector("#freiburg");
let selectFreiburgDate=selectFreiburg.querySelector(".date")
let selectFreiburgTime=selectFreiburg.querySelector(".time")
selectFreiburgDate.innerHTML=moment().format("dddd, MMMM Do YYYY");
selectFreiburgTime.innerHTML=moment().tz("Europe/Berlin").format("h:mm:ss A");

}
updateTime();
setInterval(updateTime,1000);


    //   function displayDateTime(event) {
    //     let Time = moment()
    //       .tz(event.target.value)
    //       .format("h:mm A");
    //     let Date = moment()
    //       .tz(event.target.value)
    //       .format("dddd, MMMM Do YYYY");


    //     if (event.target.value >0) {
    //       {Time} ;
    //     }
    //   }

    //   let selectCity = document.querySelector("#cities");
    //   selectCity.addEventListener("change", displayDateTime);

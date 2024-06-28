const body= document.querySelector("body");
const btn= document.querySelector(".button-8");
const cardchange= document.querySelector(".card");
const mainactive= document.querySelector(".search");
const searchbtn= document.querySelector(".locationsearch");
const locationinput= document.querySelector(".location");
const Get_Detailed_Infromation= document.querySelector(".Get-Detailed-Infromation");
const goto2nd= document.querySelector(".goto2nd")

// get all content from screen
const onscreenregion= document.querySelector(".onscreenregion")
const onscreenlocationjs= document.querySelector(".onscreenlocation")
const onscreentemp= document.querySelector(".onscreentemp")
const onscreenfeelslike= document.querySelector(".onscreenfeelslike")
const onscreenicon= document.querySelector(".onscreenicon");
const onscreentext= document.querySelector(".onscreentext")
const windhumiditypressurebox= document.querySelector(".windhumiditypressurebox")
const onscreenwind_kph= document.querySelector(".onscreenwind_kph");
const onscreenhumidity= document.querySelector(".onscreenhumidity");
const onscreenpressure_mb= document.querySelector(".onscreenpressure_mb");
const onscreenheatIndex_c = document.querySelector(".onscreenheatindex_c");
const onscreendewpoint_c= document.querySelector(".onscreendewpoint_c");
const onscreenco = document.querySelector(".onscreenco");
const onscreenwind_degree = document.querySelector(".onscreenwind_degree");
const onscreenno2 = document.querySelector(".onscreenno2");
const onscreeno3 = document.querySelector(".onscreeno3");
const onscreenpm2_5 = document.querySelector(".onscreenpm2_5");
const onscreenpm10 = document.querySelector(".onscreenpm10");
const onscreenso2 = document.querySelector(".onscreenso2");
const onscreenuv = document.querySelector(".onscreenuv");
const onscreengbdefraindex= document.querySelector(".onscreengbdi");
const statushi= document.querySelector(".statushi");
const statusdp = document.querySelector(".statusdp");
const statusco = document.querySelector(".statusco");
const statusno2 = document.querySelector(".statusno2");
const statuso3 = document.querySelector(".statuso3");
const statuspm25 = document.querySelector(".statuspm25");
const statuspm10 = document.querySelector(".statuspm10");
const statusso2 = document.querySelector(".statusso2");
const statusuv = document.querySelector(".statusuv");
const statusgbdin = document.querySelector(".statusgbdin");


const mainscreencontent= document.querySelectorAll(".mainscreencontent");
const mainscreencontent2= document.querySelector(".mainscreencontent2");
const mainscreencontent3= document.querySelector(".mainscreencontent3");
const mainscreencontent4= document.querySelector(".mainscreencontent4");
const mainscreencontent5= document.querySelector(".mainscreencontent5");
const mainscreencontent6= document.querySelector(".mainscreencontent6");
const mainscreencontent7= document.querySelector(".mainscreencontent7");
const mainscreencontent8= document.querySelector(".mainscreencontent8");
//get all content from screen end


const weatherapi="http://api.weatherapi.com/v1/current.json?key=5e9a0ca2681a4429b4b100332242306&q=greator noida&aqi=yes";


btn.addEventListener("click" ,()=>{
    console.log("clicked");
   body.style.backgroundImage= "url('mainbg.png')";

  console.log("card is clicked");
cardchange.style.transform= "translatey(-500px)";

setTimeout(() => {
  cardchange.style.display="none";
}, 340);
setTimeout(()=>{
  mainactive.style.display="flex";
}, 350);  
setTimeout(()=>{
  onscreenlocationjs.style.display="flex";
},340)

Get_Detailed_Infromation.addEventListener("click",()=>{
  setTimeout(()=>{mainscreencontent8.style.display="flex";},340);
  setTimeout(()=>{mainscreencontent7.style.display="none";},340)
  setTimeout(()=>{Get_Detailed_Infromation.style.display="none";},340)
  setTimeout(()=>{goto2nd.style.display="flex"},340);
})
//for 3rd page to back 2 nd page
const c=1;
goto2nd.addEventListener("click",()=>{
  setTimeout(()=>{mainscreencontent8.style.display="none";},340);
  setTimeout(()=>{mainscreencontent7.style.display="flex";},340)
  setTimeout(()=>{Get_Detailed_Infromation.style.display="flex";},340)
  setTimeout(()=>{goto2nd.style.display="none"; },340)
})

///selecting maincontentonscreen and doing it to flex 
setTimeout(()=>{mainscreencontent.style.display="flex";},340)
setTimeout(()=>{mainscreencontent2.style.display="flex";},340)
setTimeout(()=>{mainscreencontent3.style.display="flex";},340)
setTimeout(()=>{mainscreencontent4.style.display="flex";},340)
setTimeout(()=>{mainscreencontent5.style.display="flex";},340)
setTimeout(()=>{mainscreencontent6.style.display="flex";},340)
setTimeout(()=>{mainscreencontent7.style.display="flex";},340)

//////////////////////////////////////////
});

searchbtn.addEventListener("click",async()=>{
  console.log("searchclicked");
  let inputlocation= locationinput.value;

  console.log(inputlocation);

   setTimeout(()=>{goto2nd.style.display="none"},340);
   setTimeout(()=>{mainscreencontent8.style.display="none";},340);
   setTimeout(()=>{mainscreencontent7.style.display="flex";},340);
  setTimeout(() =>{ Get_Detailed_Infromation.style.display="flex";},340);

  // inputlocation is the input location to get the data//
let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=5e9a0ca2681a4429b4b100332242306&q=${inputlocation}&aqi=yes`);
let weatherdata = await response.json();
 console.log(weatherdata);

let region= weatherdata.location.region;
let searchedlocation= weatherdata.location.name;
let currenttime= weatherdata.location.localtime;
let updateimg= weatherdata.current.condition.icon;
let conditiontext= weatherdata.current.condition.text;
let co=weatherdata.current.air_quality.co;
let gndindex=weatherdata.current.air_quality.gb_defra_index;
let no2=weatherdata.current.air_quality.no2;
let o3=weatherdata.current.air_quality.o3;
let pm2_5=weatherdata.current.air_quality.pm2_5;
let pm10=weatherdata.current.air_quality.pm10;
let so2=weatherdata.current.air_quality.so2;
let temp_c= weatherdata.current.temp_c;
let feelslike_c= weatherdata.current.feelslike_c;
let icon= weatherdata.current.condition.icon;
let text= weatherdata.current.condition.text;
let wind_kph= weatherdata.current.wind_kph;
let gbdefraindex = weatherdata.current.air_quality['gb-defra-index'];

let wind_dir= weatherdata.current.wind_dir;
let humidity= weatherdata.current.humidity;
let pressure_mb= weatherdata.current.pressure_mb;

let uv = weatherdata.current.uv;
let dewpoint_c = weatherdata.current.dewpoint_c;
let is_day = weatherdata.current.is_day;
let gust_kph = weatherdata.current.gust_kph;
let heatindex_c = weatherdata.current.heatindex_c;
let wind_degree = weatherdata.current.wind_degree;



  //puting all the content from api to screen
  onscreenlocationjs.innerHTML= inputlocation;
 onscreenregion.innerHTML=`Region: ${region}`;
onscreentemp.innerHTML=`${temp_c} °C `;
onscreenfeelslike.innerHTML=`Feels Like: ${feelslike_c} °C`;
onscreenicon.style.backgroundImage=  `url(${icon})`;
onscreentext.innerHTML=text;
onscreenwind_kph.innerHTML=`${wind_kph}kph ${wind_dir}`;
onscreenhumidity.innerHTML=`${humidity} %`;
onscreenpressure_mb.innerHTML=`${pressure_mb} mb`;
onscreengbdefraindex.innerHTML=gbdefraindex;

onscreenheatIndex_c.innerHTML=heatindex_c;
onscreendewpoint_c.innerHTML=`${dewpoint_c} °C`;
onscreenco.innerHTML=`${co} ppbb`;
onscreenwind_degree.innerHTML=`${wind_degree}°`;
onscreenno2.innerHTML=`${no2} µg/m³`;
onscreeno3 .innerHTML=`${o3} µg/m³`;
onscreenpm2_5.innerHTML=pm2_5;
onscreenpm10.innerHTML=pm10;
onscreenso2.innerHTML=`${so2} µg/m³`;
onscreenuv .innerHTML=uv;



let coStatus = '';

if (co <= 2) {
  coStatus = 'Very Good';
  
} else if (co <= 4) {
  coStatus = 'Good';
} else if (co <= 10) {
  coStatus = 'Moderate';
} else if (co <= 17) {
  coStatus = 'Bad';
} else if (co <= 34) {
  coStatus = 'Very Bad';
} else {
  coStatus = 'Hazardous';

}
// statusco.innerHTML=coStatus;

let gndindexStatus = '';

if (gbdefraindex <= 1) {
  gndindexStatus = 'Very Good';
} else if (gbdefraindex <= 3) {
  gndindexStatus = 'Good';
} else if (gbdefraindex <= 6) {
  gndindexStatus = 'Moderate';
} else if (gbdefraindex <= 9) {
  gndindexStatus = 'Bad';
} else if (gbdefraindex <= 10) {
  gndindexStatus = 'Very Bad';
} else {
  gndindexStatus = 'Hazardous';
}

statusgbdin.innerHTML=gndindexStatus ;


let no2Status = '';

if (no2 <= 40) {
  no2Status = 'Very Good';
} else if (no2 <= 100) {
  no2Status = 'Good';
} else if (no2 <= 200) {
  no2Status = 'Moderate';
} else if (no2 <= 400) {
  no2Status = 'Bad';
} else if (no2 <= 600) {
  no2Status = 'Very Bad';
} else {
  no2Status = 'Hazardous';
}
statusno2.innerHTML=no2Status;


let o3Status = '';

if (o3 <= 50) {
  o3Status = 'Very Good';
} else if (o3 <= 100) {
  o3Status = 'Good';
} else if (o3 <= 168) {
  o3Status = 'Moderate';
} else if (o3 <= 240) {
  o3Status = 'Bad';
} else if(o3<=748){
  o3Status = 'Very Bad';
} else {
  o3Status = 'Hazardous';
}
statuso3.innerHTML=o3Status;

let pm2_5Status = '';

if (pm2_5 <= 10) {
  pm2_5Status = 'Very Good';
} else if (pm2_5 <= 25) {
  pm2_5Status = 'Good';
} else if (pm2_5 <= 50) {
  pm2_5Status = 'Moderate';
} else if (pm2_5 <= 75) {
  pm2_5Status = 'Bad';
} else if (pm2_5 <= 100) {
  pm2_5Status = 'Very Bad';
} else {
  pm2_5Status = 'Hazardous';
}
statuspm25.innerHTML=pm2_5Status;

let pm10Status ='';

if (pm10 <= 20) {
  pm10Status = 'Very Good';
} else if (pm10 <= 50) {
  pm10Status = 'Good';
} else if (pm10 <= 100) {
  pm10Status = 'Moderate';
} else if (pm10 <= 150) {
  pm10Status = 'Bad';
} else if (pm10 <= 200) {
  pm10Status = 'Very Bad';
} else {
  pm10Status = 'Hazardous';
}
statuspm10.innerHTML=pm10Status;

let so2Status = '';

if (so2 <= 20) {
  so2Status = 'Very Good';
} else if (so2 <= 80) {
  so2Status = 'Good';
} else if (so2 <= 250) {
  so2Status = 'Moderate';
} else if (so2 <= 350) {
  so2Status = 'Bad';
} else if (so2 <= 500) {
  so2Status = 'Very Bad';
} else {
  so2Status = 'Hazardous';
}
statusso2.innerHTML=so2Status;

let uvStatus;

  if (uv <= 2) {
    uvStatus = 'Low';
  } else if (uv <= 5) {
    uvStatus = 'Moderate';
  } else if (uv <= 7) {
    uvStatus = 'High';
  } else if (uv <= 10) {
    uvStatus = 'Very High';
  } else {
    uvStatus = 'Extreme';
  }
statusuv.innerHTML=uvStatus;

let heatIndexStatus;

if (heatindex_c< 27) {
  heatIndexStatus = 'Normal';
} else if (heatindex_c < 32) {
  heatIndexStatus = 'Caution';
} else if (heatindex_c < 41) {
  heatIndexStatus = 'Extreme Caution';
} else if (heatindex_c < 54) {
  heatIndexStatus = 'Danger';
} else {
  heatIndexStatus = 'Extreme Danger';
}
statushi.innerHTML=heatIndexStatus;


});





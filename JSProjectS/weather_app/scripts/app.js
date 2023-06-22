const cityForm=document.querySelector('form');
const card=document.querySelector('.card');
const details=document.querySelector('.details');
const time=document.querySelector('img.time');
const icon=document.querySelector('.icon img');
const body=document.querySelector('body');
const updateCity = async (city) => {
     const cityDets=await getcity(city);
     const weather= await getweather(cityDets.Key);
     return{ cityDets,weather};
};
cityForm.addEventListener('submit',e=>
{
    e.preventDefault();
    const city= cityForm.city.value.trim();
    cityForm.reset();
    updateCity(city)
    // .then(data=>console.log(data))
    .then(data=>updateUi(data))
    .catch(err=> console.log(err));
    
})


const updateUi=(data)=>
{
 const{cityDets,weather}=data;

 details.innerHTML=`<h3>${cityDets.EnglishName}</h3>
 <div>${weather.WeatherText}</div>
 <div>
   <span>${weather.Temperature.Metric.Value}</span>
   <span>&deg;C</span>
 </div>`;
const iconsrc=`img/icons/icons/${weather.WeatherIcon}.svg`;
icon.setAttribute('src',iconsrc);
 let timesrc=null;
 if(weather.IsDayTime)
 {
  timesrc='img/day.svg'
  body.style.background="#FCC981";

 }
 else{
  timesrc='img/night.svg'
  body.style.background="#4C4E52";
 }
 time.setAttribute('src',timesrc);
 if(card.classList.contains('none')){
    card.classList.remove('none');
 }
}

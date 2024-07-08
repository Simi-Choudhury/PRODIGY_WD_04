var city=document.getElementById('city');
var type=document.getElementById('type');
var temp=document.getElementById('temp');
var image=document.getElementById('img');
var input=document.getElementById('inp');
var humidity=document.getElementById('humidity');
var wind=document.getElementById('wind');
var API_key="ab0b16d5eadad50a27476971b739b3b2";
var data;
var getData;
var jsonData;
var details=document.getElementById('details');

data=async function(search)
{
    getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`);
    jsonData=await getData.json();
    console.log(getData);
     
    console.log(jsonData);
    console.log(jsonData.name);
    console.log(data);
    if(jsonData.cod==400)
    {
        alert("Please Enter Location");
        image.src="error1.png";
        city.innerHTML="";
        temp.innerHTML="";
         type.innerHTML="";
         humidity.innerHTML="";
        wind.innerHTML="";
        details.innerHTML="";
    }

    if(jsonData.cod==404)
        {
            alert("Please Enter Valid Location");
            image.src="error2.png";
            city.innerHTML="";
            temp.innerHTML="";
             type.innerHTML="";
             humidity.innerHTML="";
            wind.innerHTML="";
            details.innerHTML="";
            input.value="";
        }

    city.innerHTML=search;
    temp.innerHTML=Math.round(jsonData.main.temp)+"°C";
    type.innerHTML=jsonData.weather[0].main;
    humidity.innerHTML=Math.round(jsonData.main.humidity)+"%";
    wind.innerHTML=Math.round(jsonData.wind.speed)+"km/h";
    details.style.display="flex";
    
    
    if(type.innerHTML == "Clouds")
        {
            image.src="clouds.png";
        }
    else if(type.innerHTML == "Clear")
    {
        image.src="clear.png";
    }
    else if(type.innerHTML == "Rain")
    {
        image.src="rain.png";
    }
    else if(type.innerHTML=="Dizzle")
    {
        image.src="dizzle.png";
    }
    else if(type.innerHTML=="Wind")
    {
        image.src="wind.png";
    }
    else if(type.innerHTML=="Snow")
    {
        image.src="snow.png";
    }
    else if(type.innerHTML=="Haze")
    {
        image.src="haze.png";
    }
    else if(type.innerHTML=="Humidity")
    {
        image.src="humidity.png";
    }
    else if(type.innerHTML=="Storm")
    {
        image.src="storm.png";
    }
    else if(type.innerHTML=="Mist")
        {
            image.src="mist.png";
        }    
        input.value="";
}

function srh()
{
    search=input.value;
    data(search);
}
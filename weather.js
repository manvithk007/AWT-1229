async function weather(){
    let cityname = document.getElementById("test");
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname.value+"&appid=1e72bafc170a33ca3c53b00408f6b167";
    console.log();
    const resp = await fetch(url);
    let data = await resp.json();
    console.log(data);
    let {main : {temp,temp_min,temp_max}} = data;
    console.log("temp : " +temp);
    console.log("temp_min : " +temp_min);
    console.log("temp_max : " +temp_max);
 
}

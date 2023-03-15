function script() {
    const script = document.createElement("script");
    script.textContent = `
    function perform() {
        var name =document.getElementById("location").value;
        name='https://api.openweathermap.org/data/2.5/weather?q='+name+'&APPID=95f2b8374e72ed31ef029fea254c226a'
        fetch(name)
            .then(response => response.json())
            .then(data => weather(data))
            .catch(function(err){
                if(err=="TypeError: Cannot read properties of undefined (reading 'temp')"){
                    alert("Enter Valid Location")
                }
                else{
                    alert(err)
                }
                
            })
    }
    function weather(data) {
        const temp = Math.round(data.main.temp - 273);
        const place = data.name;
        const humidity = data.main.humidity;
        const speed = data.wind.speed;
        const mode = data.weather[0].description;
        const main = document.getElementById("result");
        while(main.firstChild){
            main.firstChild.remove()
        };
        const div = document.createElement("div");
        const h2 = document.createElement("h1");
        const h3 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        h2.textContent = place;
        h3.textContent = temp + " °C";
        p1.textContent = "Humidity : " + humidity+" %";
        p2.textContent = "Wind : " + speed + " km/h";
        p3.textContent = "Climate : " + mode
        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.style = "display:block;padding:3%;background:rgba(255, 255, 255, .15) ;color:honeydew;text-align:center;backdrop-filter: blur(10px); border-radius: 15px;";
        main.style="padding: 10px;"
        main.appendChild(div);
    }`


    return script;
} export { script }
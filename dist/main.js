(()=>{"use strict";const e=document.getElementById("content");e.style="display: grid;height: 100vh;grid-template-rows: 1fr 7fr 1fr;",e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1"),n=document.createElement("img"),d=document.createElement("div");return t.textContent="Weather App",n.src="https://raw.githubusercontent.com/Reddyveerendra/Weather-App/main/image/header.png",n.alt="weather.img",d.appendChild(n),d.appendChild(t),d.style="display: flex;height: auto;align-items: center;justify-content: center;background: black;gn-items: center;justify-content: center;",n.style="height:auto;",t.style="color: rgb(254 254 255);",e.appendChild(d),e}()),e.appendChild(function(){const e=document.createElement("main"),t=document.createElement("div"),n=document.createElement("input"),d=document.createElement("input"),a=document.createElement("form");return a.appendChild(n),a.appendChild(d),e.appendChild(a),n.id="location",n.placeholder="Enter Place  Name",n.type="text",d.value="Search",d.type="button",a.style="gap: 10px; display: flex; height: fit-content;",e.style="background: url(https://raw.githubusercontent.com/Reddyveerendra/Weather-App/main/image/main.jpg);display: grid;grid-template-rows: 1fr 13fr;padding: 25px;justify-content: center;background-repeat: round;",d.style="background:#1E212D;color:white",d.setAttribute("onclick","perform()"),e.appendChild(t),t.id="result",t.style="padding:7%;",e}()),e.appendChild(function(){const e=document.createElement("footer");e.style="text-align: center; color: rgb(254 254 255); background-color: black";const t=document.createElement("a");return t.href="https://github.com/Reddyveerendra",t.style="color: rgb(254 254 255); font-size: larger;",t.textContent="Created by Reddy Veerendra",e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("script");return e.textContent='\n    function perform() {\n        var name =document.getElementById("location").value;\n        name=\'https://api.openweathermap.org/data/2.5/weather?q=\'+name+\'&APPID=95f2b8374e72ed31ef029fea254c226a\'\n        fetch(name)\n            .then(response => response.json())\n            .then(data => weather(data))\n            .catch(function(err){\n                if(err=="TypeError: Cannot read properties of undefined (reading \'temp\')"){\n                    alert("Enter Valid Location")\n                }\n                else{\n                    alert(err)\n                }\n                \n            })\n    }\n    function weather(data) {\n        const temp = Math.round(data.main.temp - 273);\n        const place = data.name;\n        const humidity = data.main.humidity;\n        const speed = data.wind.speed;\n        const mode = data.weather[0].description;\n        const main = document.getElementById("result");\n        while(main.firstChild){\n            main.firstChild.remove()\n        };\n        const div = document.createElement("div");\n        const h2 = document.createElement("h1");\n        const h3 = document.createElement("h2");\n        const p1 = document.createElement("p");\n        const p2 = document.createElement("p");\n        const p3 = document.createElement("p");\n        h2.textContent = place;\n        h3.textContent = temp + " °C";\n        p1.textContent = "Humidity : " + humidity+" %";\n        p2.textContent = "Wind : " + speed + " km/h";\n        p3.textContent = "Climate : " + mode\n        div.appendChild(h2);\n        div.appendChild(h3);\n        div.appendChild(p1);\n        div.appendChild(p2);\n        div.appendChild(p3);\n        div.style = "display:block;padding:3%;background:rgba(255, 255, 255, .15) ;color:honeydew;text-align:center;backdrop-filter: blur(10px); border-radius: 15px;";\n        main.style="padding: 10px;"\n        main.appendChild(div);\n    }',e}())})();

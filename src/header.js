function header() {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    const img = document.createElement("img");
    const div = document.createElement("div");
    h1.textContent = "Weather App";
    img.src = "https://raw.githubusercontent.com/Reddyveerendra/Weather-App/main/image/header.png";
    img.alt = "weather.img";
    div.appendChild(img);
    div.appendChild(h1);
    div.style = "display: flex;height: 58px;align-items: center;justify-content: center;background: black;gn-items: center;justify-content: center;"
    img.style = "height:61px;"
    h1.style = "color: rgb(254 254 255);"
    header.appendChild(div);
    return header;
}
export { header };
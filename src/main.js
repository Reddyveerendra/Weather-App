function main() {
    const main = document.createElement("main");
    const result = document.createElement("div");
    const input = document.createElement("input");
    const button = document.createElement("input");
    const from = document.createElement("form");
    from.appendChild(input);
    from.appendChild(button);
    main.appendChild(from);
    input.id = "location";
    input.placeholder = "Enter Place  Name";
    input.type = "text";
    button.value = "Search";
    button.type = "button";
    from.style = "gap: 10px; display: flex; height: fit-content;"
    main.style = "background: url(https://raw.githubusercontent.com/Reddyveerendra/Weather-App/main/image/main.jpg);display: grid;grid-template-rows: 1fr 13fr;padding: 25px;justify-content: center;background-repeat: round;";
    button.style = "background:#1E212D;color:white";
    button.setAttribute("onclick", "perform()")
    main.appendChild(result);
    result.id = "result";
    result.style = "padding:7%;"
    return main;
}
export { main };
function footer() {
    const footer = document.createElement("footer");
    footer.style = "text-align: center; color: rgb(254 254 255); background-color: black";
    const a = document.createElement("a");
    a.href = "https://github.com/Reddyveerendra";
    a.style = "color: rgb(254 254 255); font-size: larger;";
    a.textContent = "Created by Reddy Veerendra";
    footer.appendChild(a);
    return footer;
}
export { footer };
function footer() {
    const footer = document.createElement("footer");
    footer.style = "text-align: center; color: #6870E0; background-color: #1E212D";
    const a = document.createElement("a");
    a.href = "https://github.com/Reddyveerendra";
    a.style = "color: #6870E0; font-size: larger;";
    a.textContent = "Created by Reddy Veerendra";
    footer.appendChild(a);
    return footer;
}
export { footer };
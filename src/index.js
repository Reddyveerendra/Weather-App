import { header } from "./header";
const content = document.getElementById("content");
const main = document.createElement("main");
const result = document.createElement("div");
content.appendChild(header());
content.appendChild(main);
main.appendChild(result);
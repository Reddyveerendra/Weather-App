import { header } from "./header";
import { footer } from "./footer";
import { main } from "./main";
import { script } from "./script";
const content = document.getElementById("content");
content.style = "display: grid;height: 100vh;grid-template-rows: 1fr 7fr 1fr;"
content.appendChild(header());
content.appendChild(main());
content.appendChild(footer());
content.appendChild(script())

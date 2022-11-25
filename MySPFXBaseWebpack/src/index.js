"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/styles.css");
const camry_jpg_1 = require("./images/camry.jpg");
let dspl = document.getElementById("dspl");
dspl.innerText = "Hello Webpak with JS, CSS and Image packing";
dspl.setAttribute("class", "sometxt");
let imageOnPage = document.createElement("img");
imageOnPage.setAttribute("src", camry_jpg_1.default);
imageOnPage.setAttribute("height", "250");
imageOnPage.setAttribute("width", "500");
imageOnPage.classList.add("rotate");
let pageDiv = document.createElement("div");
pageDiv.setAttribute('id', "randomdiv");
pageDiv.appendChild(imageOnPage);
document.body.appendChild(pageDiv);
for (let index = 1; index < 10; index++) {
    let pageDivBoxa = "pageDivBox" + index.toString();
    let divObject = document.createElement("div");
    divObject.setAttribute('id', pageDivBox);
    divObject.classList.add("colorBox" + index.toString());
    document.body.append(divObject);
}
//# sourceMappingURL=index.js.map
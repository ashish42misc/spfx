import './styles/styles.css';
import camryImage from './images/camry.jpg';

//Set CSS
let dspl = document.getElementById("dspl");
dspl.innerText = "Hello Webpak with JS, CSS and Image packing";
dspl.setAttribute("class","sometxt");

//Embed Image
let imageOnPage = document.createElement("img");
imageOnPage.setAttribute("src",camryImage);
imageOnPage.setAttribute("height","250");
imageOnPage.setAttribute("width","500");
imageOnPage.classList.add("rotate");

//Place image on DIV
let pageDiv = document.createElement("div");
pageDiv.setAttribute('id',"randomdiv");
pageDiv.appendChild(imageOnPage);
document.body.appendChild(pageDiv);


//Place a few divs 0n the page
for (let index = 1; index < 10; index++) {
    let pageDivBox = "pageDivBox" + index.toString();
    let divObject = document.createElement("div");
    divObject.setAttribute('id',pageDivBox);
    divObject.classList.add("colorBox"+ index.toString())
    document.body.append(divObject);
}


import icon from './icons8-restaurant-96.png';
import { createHomeSection } from "./modules/home";
import { createMenuSection } from './modules/menu';
import { createContactSection } from './modules/contact';
import { createBtn, createLogo, createThreePageTabs, createHeadertag, initializePageStructure, setupNav } from "./elementCreator.js";

// console.log("Hi! I am called from index.js!");




const mainContainer = document.querySelector('#content');

// Create the NAV portion
const logo = createLogo(icon);
const restaurantName = createHeadertag('h3', "Edang's Barbecue House")
const nav = setupNav(logo, restaurantName);

// Create the Tab buttons for each section with a div container parent
let homeBtn, contactBtn, menuBtn;
homeBtn = createBtn('tab-btn', 'HOME');
contactBtn = createBtn('tab-btn', 'CONTACT');
menuBtn = createBtn('tab-btn', 'MENU');
const pageTabsPortion = createThreePageTabs(homeBtn, menuBtn, contactBtn);

const displayContent = document.createElement('div');

mainContainer.append(nav, pageTabsPortion, displayContent);





// START OF EVENT LISTENER LOGIC
const tabButtons = document.querySelectorAll(".tab-btn");

const mainContainerHasChild = () => mainContainer.hasChildNodes();
const clearMainContainer = () => {
    if (mainContainerHasChild()) {
        //empties the main container
        displayContent.innerHTML = "";
    }
}


const loadComponent = (e) => {

    // USE THE BUTTONS TEXT CONTENT TO MATCH WHAT TYPE OF MODULE TO BE LOADED
    const tabClicked = e.target.textContent;

    if (tabClicked == "HOME") {
        clearMainContainer();
        displayContent.appendChild(createHomeSection());

    } else if (tabClicked == "MENU") {
        clearMainContainer();
        displayContent.appendChild(createMenuSection());

    } else if (tabClicked == "CONTACT") {
        clearMainContainer();
        displayContent.appendChild(createContactSection())
    }
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', loadComponent);
});

import './style.css';
import { createHomeSection } from "./modules/home";
import { createMenuSection } from './modules/menu';
import { createContactSection } from './modules/contact';
import { loadInitialPage } from './initialpageloader';
import { createBtn, createLogo, createThreePageTabs, createHeadertag, setupNav } from "./elementCreator.js";


// this initializes the page structure
const mainContainer = document.querySelector('#content');
const displayContent = document.createElement('div');
displayContent.classList.add('display-area')


// Create background div


loadInitialPage(mainContainer);


mainContainer.appendChild(displayContent);

// INITIALIZE LANDING SECTION WHICH IS HOME
displayContent.appendChild(createHomeSection());



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

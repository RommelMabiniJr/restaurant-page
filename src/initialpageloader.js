import icon from './output-onlinepngtools.png';
import { createBtn, createLogo, createThreePageTabs, createHeadertag, setupNav } from "./elementCreator.js";

export const loadInitialPage = (mainContainer) => {
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

    mainContainer.append(nav, pageTabsPortion);
}


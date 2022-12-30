const createNav = () => {
   return document.createElement('nav');
}

const createContainer = () => {
    return document.createElement('div');
}

export const createHeadertag = (type, textContent = '') => {
    let headerElement;
    switch (type) {
        case 'h1':
            headerElement = document.createElement('h1')
            break;
        case 'h2':
            headerElement = document.createElement('h2')
            break;
        case 'h3':
            headerElement = document.createElement('h3')
            break;
        case 'h4':
            headerElement = document.createElement('h4')
            break;
        case 'h5':
            headerElement = document.createElement('h5')
            break;
        default:
            break;
    }

    headerElement.innerText = textContent;
    return headerElement;
}

export const createLogo = (iconSource) => {
    const Logo = new Image();
    Logo.src = iconSource;
    return Logo
}

export const setupNav = (logo, companyName) => {
    const nav = createNav();

    //append child elements
    nav.appendChild(logo);
    nav.appendChild(companyName);

    return nav;
}

export const createBtn = (className, textContent) => {
    const button = document.createElement('button');
    button.classList.add(className);
    button.innerText = textContent;

    return button;
}
export const createThreePageTabs = (homeElem, menuElem, contactElem) => {
    const tabContainer = createContainer();
    tabContainer.append(homeElem, menuElem, contactElem);
    return tabContainer
}

export const initializePageStructure = () => {
    const nav = createNav();
    return nav;
}
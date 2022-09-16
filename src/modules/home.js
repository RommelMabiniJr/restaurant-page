import icon from '../icons8-restaurant-96.png';

export function createElements() {
    // Create all necessary DOM elements
    const wrapper = document.createElement('div')
    const nav = document.createElement('nav');
    const companyName = document.createElement('h3');
    const header = document.createElement('header');
    const headline = document.createElement('h1');
    const subHeadline = document.createElement('h2')

    // Add nav logo and company name to our nav bar
    const Logo = new Image();
    Logo.src = icon;
    companyName.innerText = "Edang's Barbecue House";
    nav.appendChild(Logo);
    nav.appendChild(companyName);

    // Add headline and sub-headline to header content
    headline.innerText = "Smoke, Sauce, & Suds";
    subHeadline.innerText = "Serving quality foods and beverages since 1995. Make your way to our smoked house located in Abuyog, Leyte."
    header.appendChild(headline);
    header.appendChild(subHeadline);

    // Wrap all of the cutomized content
    wrapper.appendChild(nav);
    wrapper.appendChild(header);

    return wrapper;
}
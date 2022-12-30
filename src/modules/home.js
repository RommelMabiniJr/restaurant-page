
export function createHomeSection() {
    // Create all necessary DOM elements
    const wrapper = document.createElement('div')
    const header = document.createElement('header');
    const headline = document.createElement('h1');
    const subHeadline = document.createElement('h2')

    // Add headline and sub-headline to header content
    headline.innerText = "Smoke, Sauce, & Suds";
    subHeadline.innerText = "Serving quality foods and beverages since 1995. Make your way to our smoked house located in Abuyog, Leyte."
    header.appendChild(headline);
    header.appendChild(subHeadline);

    // Wrap all of the cutomized content
    wrapper.appendChild(header);

    return wrapper;
}
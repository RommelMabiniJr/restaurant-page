// Contact Us

// Thank you for visiting our restaurant's website! If you have any questions or comments, we'd love to hear from you.

// Location: 123 Main Street, Anytown, USA

// Phone: (123) 456-7890

// Email: info@restaurant.com

// Hours:

// Monday-Thursday: 11:00am-10:00pm
// Friday-Saturday: 11:00am-11:00pm
// Sunday: 12:00pm-9:00pm
// We look forward to serving you!

export const createContactSection = () => {
    const contactWrapper = document.createElement('div');
    const contactHeader = document.createElement('h1');
    const subHeadline = document.createElement('h2');

    const location = document.createElement('p');
    const phone = document.createElement('p');
    const email = document.createElement('p');

    const ulElement = document.createElement('ul');
    const ulHeader = document.createElement('h2')
    const mon_thu = document.createElement('li');
    const fri_sat = document.createElement('li');
    const sunday = document.createElement('li');

    const endingText = document.createElement('p')

    // Add headline and sub-headline to header content
    
    contactHeader.innerText = "Contact Us";
    subHeadline.innerText = "Thank you for visiting our restaurant's website! If you have any questions or comments, we'd love to hear from you.";
    location.innerText = "Location: 123 Main Street, Anytown, USA";
    phone.innerText = "Phone: (123) 456-7890";
    email.innerText = "Email: info@restaurant.com";

    ulHeader.innerText = "Hours: ";
    mon_thu.innerText = 'Monday-Thursday: 11:00am-10:00pm';
    fri_sat.innerText = "Friday-Saturday: 11:00am-11:00pm";
    sunday.innerText = "Sunday: 12:00pm-9:00pm";
    endingText.innerText = "We look forward to serving you!";

    ulElement.append(ulHeader, mon_thu, fri_sat, sunday);
    contactWrapper.append(contactHeader, subHeadline, location, phone, email, ulElement, endingText);

    return contactWrapper;
}
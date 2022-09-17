

const menuItem = (title, description, price) => {
    const create = () => {
        // Create a list item with other inner elements & assign their values from arguments
        const listElement = document.createElement('li');
        const itemHeader = document.createElement('h3');
        const itemDetails = document.createElement('p');
        const itemPrice = document.createElement('span');

        itemHeader.innerText = title;
        itemDetails.innerText = description;
        itemPrice.innerText = price;

        // Class Names for styling
        listElement.classList.add('menu-item');
        itemHeader.classList.add('menu-item_heading');
        itemDetails.classList.add('menu-item_details');
        itemPrice.classList.add('menu-item_price');

        // Append all within li element and return it
        listElement.appendChild(itemHeader);
        listElement.appendChild(itemDetails);
        listElement.appendChild(itemPrice);
    };

    return {create};
}
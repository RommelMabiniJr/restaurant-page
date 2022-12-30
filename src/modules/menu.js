
export function createMenuSection() {
    const menuWrapper = document.createElement('div');
    const headline = document.createElement('h1');
    const FoodHeadline = document.createElement('h2');
    const DrinksHeadline = document.createElement('h2');
    const foodContainer = document.createElement('ul');
    const drinksContainer = document.createElement('ul');


    const myMenuItem = menuItem()
    FoodHeadline.innerText = "FOODS";
    const PorkBBQ = myMenuItem.create("Pork Barbecue", "a dish composed of marinated pork slices that are skewered and grilled", "₱13.00");
    const ChickenBBQ = myMenuItem.create("Chicken Barbecue", "consists of chicken parts or entire chickens[1] that are barbecued, grilled or smoked", "₱35.00");
    const PorkLiver = myMenuItem.create("Pork Liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const ChickenLiver = myMenuItem.create("Chicken liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const BBQedIntestine = myMenuItem.create("Barbecued Intestine", "a dish composed of marinated pork slices that are skewered and grilled", "₱05.00");

    DrinksHeadline.innerText = "DRINKS";
    const coke = myMenuItem.create("Coca-Cola", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const sprite = myMenuItem.create("Sprite", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const iced_tea = myMenuItem.create("Iced Tea", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const water = myMenuItem.create("Water", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");


    const foodList = document.createElement('ul');
    const drinksList = document.createElement('ul');
    foodList.append(PorkBBQ, ChickenBBQ, PorkLiver, ChickenLiver, BBQedIntestine);
    drinksList.append(coke, sprite, iced_tea, water);

    foodContainer.append(FoodHeadline, foodList);
    drinksContainer.append(DrinksHeadline, drinksList);


    headline.innerText = "MENU";
    menuWrapper.append(headline, foodContainer,drinksContainer);

    return menuWrapper;
}

const menuItem = () => {
    const create = (title, description, price) => {
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

        return listElement;
    };

    return {create};
}
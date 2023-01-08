import porkbbq from '../porkbbq.jpg';
import chickenbbq from '../chicken-bbq.jpg';
import porkliver from '../pork-liver.jpg';
import chickenliver from '../chicken-liver.jpg';
import isaw from '../isaw.jpg';
import cokeimg from '../coke.jpg';
import spriteimg from '../sprite.jpeg';
import icedteaimg from '../lemon-Iced-Tea.jpg';
import mineralwaterimg from '../water.jpg';



export function createMenuSection() {
    const menuWrapper = document.createElement('div');
    const menuSelectionContainer = document.createElement("div");
    const headline = document.createElement('h1');
    const FoodHeadline = document.createElement('h2');
    const DrinksHeadline = document.createElement('h2');
    const foodContainer = document.createElement('ul');
    const drinksContainer = document.createElement('ul');


    const myMenuItem = menuItem()
    FoodHeadline.innerText = "🍽️ FOODS 🍽️ ";
    const PorkBBQ = myMenuItem.create(porkbbq, "Pork Barbecue", "a dish composed of marinated pork slices that are skewered and grilled", "₱13.00");
    const ChickenBBQ = myMenuItem.create(chickenbbq, "Chicken Barbecue", "consists of chicken parts or entire chickens that are barbecued, grilled or smoked", "₱35.00");
    const PorkLiver = myMenuItem.create(porkliver, "Pork Liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const ChickenLiver = myMenuItem.create(chickenliver, "Chicken liver", "a dish composed of marinated pork slices that are skewered and grilled", "₱35.00");
    const BBQedIntestine = myMenuItem.create(isaw, "Barbecued Intestine", "a dish composed of marinated pork slices that are skewered and grilled", "₱05.00");

    DrinksHeadline.innerText = "🥛 DRINKS 🥛";
    const coke = myMenuItem.create(cokeimg, "Coca-Cola", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const sprite = myMenuItem.create(spriteimg, "Sprite", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const iced_tea = myMenuItem.create(icedteaimg, "Iced Tea", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");
    const water = myMenuItem.create(mineralwaterimg, "Water", "Lorem ipsum dolor sit amet consectetur, adipisicing elit.", "₱25.00");


    const foodList = document.createElement('ul');
    const drinksList = document.createElement('ul');
    foodList.classList.add("food-item-list");
    drinksList.classList.add("drinks-item-list");

    foodList.append(PorkBBQ, ChickenBBQ, PorkLiver, ChickenLiver, BBQedIntestine);
    drinksList.append(coke, sprite, iced_tea, water);

    foodContainer.append(FoodHeadline, foodList);
    drinksContainer.append(DrinksHeadline, drinksList);


    headline.innerText = "MENU";
    headline.classList.add('menu-header');
    foodContainer.classList.add('food-container');
    drinksContainer.classList.add("drinks-container");

    menuSelectionContainer.append(foodContainer, drinksContainer);
    menuWrapper.append(headline, menuSelectionContainer);
    menuWrapper.classList.add('menu-container');

    return menuWrapper;
}

const menuItem = () => {
    const create = (imageURL, title, description, price) => {
        // Create a list item with other inner elements & assign their values from arguments
        const listElement = document.createElement('li');
        const itemHeader = document.createElement('h3');
        const itemDetails = document.createElement('p');
        const itemPrice = document.createElement('span');
        const itemImage = new Image();

        itemImage.src = imageURL;
        itemHeader.innerText = title;
        itemDetails.innerText = description;
        itemPrice.innerText = price;

        // Class Names for styling
        itemImage.classList.add('menu-item-img');
        listElement.classList.add('menu-item');
        itemHeader.classList.add('menu-item_heading');
        itemDetails.classList.add('menu-item_details');
        itemPrice.classList.add('menu-item_price');

        // Append all within li element and return it
        listElement.appendChild(itemImage);
        listElement.appendChild(itemHeader);
        listElement.appendChild(itemDetails);
        listElement.appendChild(itemPrice);

        return listElement;
    };

    return {create};
}
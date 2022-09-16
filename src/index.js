console.log("Hi! I am called from index.js!");

import { createElements } from "./modules/home.js";

const container = document.querySelector('#content');
container.appendChild(createElements());
import { candyData }  from './candies.js';
import { lollipopData } from './lollipops.js';
import { healthData } from './health.js';
// import { weaponData } from './weapons.js';

let candiesDisplayEm = document.getElementById("candies");
let lollipopsDisplayEm = document.getElementById("lollipops");
let currentHealthEm = document.getElementById("currentHealth")
let maxHealthEm = document.getElementById("maxHealth")
let weaponRackDisplayEm = document.getElementById("weaponShop");
// let weaponsDisplayEm = document.getElementById("weapon");

weaponRackDisplayEm.style.display = "none";

function updateValues(){
    candiesDisplayEm.textContent = candyData.currentCandies;
    lollipopsDisplayEm.textContent = lollipopData.currentLollipops;
    currentHealthEm.textContent = Math.floor(healthData.currentHealth);
    maxHealthEm.textContent = Math.floor(healthData.maxHealth);
}



function buyLollipop(){
    lollipopData.currentLollipops += 1;
    candyData.currentCandies -= 60;
}
setInterval(updateValues,1000)




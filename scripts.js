import { candyData }  from './candies.js';
import { lollipopData } from './lollipops.js';

let candiesDisplayEm = document.getElementById("candies");
let lollipopsDisplayEm = document.getElementById("lollipops");
let weaponRackDisplayEm = document.getElementById("weapons");

weaponRackDisplayEm.style.display = "none";

function updateValues(){
    candiesDisplayEm.textContent = candyData.currentCandies;
    lollipopsDisplayEm.textContent = lollipopData.currentLollipops;

}


setInterval(updateValues,1000)




let candiesDisplayEm = document.getElementById("candies");
let lollipopsDisplayEm = document.getElementById("lollipops");
let weaponRackDisplayEm = document.getElementById("weapons")
let candies = 0;
let lollipops = 0;

weaponRackDisplayEm.style.display = "none";
function addCandies() {
    candies += 1;
    candiesDisplayEm.textContent = candies;
    if (candies < 100) {
        weaponRackDisplayEm.style.display = "none";
    }
    else{
        weaponRackDisplayEm.style.display = "block"
    }
}

function addLollipops() {
    lollipops += 1
    lollipopsDisplayEm.textContent = lollipops

}

setInterval(addCandies,1000)
setInterval(addLollipops,10000)



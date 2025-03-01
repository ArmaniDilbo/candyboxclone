let candiesDisplayEm = document.getElementById("candies");
let lollipopsDisplayEm = document.getElementById("lollipops");
let weaponRackDisplayEm = document.getElementById("weapons-rack")
let candies = 0;
let lollipops = 0;

function addCandies() {
    candies += 1;
    candiesDisplayEm.textContent = candies;
    if (candies < 100) {
        weaponRackDisplayEm.style.display = "none";
    }
}

function addLollipops() {
    lollipops += 1
    lollipopsDisplayEm.textContent = lollipops

}


setInterval(addCandies,1000)
setInterval(addLollipops,10000)



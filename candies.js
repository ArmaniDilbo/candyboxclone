export let candyData = {
    currentCandies: 100,
    candyGrowth: 1,
    candiesEaten: 0
}

function addCandies() {
    candyData.currentCandies += candyData.candyGrowth;
}

function eatCandies() {
    candiesEaten += candyData.currentCandies;
    candyData.candiesEaten = 0;
}

setInterval(addCandies,1000);

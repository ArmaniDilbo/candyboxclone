export let candyData = {
    currentCandies: 100,
    candyGrowth: 1
}

function addCandies() {
    candyData.currentCandies += candyData.candyGrowth;
}

setInterval(addCandies,1000);

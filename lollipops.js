export let lollipopData = {
    currentLollipops: 0,
    lollipopGrowth: 1
}

function addLollipops() {
    lollipopData.currentLollipops += lollipopData.lollipopGrowth;
}

setInterval(addLollipops,1000);
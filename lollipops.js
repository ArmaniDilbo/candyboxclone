export let lollipopData = {
    currentLollipops: 0,
    lollipopGrowth: 0
}

function addLollipops() {
    lollipopData.currentLollipops += lollipopData.lollipopGrowth;
}

setInterval(addLollipops,1000);
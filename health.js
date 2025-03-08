import { candyData }  from './candies.js'

export let healthData = {
    maxHealth: 100 + Math.log2(1),
    currentHealth: 50
}

setInterval(regeneration,1000);
function regeneration(){
    if (healthData.currentHealth != healthData.maxHealth) {
        healthData.currentHealth += 0.01 * healthData.maxHealth;
    }
    else if (healthData.currentHealth > healthData.maxHealth) {
        healthData.currentHealth = healthData.maxHealth
    }
}



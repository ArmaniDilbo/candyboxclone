import { candyData }  from './candies.js'

export let healthData = {
    maxHealth: 100, //default max
    currentHealth: 50
}

setInterval(1000,updateHealth);

function regeneration(){
    if (healthData.currentHealth != healthData.maxHealth) {
        healthData.currentHealth += 0.01 * healthData.maxHealth;
    }
    else if (healthData.currentHealth > healthData.maxHealth) {
        healthData.currentHealth = healthData.maxHealth
    }
}



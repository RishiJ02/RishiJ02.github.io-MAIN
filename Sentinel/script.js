canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var sents = 0

function ship(){
    //var defaultHP = 100
    //var defaultRebuildTime = 10
    //var defaultWeaponSlots = 1
    var HP = 100
    var rebuildTime = 10
    var weaponSlots = 1
}
function base(){
    //var defaultHP = 1000
    //var defaultTrap = "None"
    var HP = 1000
}
function weapon(){
    //var defaultATKavg = 15
    //var defaultDirections = 1
    //var defaultFireRate = 0.5
    //var defaultDmgPerShot = 7.5
    var directions = 1
    var fireRate = 0.5
    var dmgPerShot = 7.5
}
function armor(){
    //var defaultDEF = 10
    //var defaultDurability = 20
    //var defaultRepairCost = 50
}
function enemies(){
    var enemy
    var random
    var HP
    var power
    var position
    function spawn(){
        random = Math.floor(Math.random() * 1)+1
        if (random==1)
            enemy = "regular"
        if (enemy=="regular"){ 
            HP = 45
            power = 25
        }
    }
    setInterval(spawn(),5000);
}
function menu(){
 //WIP
}
function upgradeMenu(){
 //WIP
}
function pauseMenu(){
 //WIP   
}
function lootCrateMenu(){
 //WIP  
}
function gamemodeInfinite(){
    var score = 0
    
}
gamemodeInfinite()
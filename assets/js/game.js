var playerName = window.prompt("what is ye name tarnished?;")
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Morgot";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("AAAGH... RISE NOW, YE TARNISHED! YE DEAD, WHO YET LIVE!");
enemyHealth = enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")
playerHealth=  playerHealth - enemyAttack;
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")
};

if ( enemyHealth <= 0){
    window.alert("Great Enemy Felled")
}
else {
    window.alert(enemyName + " still has " + enemyHealth)
}

console.log("our hero's name is " + playerName);

fight();
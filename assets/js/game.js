var playerName = window.prompt("what is ye name tarnished?;")
window.alert("AAAGH... RISE NOW, YE TARNISHED! YE DEAD, WHO YET LIVE!");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Morgot";
var enemyHealth = 50;
var enemyAttack = 12;

console.log("our hero's name is " + playerName);

var fight = function() {
    
    var promptFight = window.prompt("Does the tarnish wish to flee or fight?");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.")

        if ( enemyHealth <= 0){
            window.alert("GREAT ENEMY FELLED")
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " HP left")
        };

        playerHealth=  playerHealth - enemyAttack;
          console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

  if ( playerHealth <= 0){
    window.alert("YOU DIED")
}
else {
    window.alert(playerName + " still has " + playerHealth + " HP left");
}


}else if (promptFight === "flee" || promptFight === "FLEE") {
    window.alert(playerName + "has chosen to flee");
} else {
    window.alert("Tarnished must FIGHT or FLEE!")
}
    }
fight();
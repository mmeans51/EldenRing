var playerName = window.prompt("what is ye name tarnished?;")
window.alert("AAAGH... RISE NOW, YE TARNISHED! YE DEAD, WHO YET LIVE!");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 1500;

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
        window.alert(playerName + " hit " + enemyName  + ".     -" + playerAttack)
        if ( enemyHealth <= 0){
            window.alert("GREAT ENEMY FELLED")
        }
        else {
            window.alert(enemyName + "  has " + enemyHealth + "HP left")
        };

        playerHealth=  playerHealth - enemyAttack;
        window.alert(enemyName + " hits " + playerName + ".     -" + enemyAttack)
          console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "HP remaining.")

  if ( playerHealth <= 0){
    window.alert("YOU DIED")
}
else {
    window.alert(playerName + "  has " + playerHealth + " HP left");
}


}else if (promptFight === "flee" || promptFight === "FLEE") {
    var confirmSkip = window.confirm("You will lose 200 ruins for leaving. Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + "has has fled.     -200");
        playerMoney = playerMoney - 200;
    }
    else {
        fight();
    }
} else {
    window.alert("Tarnished must FIGHT or FLEE!")
}
    }
fight();
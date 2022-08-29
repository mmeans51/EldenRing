var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 1500;

var enemyName = [
  "Margit, the Fell Omen",
  "Starscourge Radahn",
  "Dragonlord Placidusax",
];
var enemyHealth = 50;
var enemyAttack = 12;

var playerName = window.prompt("what is ye name tarnished?;");
window.alert("AAAGH... RISE NOW, YE TARNISHED! YE DEAD, WHO YET LIVE!");

var fight = function (enemyName) {
  window.prompt("An enemy approaches from the darkness. ")
  while (playerHealth > 0 && enemyHealth > 0) {
  //fight or flee
  var promptFight = window.prompt("Doth the tarnish wish to flee or fight?  (spam ok to speed through fight)");

  //if player skips
  if (promptFight === "flee" || promptFight === "FLEE") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you would like to flee?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerName + ' has decided to flee. -200');
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playerMoney)
      break;
    }
  }

  //remove enemy's health
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          " attacked " +
          enemyName +
          ". " +
          enemyName +
          " now has " +
          enemyHealth +
          " health remaining."
      );
      window.alert(playerName + " hit " + enemyName + ".     -" + playerAttack);
      if (enemyHealth <= 0) {
        window.alert("GREAT ENEMY FELLED");
        playerMoney = playerMoney + 500;
        window.alert("+ 500 ruins");
        break;
      } else {
        window.alert(enemyName + "  has " + enemyHealth + "HP left");
      }
      //remove player health
      playerHealth = playerHealth - enemyAttack;
      window.alert(enemyName + " hits " + playerName + ".     -" + enemyAttack);
      console.log(
        enemyName +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          "HP remaining."
      );

      //check player health
      if (playerHealth <= 0) {
        window.alert(" YOU DIED ");
        break;
      } else {
        window.alert(playerName + " has " + playerHealth + ' hp left');
      }
}
};

//start new game
var startGame = function() {
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 1500;

for (var i = 0; i < enemyName.length; i++) {
  if (playerHealth > 0) {
    window.alert("Try fingers! But whole? Attempt #" + (i + 1));

    var pickedEnemyName = enemyName[i];

    enemyHealth = 50;
    fight(pickedEnemyName);
  }
  else {
    window.alert("YOU DIED");
    break;
  }
}
// startGame();
endGame();
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert("You survived with " + playerMoney + " ruins");
  }
  else {
    window.alert("GAME OVER")
  }

  var playAgainConfirm = window.confirm("Doth thou wish to be reborn?");

  if (playAgainConfirm) {
    startGame();
  }
  else {
    window.alert("And this is why though wil remain..... maidenless!");
  }
};

startGame();
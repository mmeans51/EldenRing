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
  while (playerHealth > 0 && enemyHealth > 0) {
  //fight or flee
  var promptFight = window.prompt("Does the tarnish wish to flee or fight?");

  //if player skips
  if (promptFight === "flee" || promptFight === "FLEE") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to flee?");

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

for (var i = 0; i < enemyName.length; i++) {
  if (playerHealth > 0) {
    window.alert("Try fingers! Butthole? Attempt #" + (i + 1));

    var pickedEnemyName = enemyName[i];

    enemyHealth = 50;
    fight(pickedEnemyName);
  }

  var pickedEnemyName = enemyName[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
};

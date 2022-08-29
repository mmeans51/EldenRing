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
  var promptFight = window.prompt("Does the tarnish wish to flee or fight?");
  if (promptFight === "fight" || promptFight === "FIGHT") {
    while (playerHealth > 0 && enemyHealth > 0) {
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

      if (playerHealth <= 0) {
        window.alert("YOU DIED");
        break;
      } else {
        window.alert(playerName + "  has " + playerHealth + " HP left");
      }
    }
  } else if (promptFight === "flee" || promptFight === "FLEE") {
    var confirmSkip = window.confirm(
      "You will lose 200 ruins for leaving. Are you sure you'd like to quit?"
    );
    if (confirmSkip) {
      window.alert(playerName + "has has fled.     -200");
      playerMoney = playerMoney - 200;
      console.log("playerMoney", playerMoney);
    } else {
      fight();
    }
  } else {
    window.alert("Tarnished must FIGHT or FLEE!");
  }
};

for (var i = 0; i < enemyName.length; i++) {
  var pickedEnemyName = enemyName[i];
  enemyHealth = 50;
  fight(pickedEnemyName);
}

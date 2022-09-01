var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 1500;

var enemyName = [
  "Margit, the Fell Omen",
  "Starscourge Radahn",
  "Dragonlord Placidusax",
];
var enemyHealth = randomNumber(40, 60);
var enemyAttack = randomNumber(10,25);

var playerName = window.prompt("what is ye name tarnished?;");
window.alert("AAAGH... RISE NOW, YE TARNISHED! YE DEAD, WHO YET LIVE!");

var fight = function (enemyName) {
  window.alert("An enemy approaches from the darkness. ");
  while (playerHealth > 0 && enemyHealth > 0) {
    //fight or flee
    var promptFight = window.prompt(
      "Doth the tarnish wish to flee or fight?  (spam ok to speed through fight)"
    );

    //if player skips
    if (promptFight === "flee" || promptFight === "FLEE") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you would like to flee?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to flee. -200");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    //remove enemy's health
    var damage = randomNumber(playerAttack - 3, playerAttack);
    enemyHealth = Math.max(0, enemyHealth - damage);
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
      window.alert("+ 500 runes");
      break;
    } else {
      window.alert(enemyName + "  has " + enemyHealth + "HP left");
    }
    //remove player health
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
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
      window.alert(playerName + " has " + playerHealth + " hp left");
    }
  }
};

//start new game
var startGame = function () {
  var playerHealth = 100;
  var playerAttack = 10;
  var playerMoney = 1500;

  for (var i = 0; i < enemyName.length; i++) {
    if (playerHealth > 0) {
      window.alert("Try fingers! But whole? Attempt #" + (i + 1));

      var pickedEnemyName = enemyName[i];

      enemyHealth = Math.floor(Math.random() * 21) + 40;
      fight(pickedEnemyName);

      if (playerHealth > 0 && i < enemyName.length - 1) {
        var storeConfirm = window.confirm(
          "The battle is over. Doth thou wish to seek the merchant?"
        );

        if (storeConfirm) {
          shop();
        }
      }
    } else {
      window.alert("YOU DIED");
      break;
    }
  }
  // startGame();
  endGame();
};

var endGame = function () {
  if (playerHealth > 0) {
    window.alert("You survived with " + playerMoney + " runes");
  } else {
    window.alert("GAME OVER");
  }

  var playAgainConfirm = window.confirm("Doth thou wish to be reborn?");

  if (playAgainConfirm) {
    startGame();
  } else {
    window.alert("And this is why though wil remain..... maidenless!");
  }
};

var shop = function () {
  var shopOptionPrompt = window.prompt(
    "Would you like to purchase CRIMSON TEARS - 400 runes, GREAT RUNE - 400 runes, or LEAVE? (enter CRIMSON TEARS, GREAT RUNE, or LEAVE)"
  );

  switch (shopOptionPrompt) {
    case "crimson tears":
    case "CRIMSON TEARS":
      if (playerMoney >= 400) {
        window.alert("Refill flask by 20hp for 400 runes.");

        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 400;
      } else {
        window.alert("You do not have the runes for this!");
      }
      break;

    case "great rune":
    case "GREAT RUNE":
      if (playerMoney >= 400) {
        window.alert("Upgrading attack by 6 for 400 runes.");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 400;
      } else {
        window.alert("You do not have the runes for this!");
      }
      break;
    case "leave":
    case "LEAVE":
      window.alert("Leaving Merchant.");
      break;
    default:
      window.alert("You did not pick a valid option. Try again.");

      shop();
      break;
  }
};



startGame();

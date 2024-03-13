import { reactive } from "vue";

export const store = reactive({
  players: {
    player1: {
      chosenDice: {},
      remainingDice: {},
    },
    player2: {
      chosenDice: {},
      remainingDice: {},
    },
  },
  activeMenu: "welcome",
  changeActiveMenu(menu) {
    this.activeMenu = menu;
  },
  isActive(menu) {
    return this.activeMenu === menu;
  },
  createDie(faceValue, value) {
    return {
      faceValue: faceValue,
      value: value,
    };
  },
  addDieToPlayer(playerKey, faceValue) {
    const player = this.players[playerKey];
    const chosenDiceCopy = { ...player.chosenDice };
    console.log(`chosen dice copy:
    ${JSON.stringify(chosenDiceCopy)}
    ---------------------------------`);
    const chosenDiceKeys = Object.keys(chosenDiceCopy);
    console.log(`chosen dice keys - ${chosenDiceKeys}`);
    if (chosenDiceKeys.length < 6) {
      // Limiting to 6 dice
      const newDieKey = chosenDiceKeys.length + 1;
      console.log(`new die key - ${newDieKey}`);
      chosenDiceCopy[newDieKey] = this.createDie(
        faceValue,
        Math.floor(Math.random() * (faceValue + 1))
      );
      player.chosenDice = chosenDiceCopy;
    } else {
      console.log("Maximum limit of dice reached.");
    }
  },
});

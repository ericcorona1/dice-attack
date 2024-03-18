import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { rollDie } from "../utils/diceUtils";

export const usePlayersStore = defineStore("players", () => {
  const players = {
    player1: {
      chosenDice: {},
      remainingDice: {},
    },
    player2: {
      chosenDice: [
        { faceValue: "D4", rollValue: 3 },
        { faceValue: "D12", rollValue: 1 },
        { faceValue: "D8", rollValue: 7 },
      ],
      remainingDice: {},
    },
  };

  function addDieToPlayer(playerKey, faceValue) {
    const playerDice = players[playerKey].chosenDice;
    const playerDiceLength = Object.keys(playerDice).length;
    if (playerDice < 6) {
      const randomValue = rollDie(faceValue);
      playerDice.push({
        id: id,
        faceValue: faceValue,
        rollValue: randomValue,
      });
      //   const newDie = createDie(faceValue);
      //   chosenDiceCopy.push(newDie);
      //   players[playerKey].chosenDice = chosenDiceCopy;
    } else {
      console.log("Maximum limit of dice reached.");
    }
  }

  return { players, updatePlayers, addDieToPlayer };
});

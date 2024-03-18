import { defineStore } from "pinia";
import { rollDie } from "../utils/diceUtils";

export const usePlayersStore = defineStore("players", () => {
  const players = {
    player1: {
      chosenDice: {},
      remainingDice: {},
    },
    player2: {
      chosenDice: {
        1: { faceValue: "D4", rollValue: 3 },
        2: { faceValue: "D12", rollValue: 1 },
        3: { faceValue: "D8", rollValue: 7 },
      },
      remainingDice: {},
    },
  };

  function addDieToPlayer(playerKey, faceValue) {
    const playerDice = players[playerKey].chosenDice;
    const playerDiceLength = Object.keys(playerDice).length;
    if (playerDiceLength < 6) {
      const id = playerDiceLength + 1;
      const randomValue = rollDie(faceValue);
      playerDice[id] = {
        faceValue: faceValue,
        rollValue: randomValue,
      };
      //   const newDie = createDie(faceValue);
      //   chosenDiceCopy.push(newDie);
      //   players[playerKey].chosenDice = chosenDiceCopy;
    } else {
      alert("Maximum limit of dice reached.");
    }
  }

  return { players, addDieToPlayer };
});

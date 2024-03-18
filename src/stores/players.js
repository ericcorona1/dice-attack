import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { rollDie } from "../utils/diceUtils";

export const usePlayersStore = defineStore("players", () => {
  const faceValue = ref("");
  const rollValue = ref(0);
  const players = {
    player1: {
      chosenDice: [],
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
  const updatePlayers = computed(
    players.player1.chosenDice.push({
      faceValue: faceValue,
      rollValue: rollValue,
    })
  );
  function addDieToPlayer(playerKey, faceValue) {
    const playerDice = players[playerKey].chosenDice;
    if (playerDice.length < 6) {
      const randomValue = rollDie(faceValue);
      faceValue.value = faceValue;
      rollValue.value = randomValue;
      //   const newDie = createDie(faceValue);
      //   chosenDiceCopy.push(newDie);
      //   players[playerKey].chosenDice = chosenDiceCopy;
    } else {
      console.log("Maximum limit of dice reached.");
    }
  }

  return { players, updatePlayers, addDieToPlayer };
});

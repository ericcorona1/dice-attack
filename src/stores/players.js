import { defineStore } from "pinia";
import { rollDie } from "../utils/diceUtils";
import { ref, computed } from "vue";

export const usePlayersStore = defineStore("players", () => {
  const player1Turn = ref(true);
  const players = ref({
    player1: {
      chosenDice: {},
      remainingDice: {},
      reRoll: false,
    },
    player2: {
      chosenDice: {},
      remainingDice: {},
      reRoll: false,
    },
  });
  const activePlayer = computed(() =>
    player1Turn.value ? "Player 1" : "Player 2"
  );

  function addDieToPlayer(faceValue) {
    const activePlayer = player1Turn.value
      ? players.value.player1
      : players.value.player2;
    const activePlayerDice = activePlayer.chosenDice;
    const activePlayerDiceLength = Object.keys(activePlayerDice).length;
    if (activePlayerDiceLength < 6) {
      const id = activePlayerDiceLength + 1;
      const randomValue = rollDie(faceValue);
      activePlayer.chosenDice[id] = {
        faceValue: faceValue,
        rollValue: randomValue,
      };
    } else {
      alert("Maximum limit of dice reached.");
    }
  }
  function toggleTurn() {
    return (player1Turn.value = !player1Turn.value);
  }
  function reRollDie(key, selectedDie) {
    const { faceValue } = selectedDie;
    console.log(key, faceValue);
    activePlayer.chosenDice[key].rollValue = rollDie(faceValue);
  }

  return {
    players,
    addDieToPlayer,
    toggleTurn,
    activePlayer,
    player1Turn,
    reRollDie,
  };
});

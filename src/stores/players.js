import { defineStore } from "pinia";
import { rollDie } from "../utils/diceUtils";
import { ref, computed } from "vue";
import { useMenuStore } from "./menu";

export const usePlayersStore = defineStore("players", () => {
  const menuStore = useMenuStore();
  // check if player 1 turn
  const player1Turn = ref(true);
  // initiate players
  const players = ref({
    player1: {
      chosenDice: {},
      reRoll: false,
      selectPhaseComplete: false,
    },
    player2: {
      chosenDice: {},
      reRoll: false,
      selectPhaseComplete: false,
    },
  });
  // check active and inactive players
  const activePlayer = computed(() =>
    player1Turn.value ? "Player 1" : "Player 2"
  );
  const inactivePlayer = computed(() =>
    player1Turn.value ? "Player 2" : "Player 1"
  );
  // remove space and lowercase for proper object reference
  const activePlayerFormatted = computed(() =>
    activePlayer.value.replace(/\s/g, "").toLowerCase()
  );

  const inactivePlayerFormatted = computed(() =>
    inactivePlayer.value.replace(/\s/g, "").toLowerCase()
  );
  // add die in the select phase
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
        active: true,
      };
    } else {
      alert("Maximum limit of dice reached.");
    }
  }
  // used for both select phase and play phase
  function toggleTurn() {
    return (player1Turn.value = !player1Turn.value);
  }
  // can only use once in select, then once per turn in play phase
  function reRollDie(key, selectedDie) {
    const { faceValue } = selectedDie;
    const activePlayer = player1Turn.value
      ? players.value.player1
      : players.value.player2;
    if (!activePlayer.reRoll) {
      activePlayer.chosenDice[key].rollValue = rollDie(faceValue);
      activePlayer.reRoll = true;
    } else {
      console.log("You can't re-roll more than once");
    }
  }
  // indicate that select phase is completed
  function selectPhaseCompleted() {
    const player1 = players.value.player1;
    const player2 = players.value.player2;
    const activePlayer = player1Turn.value ? player1 : player2;

    // Update the selectPhaseComplete property of the active player
    activePlayer.selectPhaseComplete = !activePlayer.selectPhaseComplete;

    // Check if both players have completed the selection phase
    if (player1.selectPhaseComplete && player2.selectPhaseComplete) {
      menuStore.changeActiveMenu("play");
    }
  }

  return {
    players,
    addDieToPlayer,
    toggleTurn,
    activePlayer,
    activePlayerFormatted,
    player1Turn,
    reRollDie,
    selectPhaseCompleted,
    inactivePlayer,
    inactivePlayerFormatted,
  };
});

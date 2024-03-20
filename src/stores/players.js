import { defineStore } from "pinia";
import { rollDie } from "../utils/diceUtils";
import { ref, computed } from "vue";

export const usePlayersStore = defineStore("players", () => {
  const player1Turn = ref(true);
  const players = ref({
    player1: {
      chosenDice: {},
      remainingDice: {},
    },
    player2: {
      chosenDice: {
        1: { faceValue: "D4", rollValue: 3 },
        2: { faceValue: "D12", rollValue: 1 },
        3: { faceValue: "D8", rollValue: 7 },
        4: { faceValue: "D8", rollValue: 5 },
      },
      remainingDice: {},
    },
  });

  //   const updatedPlayers = computed(() => players.value);
  //   const player1TurnCheck = computed(() => player1Turn.value);
  //   const activePlayer = computed(() =>
  //     player1TurnCheck.value ? "Player 1" : "Player 2"
  //   );
  const activePlayer = computed(() =>
    player1Turn.value ? "Player 1" : "Player 2"
  );

  function addDieToPlayer(playerKey, faceValue) {
    const player = players.value[playerKey];
    const playerDice = player.chosenDice;
    const playerDiceLength = Object.keys(playerDice).length;
    if (playerDiceLength < 6) {
      const id = playerDiceLength + 1;
      const randomValue = rollDie(faceValue);
      players.value[playerKey] = {
        ...player,
        chosenDice: {
          ...playerDice,
          [id]: {
            faceValue: faceValue,
            rollValue: randomValue,
          },
        },
      };
    } else {
      alert("Maximum limit of dice reached.");
    }
  }
  function toggleTurn() {
    console.log(player1Turn.value);
    return (player1Turn.value = !player1Turn.value);
  }

  return {
    players,
    addDieToPlayer,
    toggleTurn,
    activePlayer,
    player1Turn,
  };
});

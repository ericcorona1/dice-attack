import { defineStore } from "pinia";

export const usePlayersStore = defineStore("players", () => {
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
  return { ...players };
});

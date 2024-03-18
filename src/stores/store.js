import { defineStore } from "pinia";
import { reactive } from "vue";

export const store = reactive({
  players: {
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
  },
  activeMenu: "welcome",
  changeActiveMenu(menu) {
    this.activeMenu = menu;
  },
  isActive(menu) {
    return this.activeMenu === menu;
  },
});

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
});

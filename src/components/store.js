import { reactive } from "vue";

export const store = reactive({
  activeMenu: "welcome",
  changeActiveMenu(menu) {
    this.activeMenu = menu;
  },
  isActive(menu) {
    return this.activeMenu === menu;
  },
  createDie(id, faceValue) {
    return {
      id: id,
      faceValue: faceValue,
      value: 0,
    };
  },
  addDieToPlayer(player) {
    if (player.chosenDice.length < 6) {
      // Limiting to 6 dice
      player.chosenDice.push({ id: this.dieIdCounter++, faceValue: 1 });
    } else {
      console.log("Maximum limit of dice reached.");
    }
  },
});

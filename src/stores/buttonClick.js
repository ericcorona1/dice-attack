import { defineStore, storeToRefs } from "pinia";
import { usePlayersStore } from "./players";

export const useButtonClick = defineStore("buttonClick", () => {
  const playerStore = usePlayersStore();
  const { players } = storeToRefs(playerStore);

  function highlightOn(key, player) {
    return (players.value[player].chosenDice[key].highlight = true);
  }

  function highlightOff(key, player) {
    return (players.value[player].chosenDice[key].highlight = false);
  }

  function highlightReset() {
    for (const playerKey in players.value) {
      const playerData = players.value[playerKey];
      for (const key in playerData.chosenDice) {
        playerData.chosenDice[key].highlight = false;
      }
    }
  }
  return { highlightOff, highlightOn, highlightReset };
});

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

  return { highlightOff, highlightOn };
});

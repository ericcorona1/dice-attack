import { ref } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { usePlayersStore } from "./players";

export const useButtonClick = defineStore("buttonClick", () => {
  const playersStore = usePlayersStore();
  const { players } = storeToRefs(playerStore);

  return {};
});

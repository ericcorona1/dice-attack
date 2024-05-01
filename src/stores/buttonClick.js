import { ref } from "vue";
import { defineStore } from "pinia";
import { usePlayersStore } from "./players";

export const useButtonClick = defineStore("buttonClick", () => {
  const playersStore = usePlayersStore();
  return {};
});

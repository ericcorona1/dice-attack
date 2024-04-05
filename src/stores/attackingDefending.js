import { defineStore } from "pinia";
import { ref } from "vue";

export const useAttackingDefendingDiceStore = defineStore(
  "attackingDefendingDice",
  () => {
    const attackingDice = ref([]);
    const defendingDice = ref([]);

    function copyDiceFromPlayerToAttacking(playerDice) {
      // Logic to copy dice from player to attacking dice
    }

    function copyDiceFromPlayerToDefending(playerDice) {
      // Logic to copy dice from player to defending dice
    }

    function modifyAttackingDice() {
      // Logic to modify attacking dice
    }

    function modifyDefendingDice() {
      // Logic to modify defending dice
    }

    // Other methods as needed

    return {
      attackingDice,
      defendingDice,
      copyDiceFromPlayerToAttacking,
      copyDiceFromPlayerToDefending,
      modifyAttackingDice,
      modifyDefendingDice,
      // Other properties and methods
    };
  }
);

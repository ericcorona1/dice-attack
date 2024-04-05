import { defineStore, storeToRefs } from "pinia";
import { ref } from "vue";
import { usePlayersStore } from "./players";

const playerStore = usePlayersStore();
const { players, player1Turn } = playerStore;

export const useAttackingDefendingDiceStore = defineStore(
  "attackingDefendingDice",
  () => {
    const attackingDice = ref({});
    const defendingDice = ref({});

    // Logic to copy dice from player to attacking dice
    function moveDiceToAttackingDefending(key) {
      const activePlayer = player1Turn.value
        ? players.value.player1
        : players.value.player2;
      const inactivePlayer = player1Turn.value
        ? players.value.player2
        : players.value.player1;
      const id = key;
      if (player1Turn.value) {
        attackingDice[id] = { ...activePlayer.chosenDice[id] };
        return attackingDice[id];
      } else {
        defendingDice[id] = { ...inactivePlayer.chosenDice[id] };
        return defendingDice[id];
      }
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

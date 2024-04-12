import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { usePlayersStore } from "./players";

export const useAttackingDefendingDiceStore = defineStore(
  "attackingDefendingDice",
  () => {
    const playerStore = usePlayersStore();
    const { players, player1Turn } = storeToRefs(playerStore);
    const attackingDice = ref({});
    const attackingTotal = computed(() => {
      let total = 0;
      for (const key in attackingDice.value) {
        const currentValue = attackingDice.value[key].rollValue;
        total += currentValue;
      }
      return total;
    });
    const defendingDice = ref({});
    const defendingTotal = computed(() => {
      let total = 0;
      for (const key in defendingDice.value) {
        const currentValue = defendingDice.value[key].rollValue;
        total += currentValue;
      }
      return total;
    });
    // Logic to copy dice from player to attacking dice
    function moveDiceToAttackingDefending(key, player) {
      const activePlayer = player1Turn.value
        ? players.value.player1
        : players.value.player2;
      const inactivePlayer = player1Turn.value
        ? players.value.player2
        : players.value.player1;
      const id = key;
      console.log(player);
      if (player === "player1") {
        attackingDice.value[id] = { ...activePlayer.chosenDice[id] };
        return attackingDice.value[id];
      } else {
        defendingDice.value[id] = { ...inactivePlayer.chosenDice[id] };
        return defendingDice.value[id];
      }
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
      attackingTotal,
      defendingDice,
      defendingTotal,
      moveDiceToAttackingDefending,
      modifyAttackingDice,
      modifyDefendingDice,
      // Other properties and methods
    };
  }
);

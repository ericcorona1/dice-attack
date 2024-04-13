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
      if (player === "player1") {
        attackingDice.value[id] = { ...activePlayer.chosenDice[id] };
        return attackingDice.value[id];
      } else if (Object.keys(defendingDice.value).length < 1) {
        defendingDice.value[id] = { ...inactivePlayer.chosenDice[id] };
        return defendingDice.value[id];
      }
    }

    function removeDie(obj, key) {
      console.log(obj, key);
      if (obj.hasOwnProperty(key)) {
        delete obj[key];
        return true;
      } else {
        return false;
      }
    }

    // Logic to see if active player can defeat inactive player
    function activeDiceCheck() {
      const attackingLength = Object.keys(attackingDice.value).length;
      const defendingLength = Object.keys(defendingDice.value).length;

      if (defendingLength > 0) {
        if (attackingLength === 1) {
          return attackingTotal.value > defendingTotal.value;
        } else if (attackingLength > 1) {
          return attackingTotal.value === defendingTotal.value;
        }
      }
      return false;
    }

    function inactiveDie(key) {
      const inactivePlayer = player1Turn.value
        ? players.value.player2
        : players.value.player1;
      return inactivePlayer.chosenDice[key].active == false;
    }

    return {
      attackingDice,
      attackingTotal,
      defendingDice,
      defendingTotal,
      moveDiceToAttackingDefending,
      removeDie,
      activeDiceCheck,
      // Other properties and methods
    };
  }
);

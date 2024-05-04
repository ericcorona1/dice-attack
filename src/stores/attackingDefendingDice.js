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
    const activeDieKeys = ref([]);
    const inactiveDieKey = ref("");

    // Logic to copy dice from player to attacking dice

    function toggleDie(key, player, targetObj) {
      const target =
        targetObj === "attackingDice" ? attackingDice : defendingDice;

      const clickedPlayer = players.value[player];
      const activePlayer = player1Turn.value
        ? players.value.player1
        : players.value.player2;
      const inactivePlayer = player1Turn.value
        ? players.value.player2
        : players.value.player1;
      const id = key;

      // If the die is already in the target object, remove it
      if (target.value.hasOwnProperty(id)) {
        delete target.value[id];
        return false; // Indicate that the die was removed
      } else if (clickedPlayer === activePlayer) {
        // Otherwise, add the die to the target object
        target.value[id] = { ...activePlayer.chosenDice[id] };
        return true; // Indicate that the die was added
      } else {
        // If the target object is defending dice and it's not already full, add the die
        if (
          target === defendingDice &&
          Object.keys(defendingDice.value).length < 1
        ) {
          target.value[id] = { ...inactivePlayer.chosenDice[id] };
          return true; // Indicate that the die was added
        }
        return false; // Indicate that the die was neither added nor removed
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

    function setInactiveDieKey(key) {
      return (inactiveDieKey.value = key);
    }

    function setActiveDieKeys(key) {
      activeDieKeys.value.push(key);
      return activeDieKeys;
    }

    function inactiveDie() {
      const inactivePlayer = player1Turn.value
        ? players.value.player2
        : players.value.player1;
      const key = inactiveDieKey.value;
      return (inactivePlayer.chosenDice[key].active = false);
    }

    function resetAtackingDefending() {
      attackingDice.value = {};
      defendingDice.value = {};
    }

    return {
      attackingDice,
      attackingTotal,
      defendingDice,
      defendingTotal,
      activeDieKeys,
      inactiveDieKey,
      toggleDie,
      activeDiceCheck,
      setInactiveDieKey,
      setActiveDieKeys,
      inactiveDie,
      resetAtackingDefending,
      // Other properties and methods
    };
  }
);

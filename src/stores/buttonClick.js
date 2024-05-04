import { defineStore, storeToRefs } from "pinia";
import { usePlayersStore } from "./players";
import { useAttackingDefendingDiceStore } from "./attackingDefendingDice";

export const useButtonClick = defineStore("buttonClick", () => {
  const playerStore = usePlayersStore();
  const { players, inactivePlayerFormatted } = storeToRefs(playerStore);
  const attackingDefendingDice = useAttackingDefendingDiceStore();
  const { defendingDice } = storeToRefs(attackingDefendingDice);

  function highlightToggle(key, player) {
    const die = players.value[player].chosenDice[key];

    if (player === inactivePlayerFormatted.value) {
      // If it's the inactive player's turn
      if (Object.keys(defendingDice.value).length === 0 || die.highlight) {
        // If the die is not highlighted or defending dice is empty, toggle highlight
        return (die.highlight = !die.highlight);
      }
    } else {
      // If it's the active player's turn, always toggle highlight
      return (die.highlight = !die.highlight);
    }
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
  return { highlightOff, highlightToggle, highlightReset };
});

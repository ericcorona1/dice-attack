<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { usePlayersStore } from "../stores/players";
import { storeToRefs } from "pinia";

const playerStore = usePlayersStore();
const { players, activePlayer, activePlayerFormatted } =
  storeToRefs(playerStore);
const { addDieToPlayer, toggleTurn, reRollDie, selectPhaseCompleted } =
  playerStore;
</script>

<template>
  <div class="pendingField">
    <div class="instructionText">
      <h2>{{ activePlayer }} Select Dice</h2>
      <h2
        v-if="
          Object.keys(players[activePlayerFormatted].chosenDice).length == 6
        "
      >
        {{ activePlayer }} May Re-roll 1 Die
      </h2>
    </div>
    <div class="diceHoldingBox">
      <button
        v-for="(item, key) in players[activePlayerFormatted].chosenDice"
        @click="reRollDie(key)"
      >
        <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
      </button>
    </div>
    <div class="confirmationBox">
      <!-- <button>Re-roll</button> -->
      <button
        v-if="
          Object.keys(players[activePlayerFormatted].chosenDice).length == 6
        "
        @click="
          toggleTurn();
          selectPhaseCompleted();
        "
      >
        Continue
      </button>
    </div>
  </div>
  <DiceSelectArea>
    <button @click="addDieToPlayer('D4')">
      <Dice selected-die="D4" />
    </button>
    <button @click="addDieToPlayer('D6')">
      <Dice selected-die="D6" />
    </button>
    <button @click="addDieToPlayer('D8')">
      <Dice selected-die="D8" />
    </button>
    <button @click="addDieToPlayer('D10')">
      <Dice selected-die="D10" />
    </button>
    <button @click="addDieToPlayer('D12')">
      <Dice selected-die="D12" />
    </button>
    <button @click="addDieToPlayer('D20')">
      <Dice selected-die="D20" />
    </button>
  </DiceSelectArea>
</template>

<style scoped>
.diceHoldingBox {
  background-color: grey;
  display: flex;
  justify-content: space-around;
}
</style>

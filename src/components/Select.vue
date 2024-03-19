<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { usePlayersStore } from "../stores/players";
import { computed } from "vue";

const playerStore = usePlayersStore();
const players = computed(() => playerStore.players);
const player1Turn = computed(() => playerStore.player1Turn);
</script>

<template>
  <div class="pendingField">
    <div class="instructionText">
      <h2>Player 1 Select Dice</h2>
      <h2>Player 1 May Re-roll 1 Die</h2>
    </div>
    <div class="diceHoldingBox">
      <Dice
        v-if="player1Turn"
        v-for="item in players.player1.chosenDice"
        :selectedDie="item.faceValue"
        :value="item.rollValue"
      />
      <Dice
        v-if="!player1Turn"
        v-for="item in players.player2.chosenDice"
        :selectedDie="item.faceValue"
        :value="item.rollValue"
      />
    </div>
    <div class="confirmationBox">
      <button>Re-roll</button>
      <button @click="playerStore.toggleTurn()">Continue</button>
    </div>
  </div>
  <DiceSelectArea>
    <!-- This is where createDie will run -->
    <!-- When selected, the die should be in the diceHoldingBox -->
    <button @click="playerStore.addDieToPlayer('player1', 'D4')">
      <Dice selected-die="D4" />
    </button>
    <button @click="playerStore.addDieToPlayer('player1', 'D6')">
      <Dice selected-die="D6" />
    </button>
    <button @click="playerStore.addDieToPlayer('player1', 'D8')">
      <Dice selected-die="D8" />
    </button>
    <button @click="playerStore.addDieToPlayer('player1', 'D10')">
      <Dice selected-die="D10" />
    </button>
    <button @click="playerStore.addDieToPlayer('player1', 'D12')">
      <Dice selected-die="D12" />
    </button>
    <button @click="playerStore.addDieToPlayer('player1', 'D20')">
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
li {
  background-color: blue;
  height: 100px;
}
</style>

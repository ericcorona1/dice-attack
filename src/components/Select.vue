<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { usePlayersStore } from "../stores/players";
import { storeToRefs } from "pinia";

const playerStore = usePlayersStore();
const { players, activePlayer, player1Turn } = storeToRefs(playerStore);
const { addDieToPlayer, toggleTurn, reRollDie } = playerStore;
</script>

<template>
  <div class="pendingField">
    <div class="instructionText">
      <h2>{{ activePlayer }} Select Dice</h2>
      <h2>{{ activePlayer }} May Re-roll 1 Die</h2>
    </div>
    <div class="diceHoldingBox">
      <button
        v-if="player1Turn"
        v-for="item in players.player1.chosenDice"
        :key="item"
        @click="reRollDie(item)"
      >
        <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
      </button>
      <button v-if="!player1Turn" v-for="item in players.player2.chosenDice">
        <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
      </button>
    </div>
    <div class="confirmationBox">
      <button>Re-roll</button>
      <button @click="toggleTurn()">Continue</button>
    </div>
  </div>
  <DiceSelectArea>
    <!-- This is where createDie will run -->
    <!-- When selected, the die should be in the diceHoldingBox -->
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
li {
  background-color: blue;
  height: 100px;
}
</style>

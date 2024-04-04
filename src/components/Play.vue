<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { usePlayersStore } from "../stores/players";
import { storeToRefs } from "pinia";

const playerStore = usePlayersStore();
const {
  players,
  activePlayer,
  activePlayerFormatted,
  inactivePlayer,
  inactivePlayerFormatted,
} = storeToRefs(playerStore);
const { toggleTurn, reRollDie } = playerStore;
</script>

<template>
  <!-- defending -->
  <DiceSelectArea>
    <div class="defendingDiceBox">
      <h2>defending</h2>
      <h2>{{ inactivePlayer }}</h2>
      <button
        v-for="(item, key) in players[inactivePlayerFormatted].chosenDice"
        @click="reRollDie(key, item)"
      >
        <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
      </button>
    </div>
  </DiceSelectArea>
  <!-- Active Dice Field -->
  <div class="targetDiceBox">
    <div class="targetInstructions">
      <h2>instructions for the active player</h2>
    </div>
    <div class="activeDice">
      <button>This is where active dice should be</button>
    </div>
  </div>

  <!-- attacking -->
  <DiceSelectArea>
    <div class="attackingDiceBox">
      <h2>attacking</h2>
    </div>
    <h2>{{ activePlayer }}</h2>
    <button
      v-for="(item, key) in players[activePlayerFormatted].chosenDice"
      @click="reRollDie(key, item)"
    >
      <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
    </button>
  </DiceSelectArea>
</template>

<style>
.defendingDiceBox {
  background-color: pink;
  height: 100px;
}
.targetDiceBox {
  background-color: blueviolet;
}
.targetInstructions {
  background-color: blue;
  height: 100px;
}
.activeDice {
  background-color: red;
  width: 50%;
}
.attackingDiceBox {
  background-color: brown;
  height: 100px;
}
</style>

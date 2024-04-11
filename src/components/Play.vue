<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { storeToRefs } from "pinia";
import { usePlayersStore } from "../stores/players";
import { useAttackingDefendingDiceStore } from "../stores/attackingDefendingDice";

const playerStore = usePlayersStore();
const {
  players,
  activePlayer,
  activePlayerFormatted,
  inactivePlayer,
  inactivePlayerFormatted,
} = storeToRefs(playerStore);
const { toggleTurn, reRollDie } = playerStore;

const attackingDefendingStore = useAttackingDefendingDiceStore();
const { attackingDice, defendingDice } = storeToRefs(attackingDefendingStore);
const { moveDiceToAttackingDefending } = attackingDefendingStore;
</script>

<template>
  <!-- defending -->
  <DiceSelectArea>
    <div class="defendingDiceBox">
      <h2>defending</h2>
      <h2>{{ inactivePlayer }}</h2>
      <button
        v-for="(item, key) in players[inactivePlayerFormatted].chosenDice"
        @click="moveDiceToAttackingDefending(key, inactivePlayerFormatted)"
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
      <div class="attacking" v-for="(item, key) in attackingDice">
        <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
      </div>
      <div class="divider"></div>
      <div class="defending" v-for="(item, key) in defendingDice">
        <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
      </div>
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
      @click="moveDiceToAttackingDefending(key, activePlayerFormatted)"
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
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.pending {
  border: solid 5px blue;
}

.attackingDiceBox {
  background-color: brown;
  height: 100px;
}
</style>

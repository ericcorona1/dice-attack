<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { store } from "../store/store";
import { addDieToPlayer } from "../utils/diceUtils";
</script>

<template>
  <div class="pendingField">
    <div class="instructionText">
      <h2>Player 1 Select Dice</h2>
      <h2>Player 1 May Re-roll 1 Die</h2>
    </div>
    <div class="diceHoldingBox"></div>
    <div class="confirmationBox">
      <button>Re-roll</button>
      <button>Continue</button>
    </div>
  </div>
  <DiceSelectArea>
    <!-- This is where createDie will run -->
    <!-- When selected, the die should be in the diceHoldingBox -->
    <button @click="addDieToPlayer('player1', 'D4')">
      <Dice selected-die="D4" />
    </button>
    <button @click="addDieToPlayer('player1', 'D6')">
      <Dice selected-die="D6" />
    </button>
    <button @click="addDieToPlayer('player1', 'D8')">
      <Dice selected-die="D8" />
    </button>
    <button @click="addDieToPlayer('player1', 'D10')">
      <Dice selected-die="D10" />
    </button>
    <button @click="addDieToPlayer('player1', 'D12')">
      <Dice selected-die="D12" />
    </button>
    <button @click="addDieToPlayer('player1', 'D20')">
      <Dice selected-die="D20" />
    </button>
  </DiceSelectArea>
</template>

<style scoped>
.diceHoldingBox {
  background-color: white;
  height: 100px;
}
</style>
../store/store

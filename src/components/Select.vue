<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
// import { addDieToPlayer } from "../utils/diceUtils";
import { usePlayersStore } from "../stores/players";

const playerStore = usePlayersStore();
// const player1Dice = playerStore.player1.chosenDice;

const fakedice = [
  { faceValue: "D4", rollValue: 3 },
  { faceValue: "D12", rollValue: 1 },
  { faceValue: "D8", rollValue: 7 },
];

const showPlayer1 = () => {
  console.log(playerStore);
};
</script>

<template>
  <div class="pendingField">
    <div class="instructionText">
      <h2>Player 1 Select Dice</h2>
      <h2>Player 1 May Re-roll 1 Die</h2>
    </div>
    <div class="diceHoldingBox">
      <!-- <Dice
        v-for="item in player1Dice"
        :selectedDie="item.faceValue"
        :value="item.rollValue"
      /> -->
    </div>
    <div class="confirmationBox">
      <button>Re-roll</button>
      <button>Continue</button>
      <button @click="showPlayer1">Show Player 1</button>
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
}
li {
  background-color: blue;
  height: 100px;
}
</style>

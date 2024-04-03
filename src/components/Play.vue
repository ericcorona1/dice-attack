<script>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
</script>

<template>
  <!-- defending -->
  <DiceSelectArea>
    <div class="defendingDiceBox">
      <h2>defending</h2>
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

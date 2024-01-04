<script>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
</script>

<template>
  <!-- defending -->
  <DiceSelectArea></DiceSelectArea>
  <div class="targetDiceBox">
    <div class="targetInstructions"></div>
    <div class="activeDice">
      <button>Attack</button>
    </div>
  </div>
  <!-- attacking -->
  <DiceSelectArea></DiceSelectArea>
</template>

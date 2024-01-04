<script>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
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
    <Dice selected-die="D4" />
    <Dice selected-die="D6" />
    <Dice selected-die="D8" />
    <Dice selected-die="D10" />
    <Dice selected-die="D12" />
    <Dice selected-die="D20" />
  </DiceSelectArea>
</template>

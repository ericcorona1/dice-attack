<script setup>
import Dice from "./Dice.vue";
import GreaterThan from "./icons/GreaterThan.vue";
import EqualTo from "./icons/EqualTo.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { store } from "./store";
</script>

<template>
  <div>
    <section>
      <header>
        <h2>Destroy opponents dice</h2>
      </header>
      <div>
        <h3>Greater Than Attack</h3>
        <Dice value="11" selected-die="D12" />
        <GreaterThan />
        <Dice value="6" selected-die="D20" />
      </div>
      <div>
        <h3>Equal To Attack</h3>
        <Dice value="8" selected-die="D12" />
        <Dice value="6" selected-die="D6" />
        <Dice value="2" selected-die="D4" />
        <EqualTo />
        <Dice value="16" selected-die="D20" />
      </div>
    </section>
    <article>
      <DiceSelectArea>
        <Dice selected-die="D4" />
        <Dice selected-die="D6" />
        <Dice selected-die="D8" />
        <Dice selected-die="D10" />
        <Dice selected-die="D12" />
        <Dice selected-die="D20" />
      </DiceSelectArea>
    </article>
    <button @click="store.changeActiveMenu('welcome')">Home</button>
  </div>
</template>

<style scoped>
.attack {
  width: 50%;
}
.svg-container {
  width: 50%; /* Set a desired width for the SVG container */
  max-width: 300px; /* Limit the maximum width for larger screens */
  margin: 0 auto; /* Center the SVG container */
}
</style>

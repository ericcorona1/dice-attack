<script setup>
import Dice from "./Dice.vue";
import { useMenuStore } from "../stores/menu";
const activeMenu = useMenuStore();
</script>

<template>
  <section class="page">
    <header>
      <h2>Capture all opponent's dice</h2>
    </header>
    <div class="wrapper">
      <h3>Greater Than Attack</h3>
      <p>1 attacking die only</p>
      <div class="attackType">
        <Dice :value="11" selected-die="D12" />
        <p>></p>
        <Dice :value="6" selected-die="D20" />
      </div>
    </div>
    <div class="wrapper">
      <h3>Equal To Attack</h3>
      <p>2 or more attacking die</p>
      <div class="attackType">
        <Dice :value="8" selected-die="D12" />
        <Dice :value="6" selected-die="D6" />
        <Dice :value="2" selected-die="D4" />
        <p>=</p>
        <Dice :value="16" selected-die="D20" />
      </div>
    </div>

    <button @click="activeMenu.changeActiveMenu('welcome')">Home</button>
  </section>
</template>

<style scoped>
section > * {
  margin: 20px auto;
}
.attackType {
  display: flex;
  justify-content: space-evenly;
  max-width: calc(100% - 20px);
  margin: auto;
  gap: 2%;
}

.attackType p {
  font-size: clamp(4rem, 20vw, 10rem);
  margin: auto;
}

.attackType .dice {
  width: 20%;
}
</style>

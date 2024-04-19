<script setup>
import Dice from "./Dice.vue";
import GreaterThan from "./icons/GreaterThan.vue";
import EqualTo from "./icons/EqualTo.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { useMenuStore } from "../stores/menu";
const activeMenu = useMenuStore();
</script>

<template>
  <div>
    <section>
      <header>
        <h2>Destroy opponents dice</h2>
      </header>
      <h3>Greater Than Attack</h3>
      <div class="attackType">
        <Dice :value="11" selected-die="D12" />
        <!-- <GreaterThan /> -->
        <p>></p>
        <Dice :value="6" selected-die="D20" />
      </div>
      <h3>Equal To Attack</h3>
      <div class="attackType">
        <Dice :value="8" selected-die="D12" />
        <Dice :value="6" selected-die="D6" />
        <Dice :value="2" selected-die="D4" />
        <!-- <EqualTo /> -->
        <p>=</p>
        <Dice :value="16" selected-die="D20" />
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
    <button @click="activeMenu.changeActiveMenu('welcome')">Home</button>
  </div>
</template>

<style scoped>
.attackType {
  display: flex;
  justify-content: space-evenly;
}
p {
  margin: auto;
}
</style>

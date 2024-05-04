<script setup>
import Dice from "./Dice.vue";
import { useMenuStore } from "../stores/menu";
const menu = useMenuStore();
</script>

<template>
  <section class="page">
    <header>
      <h2>Capture opponent's dice</h2>
    </header>

    <div class="instructions">
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
    </div>

    <button
      v-if="menu.activeMenu === 'instructions'"
      @click="menu.changeActiveMenu('welcome')"
    >
      Home
    </button>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.attackType {
  display: flex;
  justify-content: space-evenly;
  max-width: calc(100% - 20px);
  margin: 10px auto;
  gap: 2%;
  align-items: center;
}

.attackType p {
  font-size: clamp(25px, 5vw + 1em, 80px);
}

.attackType .dice {
  width: 20%;
  max-width: 200px;
  height: min-content;
  padding: 1px 4px;
  background-color: white;
  border-radius: 5px;
}

@media (max-height: 664px) {
  .instructions {
    display: flex;
    justify-content: space-around;
  }
}
</style>

<script setup>
import { store } from "../store/store";
</script>

<template>
  <section class="page welcome">
    <h1>DICE ATTACK</h1>
    <div class="centerBtns">
      <div class="welcomeBtns">
        <button @click="store.changeActiveMenu('instructions')">
          How to Play
        </button>
        <button @click="store.changeActiveMenu('select')">Start</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.centerBtns {
  height: 90%;
  display: inherit;
  align-items: center;
  justify-content: center;
}
.welcomeBtns {
  display: inherit;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  gap: 20px;
}

h1 {
  text-align: center;
  font-weight: 700;
}

button {
  font-size: calc(1vw + 1em);
}
</style>
../store/store ../stores/store

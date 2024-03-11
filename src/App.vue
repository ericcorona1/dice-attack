<script setup>
import Instructions from "./components/Instructions.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import Attack from "./components/Attack.vue";
import Play from "./components/Play.vue";
import DisplayWinner from "./components/DisplayWinner.vue";
import { store } from "./components/store";
</script>

<template>
  <header></header>

  <main>
    <WelcomeScreen v-if="store.isActive('welcome')" />
    <Instructions v-if="store.isActive('instructions')" />
  </main>
</template>

<style scoped></style>

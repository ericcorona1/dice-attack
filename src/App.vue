<script setup>
import Instructions from "./components/Instructions.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import Select from "./components/Select.vue";
import Play from "./components/Play.vue";
import DisplayWinner from "./components/DisplayWinner.vue";
import { store } from "./components/store";
</script>

<template>
  <header></header>

  <main>
    <WelcomeScreen v-if="store.isActive('welcome')" />
    <Instructions v-if="store.isActive('instructions')" />
    <Select v-if="store.isActive('select')" />
  </main>
</template>

<style scoped></style>
./components/Select.vue

<script setup>
import Instructions from "./components/Instructions.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import Select from "./components/Select.vue";
import Play from "./components/Play.vue";
import DisplayWinner from "./components/DisplayWinner.vue";
import { useMenuStore } from "./stores/menu";
const menu = useMenuStore();
console.log(menu.activeMenu);
</script>

<template>
  <header></header>

  <main>
    <WelcomeScreen v-if="menu.isActive('welcome')" />
    <Instructions v-if="menu.isActive('instructions')" />
    <Select v-if="menu.isActive('select')"></Select>
  </main>
</template>

<style scoped></style>

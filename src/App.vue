<script setup>
import Instructions from "./components/Instructions.vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import Attack from "./components/Attack.vue";
</script>

<template>
  <header></header>

  <main>
    <Attack />
  </main>
</template>

<style scoped>
section {
  border: 1px solid white;
  padding: 5px;
}
</style>

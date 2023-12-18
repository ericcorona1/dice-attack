<script setup>
import Dice from "./Dice.vue";
</script>

<template>
  <section>
    <header>
      <p>Destroy opponents dice</p>
    </header>
    <Dice value="6" :selected-die="'D8'" />
    <Dice value="14" :selected-die="'D20'" />
  </section>
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
.dice {
}
</style>

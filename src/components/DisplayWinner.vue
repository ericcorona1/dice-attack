<script setup>
import { usePlayersStore } from "../stores/players";
import { storeToRefs } from "pinia";

const playerStore = usePlayersStore();
const { winner } = storeToRefs(playerStore);

function reloadThePage() {
  window.location.reload();
}
</script>

<template>
  <section>
    <h2>{{ winner }} WINS</h2>
    <button @click="reloadThePage()">Rematch</button>
  </section>
</template>

<style>
button {
  display: block;
}
</style>

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
  <h2>{{ winner }} WINS</h2>
  <button @click="reloadThePage()">Rematch</button>
</template>

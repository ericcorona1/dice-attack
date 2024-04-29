<script setup>
function reloadPage() {
  window.location.reload();
}
</script>

<template>
  <h2>Player X WINS</h2>
  <button @click="reloadPage()">Rematch</button>
</template>

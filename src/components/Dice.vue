<template>
  <component :is="diceTypes[selectedDie]" :value="value" class="dice" />
</template>

<script setup>
import D10 from "./icons/D10.vue";
import D12 from "./icons/D12.vue";
import D20 from "./icons/D20.vue";
import D4 from "./icons/D4.vue";
import D6 from "./icons/D6.vue";
import D8 from "./icons/D8.vue";

const props = defineProps({ value: Number, selectedDie: String });

// Object mapping die names to their components
const diceTypes = {
  D4,
  D6,
  D8,
  D10,
  D12,
  D20,
};
</script>

<style scoped>
.dice {
  display: flex;
  font-size: 40px;
}
</style>

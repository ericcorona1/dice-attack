<template>
  <svg viewBox="0 0 100 100">
    <!-- D4: Triangle -->
    <polygon points="50,5 95,95 5,95" fill="blue" />
    <text
      x="50"
      y="65"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="white"
    >
      {{ value }}
    </text>
  </svg>
  <!-- <div class="svg-container"></div> -->
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
svg {
  width: 100%;
}
</style>

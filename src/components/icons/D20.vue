<template>
  <svg viewBox="0 0 100 100">
    <!-- D20: Hexagon -->

    <polygon
      points="50,1 75,5 95,25 95,75 75,95 50,99 25,95 5,75 5,25 25,5"
      fill="blue"
    />

    <text
      x="50"
      y="50"
      text-anchor="middle"
      dominant-baseline="middle"
      fill="white"
    >
      {{ value }}
    </text>
  </svg>
  <!-- <div class="svg-container">
  </div> -->
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

<style></style>

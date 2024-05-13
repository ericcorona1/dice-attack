<template>
  <svg viewBox="0 0 100 100">
    <!-- D6: Square -->
    <rect x="5" y="5" width="90" height="90" fill="blue" />
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

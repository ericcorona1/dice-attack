<template>
  <svg viewBox="0 0 100 100">
    <!-- D8: Vertical Diamond -->
    <polygon points="50,5 95,50 50,95 5,50" fill="blue" />

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
  <!-- <div class="">
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

<template>
  <svg viewBox="0 0 100 100">
    <!-- D12 -->
    <polygon points="50,5 95,30 77,95 23,95 5,30" fill="blue" />
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

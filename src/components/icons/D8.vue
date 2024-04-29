<template>
  <div class="">
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- D8: Vertical Diamond -->
      <polygon points="50,10 90,50 50,90 10,50" fill="blue" />

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
  </div>
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

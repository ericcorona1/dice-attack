<template>
  <div class="svg-container">
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- D20: Hexagon -->
      <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="blue" />
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

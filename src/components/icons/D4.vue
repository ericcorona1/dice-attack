<template>
  <div class="svg-container">
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
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

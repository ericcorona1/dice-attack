<template>
  <div class="svg-container">
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- D12: Pentagon -->
      <polygon
        points="60,20 80,50 60,80 40,50"
        fill="blue"
        transform="rotate(90, 50, 50)"
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

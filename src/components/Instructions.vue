<script setup>
import D10 from "./icons/D10.vue";
import D12 from "./icons/D12.vue";
import D20 from "./icons/D20.vue";
import D4 from "./icons/D4.vue";
import D6 from "./icons/D6.vue";
import D8 from "./icons/D8.vue";
</script>

<template>
  <section>
    <header>
      <p>Destroy opponents dice</p>
    </header>
    <article>
      <p>Greater Than Attack</p>
      <div class="attack">
        <D4 />
        <D6 />
        <D8 />
        <D10 />
        <D12 />
        <D20 />
      </div>
    </article>
  </section>
</template>

<style scoped>
.attack {
  width: 50%;
}
.svg-container {
  width: 50%; /* Set a desired width for the SVG container */
  max-width: 300px; /* Limit the maximum width for larger screens */
  margin: 0 auto; /* Center the SVG container */
}
</style>

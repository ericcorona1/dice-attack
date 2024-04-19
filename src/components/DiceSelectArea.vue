<template>
  <div class="selectArea">
    <slot></slot>
  </div>
</template>

<style>
.selectArea {
  background-color: lightgray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2%;
}

.selectArea .dice {
  flex: auto;
}
</style>

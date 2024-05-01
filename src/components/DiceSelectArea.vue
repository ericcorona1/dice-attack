<template>
  <div class="selectArea">
    <slot></slot>
  </div>
</template>

<style>
.selectArea {
  height: 20vh;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.selectArea > * {
  width: clamp(50px, 100% / 6, 200px);
  margin: 0 5px;
}

.inactive > svg > *:not(text) {
  fill: cornflowerblue;
}

@media (max-width: 500px) {
  .selectArea {
    flex-wrap: wrap;
  }
  .selectArea > * {
    width: clamp(60px, 100% / 6, 70px);
    margin: 0 5%;
  }
}
</style>

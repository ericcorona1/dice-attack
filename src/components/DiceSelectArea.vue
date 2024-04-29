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

.selectArea > button {
  width: clamp(50px, 100% / 6, 200px);
  margin: 0 5px;
}

@media (max-width: 500px) {
  .selectArea {
    flex-wrap: wrap;
  }
  .selectArea > button {
    width: 70px;
    margin: 0 5%;
  }
}
</style>

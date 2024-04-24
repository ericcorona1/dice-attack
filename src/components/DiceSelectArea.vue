<template>
  <div class="selectArea">
    <slot></slot>
  </div>
</template>

<style>
.selectArea {
  position: absolute;
  bottom: 0;
  width: 99%;
  height: 20vh;
  background-color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5%;
}

.selectArea > button {
  width: 15%;
}
</style>

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
  width: clamp(50px, 100% / 6, 120px);
  margin: 0 5px;
}
.inactive > svg > *:not(text) {
  fill: cornflowerblue;
}

@media (max-width: 500px) {
  .selectArea {
    flex-wrap: wrap;
    height: fit-content;
  }
  .selectArea > * {
    width: clamp(60px, 100% / 6, 70px);
    margin: 0 5%;
  }
}

@media (min-width: 700px) and (max-height: 664px) {
  .player {
    display: flex;
    flex-direction: column;
  }
  .selectArea {
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .selectArea > button {
    width: clamp(50px, 100% / 3, 100px);
  }
}
</style>

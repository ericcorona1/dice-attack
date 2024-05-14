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

.selectArea > button {
  box-sizing: border-box;
  background-color: #f8f8f8;
  border: 0.1rem solid rgb(71, 71, 71);
  border-radius: 5px;
  padding: 1.6px 4.6px;
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
    width: clamp(60px, 100% / 6, 100px);
    margin: 0 5%;
  }
}

@media (min-width: 620px) and (max-height: 664px) {
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

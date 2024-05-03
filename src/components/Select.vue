<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { usePlayersStore } from "../stores/players";
import { storeToRefs } from "pinia";

const playerStore = usePlayersStore();
const { players, activePlayer, activePlayerFormatted } =
  storeToRefs(playerStore);
const { addDieToPlayer, toggleTurn, reRollDie, selectPhaseCompleted } =
  playerStore;
</script>

<template>
  <section class="container">
    <div class="pendingField">
      <div class="instructionText">
        <h2>{{ activePlayer }} Select 6 Dice</h2>
        <p>Die may not be removed after selection</p>
      </div>
      <div class="diceHoldingBox">
        <button
          v-for="(item, key) in players[activePlayerFormatted].chosenDice"
          @click="reRollDie(key)"
        >
          <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
        </button>
      </div>
      <div
        class="confirmationBox"
        v-if="
          Object.keys(players[activePlayerFormatted].chosenDice).length == 6
        "
      >
        <h3>{{ activePlayer }} May Re-roll 1 Die</h3>
        <p>Click one of your selected die to re-roll</p>

        <button
          @click="
            toggleTurn();
            selectPhaseCompleted();
          "
        >
          Continue
        </button>
      </div>
    </div>
    <DiceSelectArea>
      <button @click="addDieToPlayer('D4')">
        <Dice selected-die="D4" />
      </button>
      <button @click="addDieToPlayer('D6')">
        <Dice selected-die="D6" />
      </button>
      <button @click="addDieToPlayer('D8')">
        <Dice selected-die="D8" />
      </button>
      <button @click="addDieToPlayer('D10')">
        <Dice selected-die="D10" />
      </button>
      <button @click="addDieToPlayer('D12')">
        <Dice selected-die="D12" />
      </button>
      <button @click="addDieToPlayer('D20')">
        <Dice selected-die="D20" />
      </button>
    </DiceSelectArea>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.diceHoldingBox {
  background-color: grey;
  height: 20vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.diceHoldingBox > button {
  width: clamp(50px, 100% / 6, 120px);
}

.confirmationBox {
  margin: 20px auto;
}

.confirmationBox > button {
  margin: 20px auto;
}

.selectArea {
  margin-top: auto;
}

@media (max-width: 500px) {
  .diceHoldingBox {
    flex-wrap: wrap;
  }
  .diceHoldingBox > button {
    width: clamp(60px, 100% / 6, 70px);
    margin: 0 5%;
  }
}

@media (max-height: 664px) {
  .container {
    flex-direction: row;
  }
}
</style>

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
        <p>{{ activePlayer }} May Re-roll 1 Die</p>

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
  box-sizing: border-box;
  background-color: #f8f8f8;
  border: 0.1rem solid rgb(71, 71, 71);
  border-radius: 5px;
  padding: 1.6px 4.6px;
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
    height: fit-content;
  }
  .diceHoldingBox > button {
    width: clamp(50px, 100% / 6, 70px);
    margin: 0 5%;
  }
}

@media (min-width: 620px) and (max-height: 664px) {
  .container {
    flex-direction: row;
    column-gap: 5px;
  }

  .pendingField {
    flex: 2;
  }

  /* .diceHoldingBox > button {
    width: clamp(50px, 100% / 6, 70px);
    margin: 0 5%;
  } */

  .selectArea {
    height: 100%;
  }
}
</style>

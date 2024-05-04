<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import Instructions from "./Instructions.vue";
import { storeToRefs } from "pinia";
import { usePlayersStore } from "../stores/players";
import { useButtonClick } from "../stores/buttonClick";
import { useAttackingDefendingDiceStore } from "../stores/attackingDefendingDice";
import { ref } from "vue";

const dialog = ref(null);

const openModal = () => {
  dialog.value.showModal();
};

const closeModal = () => {
  dialog.value.close();
};

const buttonClick = useButtonClick();
const { highlightOff, highlightToggle, highlightReset } = buttonClick;

const playerStore = usePlayersStore();
const {
  players,
  activePlayer,
  activePlayerFormatted,
  inactivePlayer,
  inactivePlayerFormatted,
} = storeToRefs(playerStore);
const { toggleTurn, reRollDie, checkWinner } = playerStore;

const attackingDefendingStore = useAttackingDefendingDiceStore();
const {
  attackingDice,
  defendingDice,
  attackingTotal,
  defendingTotal,
  activeDieKeys,
  inactiveDieKey,
} = storeToRefs(attackingDefendingStore);
const {
  toggleDie,
  removeDie,
  activeDiceCheck,
  setInactiveDieKey,
  setActiveDieKeys,
  inactiveDie,
  resetAtackingDefending,
} = attackingDefendingStore;
</script>

<template>
  <section class="container">
    <!-- attacking -->
    <div class="player attackingDiceBox">
      <div class="helpContainer">
        <h2>Attacking: {{ activePlayer }}</h2>
        <button @click="openModal" class="modalBtn">?</button>
      </div>
      <dialog ref="dialog">
        <button autofocus @click="closeModal">X</button>
        <Instructions />
      </dialog>
      <DiceSelectArea>
        <template
          v-for="(item, key) in players[activePlayerFormatted].chosenDice"
        >
          <button
            :class="{
              highlight:
                players[activePlayerFormatted].chosenDice[key].highlight,
            }"
            v-if="item.active"
            @click="
              highlightToggle(key, activePlayerFormatted),
                toggleDie(key, activePlayerFormatted, 'attackingDice')
            "
          >
            <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
          </button>
          <template v-else>
            <!-- Render inactive dice differently here -->
            <Dice
              :selectedDie="item.faceValue"
              :value="item.rollValue"
              class="inactive"
            />
          </template>
        </template>
      </DiceSelectArea>
    </div>

    <!-- Active Dice Field -->
    <!-- Attacking -->
    <div class="playField">
      <div class="activeDice">
        <div class="activeDiceSides left">
          <div class="diceContainer">
            <button class="attacking" v-for="(item, key) in attackingDice">
              <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
            </button>
          </div>
          <div class="total">
            <p>Total: {{ attackingTotal }}</p>
          </div>
        </div>
        <!-- Defending -->
        <div class="activeDiceSides right">
          <div class="diceContainer">
            <button class="defending" v-for="(item, key) in defendingDice">
              <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
            </button>
          </div>
          <div class="total">
            <p>Total: {{ defendingTotal }}</p>
          </div>
        </div>
      </div>

      <!-- Toggle and win check -->
      <div class="skipContinueContainer">
        <div class="buttonContainer">
          <button
            v-if="activeDiceCheck()"
            @click="
              inactiveDie(),
                checkWinner(),
                reRollDie(activeDieKeys),
                highlightReset(),
                toggleTurn(),
                resetAtackingDefending()
            "
          >
            Continue
          </button>
          <button
            v-if="Object.keys(attackingDice).length === 1"
            @click="
              reRollDie(activeDieKeys),
                highlightReset(),
                toggleTurn(),
                resetAtackingDefending()
            "
          >
            Skip
          </button>
        </div>
        <p v-if="Object.keys(attackingDice).length === 1">
          Skip to re-roll selected die
        </p>
      </div>
    </div>

    <!-- defending -->
    <div class="player defendingDiceBox">
      <h2>
        Defending:
        <span>
          {{ inactivePlayer }}
        </span>
      </h2>
      <DiceSelectArea>
        <template
          v-for="(item, key) in players[inactivePlayerFormatted].chosenDice"
        >
          <button
            :class="{
              highlight:
                players[inactivePlayerFormatted].chosenDice[key].highlight,
            }"
            v-if="item.active"
            @click="
              highlightToggle(key, inactivePlayerFormatted),
                toggleDie(key, inactivePlayerFormatted)
            "
          >
            <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
          </button>
          <template v-else>
            <!-- Render inactive dice differently here -->
            <Dice
              :selectedDie="item.faceValue"
              :value="item.rollValue"
              class="inactive"
            />
          </template>
        </template>
      </DiceSelectArea>
    </div>
  </section>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.playField {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.activeDice {
  display: flex;
  height: 100%;
}

.activeDiceSides {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.left {
  border-right: 1px solid gray;
}

.right {
  border-left: 1px solid gray;
}

.diceContainer {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  justify-content: space-around;
  align-items: center;
}

.diceContainer > button {
  width: clamp(60px, 100% / 3 - 2px, 100px);
}

@media (min-width: 909px) {
  .diceContainer > button {
    margin: 0 20px;
  }
}

.total {
  margin-top: auto;
}

.total > p {
  text-align: center;
}

.buttonContainer {
  display: flex;
  justify-content: space-around;
}

.buttonContainer > button {
  width: 40%;
}

.skipContinueContainer > p {
  text-align: center;
}

.helpContainer {
  position: relative;
}

h2 {
  display: inline;
  font-size: clamp(1rem, 1rem + 3vw, 2rem);
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 90vh;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: clamp(5px, 5px + 2vw, 25px);
  overflow: hidden;
}

dialog > button {
  position: absolute;
  right: 0;
  font-size: clamp(10px, 20px + 1vw, 50px);
}

dialog > section {
  padding: 0;
  border: none;
}

dialog::backdrop {
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}

.modalBtn {
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 3px;
  font-size: clamp(20px, 100%, 40px);
}

.highlight {
  box-sizing: border-box;
  background-color: rgb(177, 177, 177);
  border: 0.1rem solid rgb(71, 71, 71);
  border-radius: 5px;
  padding: 1.6px 4.6px;
}

@media (max-height: 664px) {
  .container {
    flex-direction: row;
  }

  .player {
    height: 100%;
    flex: 1 1 20%;
  }

  .playField {
    flex: 1 1 60%;
  }

  .defendingDiceBox {
    margin: 0;
  }

  .buttonContainer > button {
    font-size: clamp(20px, 100%, 30px);
  }
}
</style>

<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import Instructions from "./Instructions.vue";
import { storeToRefs } from "pinia";
import { usePlayersStore } from "../stores/players";
import { useAttackingDefendingDiceStore } from "../stores/attackingDefendingDice";
import { ref } from "vue";

// Define a ref for the dialog
const dialog = ref(null);

// Function to open the modal
const openModal = () => {
  dialog.value.showModal();
};

// Function to close the modal
const closeModal = () => {
  dialog.value.close();
};

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
  moveDiceToAttackingDefending,
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
    <!-- defending -->
    <div class="player">
      <h2>
        Defending:
        <span>
          {{ inactivePlayer }}
        </span>
      </h2>
      <DiceSelectArea class="defendingDiceBox">
        <template
          v-for="(item, key) in players[inactivePlayerFormatted].chosenDice"
        >
          <button
            v-if="item.active"
            @click="
              moveDiceToAttackingDefending(key, inactivePlayerFormatted),
                setInactiveDieKey(key)
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
    <div class="targetDiceBox">
      <!-- Attacking -->
      <div class="activeDice">
        <div class="activeDiceSides">
          <div class="diceContainer">
            <button
              class="attacking"
              v-for="(item, key) in attackingDice"
              @click="removeDie(attackingDice, key)"
            >
              <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
            </button>
          </div>
          <div class="total">
            <p>Total: {{ attackingTotal }}</p>
          </div>
        </div>
        <div class="divider"></div>
        <!-- Defending -->
        <div class="activeDiceSides">
          <div class="diceContainer">
            <button
              class="defending"
              v-for="(item, key) in defendingDice"
              @click="removeDie(defendingDice, key)"
            >
              <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
            </button>
          </div>
          <div class="total">
            <p>Total: {{ defendingTotal }}</p>
          </div>
        </div>
      </div>
      <!-- Toggle and win check -->
      <div class="buttonContainer">
        <button
          v-if="activeDiceCheck()"
          @click="
            inactiveDie(),
              checkWinner(),
              reRollDie(activeDieKeys),
              toggleTurn(),
              resetAtackingDefending()
          "
        >
          Continue
        </button>
        <button
          v-if="Object.keys(attackingDice).length === 1"
          @click="
            reRollDie(activeDieKeys), toggleTurn(), resetAtackingDefending()
          "
        >
          Skip
        </button>
      </div>
    </div>
    <!-- attacking -->
    <div class="player">
      <div class="attackingDiceBox">
        <h2>Attacking: {{ activePlayer }}</h2>
        <button @click="openModal" class="modalBtn">Instructions</button>
        <dialog ref="dialog">
          <button autofocus @click="closeModal">Close</button>
          <Instructions />
        </dialog>
        <DiceSelectArea>
          <template
            v-for="(item, key) in players[activePlayerFormatted].chosenDice"
          >
            <button
              v-if="item.active"
              @click="
                moveDiceToAttackingDefending(key, activePlayerFormatted),
                  setActiveDieKeys(key)
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
    </div>
  </section>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.activeDice {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.activeDiceSides {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.diceContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
}

.diceContainer > button {
  width: clamp(50px, 100% / 3 - 5px, 180px);
}

.total {
  margin-top: auto;
}

.total > p {
  text-align: center;
}

.divider {
  width: 5px;
  background-color: grey;
}

.attackingDiceBox {
  margin-top: auto;
}

.buttonContainer {
  display: flex;
  justify-content: space-around;
}

.buttonContainer > button {
  width: 40%;
}

h2 {
  display: inline-block;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90vh;
}

.modalBtn {
  display: inline-block;
  margin-left: 5%;
}
</style>

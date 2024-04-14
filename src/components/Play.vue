<script setup>
import Dice from "./Dice.vue";
import DiceSelectArea from "./DiceSelectArea.vue";
import { storeToRefs } from "pinia";
import { usePlayersStore } from "../stores/players";
import { useAttackingDefendingDiceStore } from "../stores/attackingDefendingDice";
import { computed } from "vue";

const playerStore = usePlayersStore();
const {
  players,
  activePlayer,
  activePlayerFormatted,
  inactivePlayer,
  inactivePlayerFormatted,
} = storeToRefs(playerStore);
const { toggleTurn, reRollDie } = playerStore;

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
  <!-- defending -->
  <DiceSelectArea>
    <h2>defending</h2>
    <h2>{{ inactivePlayer }}</h2>
    <div class="defendingDiceBox">
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
        <!-- Render inactive dice differently here -->
        <template v-else>
          <Dice
            class="inactive"
            :selectedDie="item.faceValue"
            :value="item.rollValue"
          />
        </template>
      </template>
    </div>
  </DiceSelectArea>

  <!-- Active Dice Field -->
  <div class="targetDiceBox">
    <div class="targetInstructions">
      <p>1 Attacking die must be larger than 1 defending die</p>
      <p>2+ Attacking die must be equal to 1 defending die</p>
      <p>Click active die to remove</p>
    </div>
    <div class="activeDice">
      <div class="attackingContainer">
        <button
          class="attacking"
          v-for="(item, key) in attackingDice"
          @click="removeDie(attackingDice, key)"
        >
          <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
        </button>
        <div class="total">
          <h2>Total</h2>
          <p>{{ attackingTotal }}</p>
        </div>
      </div>
      <div class="divider"></div>
      <div class="defendingContainer">
        <button
          class="defending"
          v-for="(item, key) in defendingDice"
          @click="removeDie(defendingDice, key)"
        >
          <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
        </button>
        <div class="total">
          <h2>Total</h2>
          <p>{{ defendingTotal }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- Now I need to create a button to make inactive die that lose -->
  <div class="buttonContainer">
    <button
      v-if="activeDiceCheck()"
      @click="
        inactiveDie(),
          reRollDie(activeDieKeys),
          toggleTurn(),
          resetAtackingDefending()
      "
    >
      Continue
    </button>
    <!-- Winning attacking die should reroll -->
  </div>
  <!-- attacking -->
  <DiceSelectArea>
    <h2>attacking</h2>
    <h2>{{ activePlayer }}</h2>
    <div class="attackingDiceBox">
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
    </div>
  </DiceSelectArea>
</template>

<style>
.defendingDiceBox {
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.targetDiceBox {
  background-color: blueviolet;
}
.targetInstructions {
  background-color: blue;
}
.activeDice {
  background-color: red;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.attackingDiceBox {
  background-color: brown;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>

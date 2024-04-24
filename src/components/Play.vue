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
  <section>
    <!-- defending -->
    <h2>Defending: {{ inactivePlayer }}</h2>
    <DiceSelectArea>
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
    </DiceSelectArea>

    <!-- Active Dice Field -->
    <div class="targetDiceBox">
      <div class="targetInstructions">
        <p>1 attack die > defend die || 2+ attack die = 1 defend die</p>
        <p>Click active die to remove || Click 1 die and skip to re-roll</p>
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
      <!-- Winning attacking die should reroll -->
    </div>
    <!-- attacking -->
    <h2>Attacking: {{ activePlayer }}</h2>
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
  </section>
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

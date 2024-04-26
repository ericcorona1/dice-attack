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
  <section class="container">
    <!-- defending -->
    <h2>Defending: {{ inactivePlayer }}</h2>
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
      <div class="activeDice">
        <div class="diceContainer">
          <button
            class="attacking"
            v-for="(item, key) in attackingDice"
            @click="removeDie(attackingDice, key)"
          >
            <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
          </button>
          <div class="total">
            <p>Total: {{ attackingTotal }}</p>
          </div>
        </div>
        <div class="divider"></div>
        <div class="diceContainer">
          <button
            class="defending"
            v-for="(item, key) in defendingDice"
            @click="removeDie(defendingDice, key)"
          >
            <Dice :selectedDie="item.faceValue" :value="item.rollValue" />
          </button>
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
    <div class="attackingDiceBox">
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
    </div>
  </section>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
}

.targetDiceBox {
  height: 40vh;
}

.activeDice {
  padding: 10% 0;
  display: flex;
  justify-content: space-evenly;
}

.diceContainer {
  width: 45%;
}

.diceContainer > button {
  width: clamp(50px, 50%, 100px);
}

.divider {
  width: 5px;
  background-color: grey;
}

.attackingDiceBox {
  margin-top: auto;
}
</style>

import { store } from "../stores/store";

// create a die
const extractMaxValueFromFaceValue = (faceValue) => {
  // Extract the number part from the string
  const numberString = faceValue.slice(1);

  // Parse the extracted number string to an integer
  const number = parseInt(numberString);

  // Return the parsed number
  return number;
};

const rollDie = (faceValue) => {
  const maxValue = extractMaxValueFromFaceValue(faceValue);
  return Math.floor(Math.random() * maxValue) + 1;
};

const createDie = (faceValue) => {
  const randomValue = rollDie(faceValue);
  const die = {
    faceValue: String,
    rollValue: Number,
  };
  die.faceValue = faceValue;
  die.rollValue = randomValue;
  return die;
};

// add die to player object
export const addDieToPlayer = (playerKey, faceValue) => {
  const player = store.players[playerKey];
  const chosenDiceCopy = [...player.chosenDice];
  // const chosenDiceKeys = Object.keys(chosenDiceCopy);
  if (chosenDiceCopy.length < 6) {
    const newDie = createDie(faceValue);
    chosenDiceCopy.push(newDie);
    player.chosenDice = chosenDiceCopy;
  } else {
    console.log("Maximum limit of dice reached.");
  }
};

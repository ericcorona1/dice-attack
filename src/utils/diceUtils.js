import { store } from "../store/store";

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
  console.log(`random value
  ---------------------------------------
  ${randomValue}`);
  return {
    faceValue: faceValue,
    rollValue: randomValue,
  };
};

// add die to player object
export const addDieToPlayer = (playerKey, faceValue) => {
  const player = store.players[playerKey];
  const chosenDiceCopy = { ...player.chosenDice };
  const chosenDiceKeys = Object.keys(chosenDiceCopy);
  if (chosenDiceKeys.length < 6) {
    const newDieKey = chosenDiceKeys.length + 1;
    chosenDiceCopy[newDieKey] = createDie(faceValue);
    player.chosenDice = chosenDiceCopy;
  } else {
    console.log("Maximum limit of dice reached.");
  }
};

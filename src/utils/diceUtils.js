import { store } from "../store/store";

// create a die
const extractMaxValueFromFaceValue = (faceValue) => {
      // Extract the number part from the string
  const numberString = faceValue.slice(1);

  // Parse the extracted number string to an integer
  const number = parseInt(numberString);

  // Return the parsed number
  return number;
}

const rollDie = (faceValue) => {
    const maxValue = extractMaxValueFromFaceValue(faceValue)
    Math.floor(Math.random() * (maxValue + 1))
}

const createDie = (faceValue) => {
    const randomValue = rollDie(faceValue);
    return {
        faceValue: faceValue,
        rollValue: randomValue
    }
}

// add die to player object
const addDieToPlayer = (playerKey, faceValue) => {
    const player = store.players[playerKey];
    const chosenDiceCopy = { ...player.chosenDice };
    console.log(`chosen dice copy:
    ${JSON.stringify(chosenDiceCopy)}
    ---------------------------------`);
    const chosenDiceKeys = Object.keys(chosenDiceCopy);
    console.log(`chosen dice keys - ${chosenDiceKeys}`);
    if (chosenDiceKeys.length < 6) {
      // Limiting to 6 dice
      const newDieKey = chosenDiceKeys.length + 1;
      console.log(`new die key - ${newDieKey}`);
      chosenDiceCopy[newDieKey] = createDie(
        faceValue,
      );
      player.chosenDice = chosenDiceCopy;
    } else {
      console.log("Maximum limit of dice reached.");
    }
  },
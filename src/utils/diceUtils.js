// import { usePlayersStore } from "../stores/players";

// create a die
const extractMaxValueFromFaceValue = (faceValue) => {
  // Extract the number part from the string
  const numberString = faceValue.slice(1);

  // Parse the extracted number string to an integer
  const number = parseInt(numberString);

  // Return the parsed number
  return number;
};

export const rollDie = (faceValue) => {
  const maxValue = extractMaxValueFromFaceValue(faceValue);
  return Math.floor(Math.random() * maxValue) + 1;
};

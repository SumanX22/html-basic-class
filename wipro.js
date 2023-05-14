// seperate words
// loop over the chars of the word to get the elements
// add the values of the elements
// concat

// preparation
const charsArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
const charMap = new Map();
charsArray.forEach((el, idx) => charMap.set(el, idx + 1));

// input string
const str = "WORLD Wide web".toUpperCase();

const words = str.split(" ");

const wordsNum = words.map((word) => {
  console.log(word);
  const charArr = word.split("");
  const wordLength = charArr.length;
  const halfLength = Math.ceil(wordLength / 2);

  let result = 0;

  charArr.slice(0, halfLength).forEach((char, idx) => {
    if (idx === halfLength - 1 && wordLength % 2 != 0) {
      result += charMap.get(char);
      console.log(charMap.get(char));
      return;
    }
    result += Math.abs(
      charMap.get(char) - charMap.get(charArr[wordLength - idx - 1])
    );
  });

  return result;
});

const finalOutput = wordsNum.join("");
console.log(finalOutput);

class Pangram {
  constructor(sentence) {
    this.sentence = sentence.toLowerCase();
    this.alphabetSize = 26;
  }

  collectUniqueLetters() {
    const isLetter = (character) => character.match(/[a-z]/) !== null;

    return this.sentence.split('').reduce(
      (letterSet, character) => isLetter(character)
        ? letterSet.add(character)
        : letterSet
      , new Set());
  }

  isPangram() {
    return this.collectUniqueLetters().size === this.alphabetSize;
  }
}

module.exports = Pangram;

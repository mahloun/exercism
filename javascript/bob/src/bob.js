class Bob {
  constructor() {
    this.reactions = [
      {
        shouldAnswerTo: statement => this.isYelling(statement),
        answer: 'Whoa, chill out!'
      },
      {
        shouldAnswerTo: statement => statement.substr(-1) === '?',
        answer: 'Sure.'
      },
      {
        shouldAnswerTo: statement => statement === '',
        answer: 'Fine. Be that way!'
      },
      {
        shouldAnswerTo: _ => true,
        answer: 'Whatever.'
      }
    ];
  }

  isYelling(statement) {
    const isLowerCaseLetter = letter => letter >= 'a' && letter <= 'z';
    const isUpperCaseLetter = letter => letter >= 'A' && letter <= 'Z';
    const isLetter = letter => isLowerCaseLetter(letter) || isUpperCaseLetter(letter);

    const haveOnlyUpperCaseLetters = statement => statement.split('').find(isLowerCaseLetter) === undefined;
    const haveLetters = statement => statement.split('').find(isLetter) !== undefined;

    return haveLetters(statement) && haveOnlyUpperCaseLetters(statement);
  }

  answerTo(statement) {
    return this.reactions.find(reaction => reaction.shouldAnswerTo(statement)).answer;
  }

  hey(statement) {
    return this.answerTo(statement.trim());
  }
}

module.exports = Bob;

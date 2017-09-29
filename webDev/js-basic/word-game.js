// Do not try to use any custom classes here
class Game {
  constructor() {
    Object.assign(this, {
      started: false,
      selectedDiffculty: '',
      answers: '',
      difficulties: {
        // 答案的长度必须一致，不然就是出题人脑子有病
        'this is silly': ['silly'],
        'easy and dumb': ['easy', 'dubm']
      },
      guessesCount: 0
    });
  }

  start(difficulty = 'this is silly') {
    this.selectedDiffculty = difficulty;
    this.guessesCount = 0;
    this.answers = this.difficulties[this.selectedDiffculty];

    return this.answers[0].length;
  }

  guess(input = '') {
    let word = input.toLowerCase();
    let matched = 0;
    let answersSplited = this.answers.map(e => e.split(''));
    let matchedAnswer;

    for (let $ of answersSplited) {
      matched = 0;
      const thisAnswer = $.join('');
      word.split('').forEach(e => {
        const i = $.indexOf(e);
        if (i > -1) {
          matched++;
          $.splice(i, 1);
        }
      });

      if (matched) {
        matchedAnswer = thisAnswer;
        break;
      }
    }

    const won = word === matchedAnswer;

    return (word && this.answers.some(e => e.length === word.length)) ? {
      matched,
      won,
      guesses: ++this.guessesCount,
      word: won ? matchedAnswer : undefined
    } : undefined;
  }

  guesses() {
    return this.guessesCount;
  }

  end() {
    this.started = false;
  }
}

module.exports = new Game();
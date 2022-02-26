export default class User {
  constructor(name, roundScore = 0, totalScore = 0, isPlaying = false) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
    this.isPlaying = isPlaying;
  }

  messageModalWinner() {
    return `${this.name} is the Winner !!!`;
  }
}

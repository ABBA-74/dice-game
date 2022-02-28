export default class User {
  constructor(name, roundScore = 0, totalScore = 0, isPlaying = false) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
    this.isPlaying = isPlaying;
  }

  resetScore() {
    this.roundScore = 0;
    this.totalScore = 0;
  }

  isTheWinner() {
    return this.totalScore >= 10;
  }
}

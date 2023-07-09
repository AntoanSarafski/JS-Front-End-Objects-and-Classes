function createGame() {
  let score = 0;

  return {
    inc: () => score++,
    get: () => console.log(score),
  };
}

const game = createGame();
game.get();
game.inc();
game.get();

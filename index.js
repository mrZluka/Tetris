import Game from "./src/game";

const game = new Game();
//додаємо об'єкт game в глобальний об'єкт window
window.game = game;

console.log(game);




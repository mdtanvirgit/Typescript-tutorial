import Player from "./classes/Player/Player.js";
const shakib = new Player('Shakib', 43, 'Bangladesh');
const Tamim = new Player('Tamim', 43, 'Bangladesh');
console.log(shakib.age, 'privet');
shakib.play();
const players = [];
players.push(shakib);
players.push(Tamim);
console.log(players);

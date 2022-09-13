/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coin2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Heads/tails", "./Coin2/costumes/Heads/tails.svg", {
        x: 49.68191964285717,
        y: 49.68191964285717
      })
    ];

    this.sounds = [];

    this.triggers = [];
  }
}

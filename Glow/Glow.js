/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Glow extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Glow/costumes/costume1.svg", {
        x: 16.045435000000026,
        y: 16.385606797831997
      }),
      new Costume("costume2", "./Glow/costumes/costume2.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Glow/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hideAll" },
        this.whenIReceiveHideall
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(0, 0);
    this.costume = "costume1";
    this.effects.ghost = 50;
    while (true) {
      this.moveBehind();
      this.size = 0;
      yield* this.wait(1);
      for (let i = 0; i < 100; i++) {
        this.size += 100;
        this.direction += 1;
        yield;
      }
      while (true) {
        this.direction += 1;
        this.size = 10000;
        yield;
      }
      yield;
    }
  }

  *whenIReceiveShowall() {
    this.visible = true;
  }

  *whenIReceiveHideall() {
    this.visible = false;
  }
}

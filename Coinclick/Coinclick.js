/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coinclick extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Coinclick/costumes/costume2.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume3", "./Coinclick/costumes/costume3.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume4", "./Coinclick/costumes/costume4.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume5", "./Coinclick/costumes/costume5.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume6", "./Coinclick/costumes/costume6.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume7", "./Coinclick/costumes/costume7.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume8", "./Coinclick/costumes/costume8.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume9", "./Coinclick/costumes/costume9.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("costume10", "./Coinclick/costumes/costume10.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume("0", "./Coinclick/costumes/0.svg", {
        x: 5.969997406005859,
        y: 15.981250000000017
      }),
      new Costume(".", "./Coinclick/costumes/..svg", {
        x: 2.979999542236328,
        y: 15.75
      }),
      new Costume("coin", "./Coinclick/costumes/coin.svg", {
        x: 43.16516516516518,
        y: 43.16516516516518
      })
    ];

    this.sounds = [new Sound("Meow", "./Coinclick/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "click" }, this.whenIReceiveClick),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.clone2 = 0;
    this.vars.Cloneid = 0;
  }

  *whenIReceiveClick() {
    if (this.vars.clone2 == 0) {
      yield* this.click();
    }
  }

  *startAsClone() {
    this.vars.clone2 = 1;
    this.visible = true;
    this.goto(this.random(-220, 71), 161);
    for (let i = 0; i < 20; i++) {
      this.direction += 3;
      this.y += -10;
      this.effects.ghost += 5;
      yield;
    }
    this.deleteThisClone();
  }

  *click() {
    this.stage.vars.myVariable += 1;
    if (this.stage.vars.myVariable > this.stage.vars.pi[1 - 1].length) {
      this.stage.vars.myVariable = 1;
    }
    this.costume = "coin";
    this.createClone();
    this.direction = this.random(1, 360);
  }

  *whenGreenFlagClicked() {
    this.vars.clone2 = 0;
    this.stage.vars.myVariable = 0;
  }
}

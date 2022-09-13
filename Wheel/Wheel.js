/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wheel extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("wheel", "./Wheel/costumes/wheel.svg", {
        x: 109.75074999999995,
        y: 109.83840500000002
      }),
      new Costume("extra", "./Wheel/costumes/extra.svg", {
        x: 109.75075000000001,
        y: 110.08134663485617
      })
    ];

    this.sounds = [new Sound("pop", "./Wheel/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "spin" }, this.whenIReceiveSpin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.stopcoin = 0;
    this.stage.vars.backshow = 0;
    this.goto(0, 0);
    this.stage.vars.spin = 0;
    this.visible = false;
    this.size = 100;
    this.direction = 90;
  }

  *whenIReceiveSpin() {
    this.broadcast("hide back");
    this.stage.vars.stopcoin = 1;
    this.visible = true;
    this.costume = "wheel";
    while (!(this.mouse.down && this.touching("mouse"))) {
      yield;
    }
    yield* this.wait(0);
    while (!!this.mouse.down) {
      yield;
    }
    this.stage.vars.spin = 1;
    this.stage.vars.backshow = 1;
    for (let i = 0; i < this.random(15, 25); i++) {
      this.direction += 15;
      yield;
    }
    for (let i = 0; i < this.random(25, 35); i++) {
      this.direction += 25;
      yield;
    }
    for (let i = 0; i < this.random(15, 25); i++) {
      this.direction += 35;
      yield;
    }
    for (let i = 0; i < this.random(15, 25); i++) {
      this.direction += 45;
      yield;
    }
    for (let i = 0; i < this.random(25, 35); i++) {
      this.direction += 35;
      yield;
    }
    for (let i = 0; i < this.random(15, 25); i++) {
      this.direction += 15;
      yield;
    }
    for (let i = 0; i < this.random(15, 25); i++) {
      this.direction += 5;
      yield;
    }
    for (let i = 0; i < this.random(15, 25); i++) {
      this.direction += 5;
      yield;
    }
    this.broadcast("sense");
    while (!!(this.stage.vars.sense == "")) {
      yield;
    }
    yield* this.wait(1);
    if (this.stage.vars.sense == "darkBlue") {
      this.stage.vars.money += 300;
    }
    if (this.stage.vars.sense == "purple") {
      this.stage.vars.money += 2000;
    }
    if (this.stage.vars.sense == "red") {
      0;
    }
    if (this.stage.vars.sense == "orange") {
      this.stage.vars.money += 1500;
    }
    if (this.stage.vars.sense == "yellow") {
      this.stage.vars.money += 1000;
    }
    if (this.stage.vars.sense == "green") {
      0;
    }
    if (this.stage.vars.sense == "lightBlue") {
      this.stage.vars.money += -100;
    }
    this.broadcast("showBack");
  }

  *whenIReceiveShowall() {
    this.visible = false;
  }

  *whenIReceiveShowall2() {
    this.visible = false;
  }
}

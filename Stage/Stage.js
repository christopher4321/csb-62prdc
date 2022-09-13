/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 240.8076923076923,
        y: 182.14701662041284
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.start = 0;
    this.vars.money = 0;
    this.vars.play = 0;
    this.vars.rank = 1;
    this.vars._ = 1;
    this.vars._2 = -1000;
    this.vars.show = 0;
    this.vars.frameshow = 0;
    this.vars.spin = 0;
    this.vars.sense = 0;
    this.vars.stopcoin = 0;
    this.vars.c = 1;
    this.vars.backshow = 0;
    this.vars.bet = 12;
    this.vars.answer = 0;
    this.vars.clones = 0;
    this.vars.clone = 0;
    this.vars.xv = -0.5639576361432995;
    this.vars.yv = -26.4154728502475;
    this.vars.x = -86.53378494178314;
    this.vars.y = -232.86533256064249;
    this.vars.dir = -254;
    this.vars.pi = [];

    this.watchers.money = new Watcher({
      label: "money",
      style: "large",
      visible: true,
      value: () => this.vars.money,
      x: 268,
      y: 178
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (
        this.keyPressed("" + "enter" + "") &&
        this.keyPressed("" + "+" + "") && this.keyPressed("c")
      ) {
        this.vars.money += 100;
      }
      if (
        this.keyPressed("" + "enter" + "") &&
        this.keyPressed("" + "_" + "") && this.keyPressed("c")
      ) {
        this.vars.money += -100;
      }
      if (
        this.keyPressed("" + "enter" + "") &&
        this.keyPressed("" + "^" + "") && this.keyPressed("c")
      ) {
        while (
          !!(
            this.keyPressed("" + "enter" + "") &&
            this.keyPressed("" + "^" + "") && this.keyPressed("c")
          )
        ) {
          yield;
        }
        this.vars.money += 100;
      }
      yield;
    }
  }
}

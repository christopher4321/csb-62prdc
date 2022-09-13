/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Levelup extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Levelup/costumes/1.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("press", "./Levelup/costumes/press.svg", {
        x: 51.546670000000006,
        y: 27.677840000000003
      })
    ];

    this.sounds = [new Sound("pop", "./Levelup/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hideAll" },
        this.whenIReceiveHideall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.c = 1;
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        if (
          this.touching("mouse") &&
          this.mouse.down &&
          (this.stage.vars.money > 350 || this.stage.vars.money == 350)
        ) {
          this.costume = "press";
          while (!!this.mouse.down) {
            yield;
          }
          this.costume = 1;
          if (this.stage.vars.money > 350 || this.stage.vars.money == 350) {
            this.stage.vars.money += -350;
            if (this.stage.vars.c == 1) {
              this.stage.vars.c = 2;
            } else {
              this.stage.vars.c += 2;
            }
          } else {
            this.broadcast("need money");
          }
        } else {
          this.costume = "press";
          while (!!this.mouse.down) {
            yield;
          }
          this.costume = 1;
          this.broadcast("need money");
        }
      }
      yield;
    }
  }

  *whenIReceiveHideall() {
    this.visible = false;
  }

  *whenIReceiveShowall() {
    this.visible = true;
  }
}

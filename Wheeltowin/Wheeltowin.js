/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wheeltowin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wheeltowin/costumes/costume1.svg", {
        x: 56.546670000000006,
        y: 32.67784
      }),
      new Costume("press", "./Wheeltowin/costumes/press.svg", {
        x: 51.546670000000006,
        y: 27.901549999999986
      })
    ];

    this.sounds = [new Sound("pop", "./Wheeltowin/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cointoss" },
        this.whenIReceiveCointoss
      ),
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

    this.vars.hide2 = 0;
  }

  *whenGreenFlagClicked() {
    this.goto(-100, 0);
    this.vars.hide2 = 0;
    this.visible = false;
    this.costume = "costume1";
    while (true) {
      if (this.vars.hide2 == 0 && this.stage.vars.show == 1) {
        this.visible = true;
        if (this.stage.vars.money == 500 || this.stage.vars.money > 500) {
          if (this.mouse.down && this.touching("mouse")) {
            this.costume = "press";
            while (!!this.mouse.down) {
              yield;
            }
            this.stage.vars.money += -500;
            this.costume = "costume1";
            this.broadcast("spin");
          }
        } else {
          if (this.mouse.down && this.touching("mouse")) {
            this.costume = "press";
            while (!!this.mouse.down) {
              yield;
            }
            this.costume = "costume1";
            this.broadcast("need money2");
          }
        }
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveCointoss() {
    this.visible = false;
    this.vars.hide2 = 1;
  }

  *whenIReceiveShowall() {
    this.visible = false;
  }

  *whenIReceiveHideall() {
    this.visible = true;
    this.vars.hide2 = 0;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cointoss extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cointoss/costumes/costume1.svg", {
        x: 56.546670000000006,
        y: 32.67784
      }),
      new Costume("press", "./Cointoss/costumes/press.svg", {
        x: 51.546670000000006,
        y: 27.901549999999986
      })
    ];

    this.sounds = [new Sound("pop", "./Cointoss/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "spin" }, this.whenIReceiveSpin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hideAll" },
        this.whenIReceiveHideall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cointoss" },
        this.whenIReceiveCointoss
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(60, 0);
    this.visible = false;
    this.costume = "costume1";
    this.stage.vars.show = 0;
    yield* this.main();
  }

  *whenIReceiveSpin() {
    this.visible = false;
    this.stage.vars.show = 0;
  }

  *whenIReceiveHideall() {
    yield* this.main();
    this.visible = true;
  }

  *whenIReceiveShowall() {
    this.visible = false;
  }

  *main() {
    while (true) {
      if (this.stage.vars.show == 1) {
        this.visible = true;
        if (this.stage.vars.money > 500 || this.stage.vars.money == 500) {
          if (this.mouse.down && this.touching("mouse")) {
            this.costume = "press";
            while (!!this.mouse.down) {
              yield;
            }
            this.broadcast("cointoss");
            this.costume = "costume1";
            this.stage.vars.show = 1;
            this.visible = false;
            return;
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
  }
}

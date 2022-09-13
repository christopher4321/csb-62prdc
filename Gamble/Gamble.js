/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gamble extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Gamble/costumes/costume1.svg", {
        x: 56.546670000000006,
        y: 32.67784
      }),
      new Costume("press", "./Gamble/costumes/press.svg", {
        x: 51.77037999999999,
        y: 27.901549999999986
      }),
      new Costume("costume2", "./Gamble/costumes/costume2.svg", {
        x: 56.546670000000006,
        y: 32.67784
      }),
      new Costume("press2", "./Gamble/costumes/press2.svg", {
        x: 51.77037999999999,
        y: 27.901549999999986
      })
    ];

    this.sounds = [new Sound("pop", "./Gamble/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "need money2" },
        this.whenIReceiveNeedMoney2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "cointoss" },
        this.whenIReceiveCointoss
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "coinTossDone" },
        this.whenIReceiveCointossdone
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showBack" },
        this.whenIReceiveShowback
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide back" },
        this.whenIReceiveHideBack
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.stage.vars.stopcoin = 0;
    this.broadcast("showAll");
    this.costume = "costume1";
    this.stage.vars.show = 0;
    yield* this.main();
  }

  *main() {
    while (true) {
      if (this.costume.name == "press" || this.costume.name == "costume1") {
        if (this.mouse.down && this.touching("mouse")) {
          this.costume = "press";
          while (!!this.mouse.down) {
            yield;
          }
          this.costume = "costume2";
          yield* this.wait(0.01);
          this.broadcast("hideAll");
          this.stage.vars.show = 1;
          yield* this.stopcoin();
        }
      } else {
        if (this.mouse.down && this.touching("mouse")) {
          this.costume = "press2";
          while (!!this.mouse.down) {
            yield;
          }
          this.costume = "costume1";
          yield* this.wait(0.01);
          this.stage.vars.show = 0;
          this.broadcast("showAll");
          yield* this.gocoin();
        }
      }
      yield;
    }
  }

  *whenIReceiveNeedMoney2() {
    yield* this.sayAndWait("You need more coins.", 2);
  }

  *stopcoin() {
    this.stage.vars.stopcoin = 1;
  }

  *gocoin() {
    this.stage.vars.stopcoin = 0;
  }

  *whenIReceiveCointoss() {
    this.visible = false;
  }

  *whenIReceiveCointossdone() {
    this.visible = true;
    yield* this.main();
  }

  *whenIReceiveShowback() {
    this.visible = true;
    yield* this.main();
  }

  *whenIReceiveHideBack() {
    this.visible = false;
  }
}

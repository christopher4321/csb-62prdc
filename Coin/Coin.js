/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Coin extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Basketball", "./Coin/costumes/Basketball.svg", {
        x: 123,
        y: 123
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "need money" },
        this.whenIReceiveNeedMoney
      ),
      new Trigger(Trigger.BROADCAST, { name: "god" }, this.whenIReceiveGod),
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked2)
    ];

    this.vars.hide = 0;
  }

  *emitMyself() {
    this.stage.vars.start = 0;
    this.size = 40;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.money = 0;
    this.visible = true;
    this.goto(0, 0);
    while (true) {
      this.size = 40;
      if (this.touching("mouse") && this.mouse.down) {
        this.size += -5;
        while (!!this.mouse.down) {
          yield;
        }
        this.stage.vars.clone = 0;
        this.size += 5;
      }
      yield;
    }
  }

  *whenIReceiveNeedMoney() {
    yield* this.sayAndWait("You need more coins.", 2);
  }

  *whenIReceiveGod() {
    yield* this.sayAndWait("You have the highest possible level. ", 2);
  }

  *whenIReceiveHideall() {
    this.stage.vars._2 = 0;
    this.visible = false;
  }

  *whenIReceiveShowall() {
    this.vars.hide = 0;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("message1");
    yield* this.emitMyself();
    this.stage.vars.money += this.stage.vars.c;
    this.broadcast("click");
  }

  *whenthisspriteclicked2() {}
}

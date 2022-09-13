/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WheelFrame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("frame ", "./WheelFrame/costumes/frame .svg", {
        x: 109.75074999999998,
        y: 110.08134663485616
      })
    ];

    this.sounds = [new Sound("pop", "./WheelFrame/sounds/pop.wav")];

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
    this.stage.vars.backshow = 0;
    this.goto(0, 0);
    this.stage.vars.spin = 0;
    this.visible = false;
    this.size = 100;
    this.direction = 90;
  }

  *whenIReceiveSpin() {
    this.visible = true;
    this.costume = "frame ";
    while (!(this.mouse.down && this.touching("mouse"))) {
      yield;
    }
    yield* this.wait(0);
    while (!!this.mouse.down) {
      yield;
    }
  }

  *whenIReceiveShowall() {
    this.visible = false;
  }

  *whenIReceiveShowall2() {
    this.visible = false;
  }
}

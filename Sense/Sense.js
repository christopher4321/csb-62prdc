/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sense extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("frame ", "./Sense/costumes/frame .svg", {
        x: 1.4999999999999716,
        y: 101.24606663485613
      })
    ];

    this.sounds = [new Sound("pop", "./Sense/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "spin" }, this.whenIReceiveSpin),
      new Trigger(Trigger.BROADCAST, { name: "sense" }, this.whenIReceiveSense),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind(1);
    this.stage.vars.sense = "";
    this.visible = false;
    this.size = 100;
    this.direction = 90;
  }

  *whenIReceiveSpin() {
    this.visible = true;
  }

  *whenIReceiveSense() {
    yield* this.wait(1);
    this.moveAhead(1);
    while (
      !(
        this.touching(Color.rgb(28, 0, 130)) ||
        this.touching(Color.rgb(141, 0, 128)) ||
          this.touching(Color.rgb(255, 0, 0)) ||
            this.touching(Color.rgb(255, 161, 0)) ||
              this.touching(Color.rgb(249, 255, 0)) ||
                this.touching(Color.rgb(66, 0, 255)) ||
                  this.touching(Color.rgb(0, 137, 0))
      )
    ) {
      yield;
    }
    if (this.touching(Color.rgb(28, 0, 130))) {
      this.stage.vars.sense = "darkBlue";
    }
    if (this.touching(Color.rgb(141, 0, 128))) {
      this.stage.vars.sense = "purple";
    }
    if (this.touching(Color.rgb(255, 0, 0))) {
      this.stage.vars.sense = "red";
    }
    if (this.touching(Color.rgb(255, 161, 0))) {
      this.stage.vars.sense = "orange";
    }
    if (this.touching(Color.rgb(249, 255, 0))) {
      this.stage.vars.sense = "yellow";
    }
    if (this.touching(Color.rgb(0, 137, 0))) {
      this.stage.vars.sense = "green";
    }
    if (this.touching(Color.rgb(66, 0, 255))) {
      this.stage.vars.sense = "lightBlue";
    }
  }

  *whenIReceiveShowall() {
    this.visible = false;
  }
}

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Rankbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Rankbutton/costumes/1.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("2", "./Rankbutton/costumes/2.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("3", "./Rankbutton/costumes/3.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("4", "./Rankbutton/costumes/4.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("5", "./Rankbutton/costumes/5.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("6", "./Rankbutton/costumes/6.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("7", "./Rankbutton/costumes/7.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("8", "./Rankbutton/costumes/8.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("9", "./Rankbutton/costumes/9.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("10", "./Rankbutton/costumes/10.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("11", "./Rankbutton/costumes/11.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("12", "./Rankbutton/costumes/12.svg", {
        x: 56.54666750000007,
        y: 32.6778381511202
      }),
      new Costume("press", "./Rankbutton/costumes/press.svg", {
        x: 51.546670000000006,
        y: 27.677840000000003
      })
    ];

    this.sounds = [new Sound("pop", "./Rankbutton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hideAll" },
        this.whenIReceiveHideall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hideAll" },
        this.whenIReceiveHideall2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "showAll" },
        this.whenIReceiveShowall
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "hideAll" },
        this.whenIReceiveHideall3
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars._ = 1;
    this.stage.vars.rank = 1;
    this.costume = 1;
    this.visible = true;
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        if (
          this.touching("mouse") &&
          this.mouse.down &&
          (this.stage.vars.money > 1000 || this.stage.vars.money == 1000)
        ) {
          this.costume = "press";
          while (!!this.mouse.down) {
            yield;
          }
          this.costume = this.stage.vars._ + 1;
          if (this.stage.vars.money > 1000 || this.stage.vars.money == 1000) {
            if (this.stage.vars.rank < 12) {
              this.stage.vars.rank += 1;
              this.stage.vars.money += this.stage.vars._2;
              this.stage.vars._ += 1;
            } else {
              this.broadcast("god");
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

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.costumeNumber == 1) {
        this.stage.vars._2 = -1000;
      }
      if (this.costumeNumber == 2) {
        this.stage.vars._2 = -2000;
      }
      if (this.costumeNumber == 3) {
        this.stage.vars._2 = -4000;
      }
      if (this.costumeNumber == 4) {
        this.stage.vars._2 = -8000;
      }
      if (this.costumeNumber == 5) {
        this.stage.vars._2 = -10000;
      }
      if (this.costumeNumber == 6) {
        this.stage.vars._2 = -14000;
      }
      if (this.costumeNumber == 7) {
        this.stage.vars._2 = -18000;
      }
      if (this.costumeNumber == 8) {
        this.stage.vars._2 = -20000;
      }
      if (this.costumeNumber == 9) {
        this.stage.vars._2 = -24000;
      }
      if (this.costumeNumber == 10) {
        this.stage.vars._2 = -26000;
      }
      if (this.costumeNumber == 11) {
        this.stage.vars._2 = -30000;
      }
      if (this.costumeNumber == 12) {
        this.stage.vars._2 = -40000;
      }
      yield;
    }
  }

  *whenIReceiveHideall() {
    this.visible = false;
  }

  *whenIReceiveHideall2() {
    this.visible = false;
  }

  *whenIReceiveShowall() {
    this.visible = true;
  }

  *whenIReceiveHideall3() {
    this.visible = false;
  }
}

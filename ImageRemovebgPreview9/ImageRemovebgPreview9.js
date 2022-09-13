/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ImageRemovebgPreview9 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./ImageRemovebgPreview9/costumes/1.svg", {
        x: 16.25,
        y: 19.25
      }),
      new Costume("2", "./ImageRemovebgPreview9/costumes/2.svg", {
        x: 16.24999999999997,
        y: 18.5
      }),
      new Costume("3", "./ImageRemovebgPreview9/costumes/3.svg", {
        x: 16,
        y: 19
      }),
      new Costume("4", "./ImageRemovebgPreview9/costumes/4.svg", {
        x: 16.250000000000057,
        y: 18.5
      }),
      new Costume("5", "./ImageRemovebgPreview9/costumes/5.svg", {
        x: 16.500000000000085,
        y: 18.75
      }),
      new Costume("6", "./ImageRemovebgPreview9/costumes/6.svg", {
        x: 16.5,
        y: 19
      }),
      new Costume("7", "./ImageRemovebgPreview9/costumes/7.svg", {
        x: 16.5,
        y: 19.5
      }),
      new Costume("8", "./ImageRemovebgPreview9/costumes/8.svg", {
        x: 16.25,
        y: 18.75
      }),
      new Costume("9", "./ImageRemovebgPreview9/costumes/9.svg", {
        x: 16.25,
        y: 19
      }),
      new Costume("10", "./ImageRemovebgPreview9/costumes/10.svg", {
        x: 16.50000000000003,
        y: 19
      }),
      new Costume("11", "./ImageRemovebgPreview9/costumes/11.svg", {
        x: 16.50000000000003,
        y: 19
      }),
      new Costume("12", "./ImageRemovebgPreview9/costumes/12.svg", {
        x: 16.5,
        y: 19
      }),
      new Costume("costume1", "./ImageRemovebgPreview9/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [];

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
    this.costume = 1;
    this.goto(-217, -153);
    this.moveAhead();
    this.visible = true;
    while (true) {
      this.costume = this.stage.vars.rank;
      if (this.touching("mouse")) {
        yield* this.sayAndWait(
          "" + "You are at Rank " + this.stage.vars.rank,
          1
        );
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

/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HeadsTails2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Heads/tails", "./HeadsTails2/costumes/Heads/tails.svg", {
        x: 49.68191964285717,
        y: 49.68191964285717
      }),
      new Costume("Heads", "./HeadsTails2/costumes/Heads.svg", {
        x: 60.006588351197934,
        y: 111.20400613470122
      }),
      new Costume("Heads2", "./HeadsTails2/costumes/Heads2.svg", {
        x: 60.00658999999999,
        y: 111.203815
      }),
      new Costume("Heads3", "./HeadsTails2/costumes/Heads3.svg", {
        x: 60.006588351197934,
        y: 111.20381613470123
      }),
      new Costume("Tails", "./HeadsTails2/costumes/Tails.svg", {
        x: 49.68191716529796,
        y: 108.41968307807838
      }),
      new Costume("Tails2", "./HeadsTails2/costumes/Tails2.svg", {
        x: 49.68191366129798,
        y: 108.41968807807838
      }),
      new Costume("Tails3", "./HeadsTails2/costumes/Tails3.svg", {
        x: 49.68191366129798,
        y: 108.41968807807838
      }),
      new Costume("words", "./HeadsTails2/costumes/words.svg", {
        x: 162.35319266378477,
        y: 35.27938591273943
      }),
      new Costume("words2", "./HeadsTails2/costumes/words2.svg", {
        x: 220.01121710522733,
        y: 35.27954591273942
      })
    ];

    this.sounds = [];

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
        { name: "repeat " },
        this.whenIReceiveRepeat
      )
    ];

    this.vars.random1 = 1;
    this.vars.random2 = 2;
    this.vars.random3 = "heads";
    this.vars.headsTails = 0;
    this.vars.update = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.answer = 0;
    this.goto(0, 0);
  }

  *whenIReceiveCointoss() {
    this.moveAhead();
    this.costume = "words";
    this.visible = true;
    this.broadcast("repeat ");
  }

  *whenIReceiveShowall() {
    this.visible = false;
  }

  *whenIReceiveRepeat() {
    yield* this.askAndWait("");
    this.stage.vars.answer = this.answer;
    this.vars.headsTails = 0;
    if (
      this.stage.vars.answer == "heads" ||
      this.stage.vars.answer == "tails" ||
        this.stage.vars.answer == "Heads" || this.stage.vars.answer == "Tails"
    ) {
      yield* this.encode();
      this.costume = "Heads/tails";
      for (let i = 0; i < 5; i++) {
        yield* this.selectrandomnumber();
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          yield* this.selectrandomnumber();
          yield;
        }
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += -10;
          yield* this.selectrandomnumber();
          yield;
        }
        yield;
      }
      if (this.vars.random3 == this.stage.vars.answer) {
        if (this.vars.random3 == "heads") {
          this.costume = "Heads3";
          this.stage.vars.money += 500;
        }
        if (this.vars.random3 == "tails") {
          this.costume = "Tails3";
          this.stage.vars.money += 500;
        }
      } else {
        if (this.vars.random3 == "heads") {
          this.costume = "Heads2";
          this.stage.vars.money += -500;
        }
        if (this.vars.random3 == "tails") {
          this.costume = "Tails2";
          this.stage.vars.money += -500;
        }
      }
      this.broadcast("coinTossDone");
    } else {
      this.costume = "words2";
      this.broadcast("repeat ");
    }
  }

  *selectrandomnumber() {
    this.vars.random3 = this.random(2, 1);
    this.vars.random2 = this.random(2, 1);
    this.vars.random1 = this.random(1, 2);
    if (this.vars.random3 == 1) {
      this.vars.random3 = "heads";
    }
    if (this.vars.random3 == 2) {
      this.vars.random3 = "tails";
    }
  }

  *encode() {
    if (this.stage.vars.answer == "heads") {
      this.stage.vars.answer = "heads";
    }
    if (this.stage.vars.answer == "tails") {
      this.stage.vars.answer = "tails";
    }
    if (this.stage.vars.answer == "Heads") {
      this.stage.vars.answer = "heads";
    }
    if (this.stage.vars.answer == "Tails") {
      this.stage.vars.answer = "tails";
    }
  }
}

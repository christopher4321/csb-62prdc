import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Coin2 from "./Coin2/Coin2.js";
import Coin from "./Coin/Coin.js";
import Glow from "./Glow/Glow.js";
import Rankbutton from "./Rankbutton/Rankbutton.js";
import Gamble from "./Gamble/Gamble.js";
import Wheeltowin from "./Wheeltowin/Wheeltowin.js";
import Cointoss from "./Cointoss/Cointoss.js";
import Wheel from "./Wheel/Wheel.js";
import WheelFrame from "./WheelFrame/WheelFrame.js";
import Sense from "./Sense/Sense.js";
import ImageRemovebgPreview9 from "./ImageRemovebgPreview9/ImageRemovebgPreview9.js";
import Levelup from "./Levelup/Levelup.js";
import HeadsTails2 from "./HeadsTails2/HeadsTails2.js";
import Coinclick from "./Coinclick/Coinclick.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Coin2: new Coin2({
    x: -225,
    y: 166,
    direction: 90,
    costumeNumber: 1,
    size: 25,
    visible: true,
    layerOrder: 10
  }),
  Coin: new Coin({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 12
  }),
  Glow: new Glow({
    x: 0,
    y: 0,
    direction: -82,
    costumeNumber: 1,
    size: 1598.376215568765,
    visible: true,
    layerOrder: 1
  }),
  Rankbutton: new Rankbutton({
    x: 178,
    y: 145,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Gamble: new Gamble({
    x: 200,
    y: -152,
    direction: 90,
    costumeNumber: 1,
    size: 60,
    visible: true,
    layerOrder: 4
  }),
  Wheeltowin: new Wheeltowin({
    x: -100,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6
  }),
  Cointoss: new Cointoss({
    x: 60,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Wheel: new Wheel({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7
  }),
  WheelFrame: new WheelFrame({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8
  }),
  Sense: new Sense({
    x: 2,
    y: -2,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2
  }),
  ImageRemovebgPreview9: new ImageRemovebgPreview9({
    x: -217,
    y: -153,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 14
  }),
  Levelup: new Levelup({
    x: 178,
    y: 78,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  HeadsTails2: new HeadsTails2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false,
    layerOrder: 11
  }),
  Coinclick: new Coinclick({
    x: -117,
    y: 161,
    direction: 25,
    costumeNumber: 12,
    size: 60,
    visible: false,
    layerOrder: 13
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;

import { Client1 } from "./js/Client/index.js";
import { Grid1 } from "./js/Display/index.js";

new Client1(
  new WebSocket("ws://localhost:9898/"),
  new Grid1(document),
  true
);

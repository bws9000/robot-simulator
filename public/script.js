import Client from "./js/Client.js";
import Display from "./js/Display.js";
const client = new Client(
  new WebSocket("ws://localhost:9898/"),
  new Display(document),
  true
);
//document.body.innerHTML = client.display.getGrid();

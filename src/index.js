"use strict";

import Robot from "./wsdata/RobotData";
const robot = new Robot();

//display
import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));

//websocket
import { createServer } from "http";
import { server as WebSocketServer } from "websocket";
const server = createServer();
server.listen(9898);
const ws = new WebSocketServer({
  httpServer: server,
});

ws.on("request", function (req) {
  const conn = req.accept(null, req.origin);
  conn.on("message", function (message) {
    //console.log("message: " + message);
    robot.recieved(message.utf8Data);
    conn.sendUTF(robot.sendObjectToDisplay());
  });
  conn.on("close", function (code, desc) {
    console.log("client connection closed " + code + " " + desc);
  });
});

function isActive() {
  if (!robot.active) console.log("activate me");
  return robot.active;
}
function checkBounds(x, y) {
  if (x < 0 || y < 0) return false;
  if (x > robot.bounds || y > robot.bounds) return false;
  return true;
}
function robotMove(x, y) {
  if (!isActive()) return;
  if (checkBounds(x, y)) {
    robot.Position = { x: x, y: y };
  } else {
    console.log("out of bounds");
  }
}
function robotCommand(command) {
  let x = robot.Position.x;
  let y = robot.Position.y;
  let xpos = 0;
  let ypos = 0;

  switch (command) {
    case "activate":
      robot.active = true;
      robot.Position = { x: 0, y: 0 };
      console.log("Robot Activated. ( refresh browser at localhost:3000");
      break;
    case "move up":
      ypos = y + 1;
      robotMove(x, ypos);
      break;
    case "move down":
      ypos = y - 1;
      robotMove(x, ypos);
      break;
    case "move left":
      xpos = x - 1;
      robotMove(xpos, y);
      break;
    case "move right":
      xpos = x + 1;
      robotMove(xpos, y);
      break;
    default:
      console.log("\ni don't understand,");
      console.log("here's a list of commands:");
      console.log("activate \nmove (up,down,left,right)");
  }
}
const stdin = process.openStdin();
stdin.addListener("data", (nugget) => {
  let data = nugget.toString().trim();
  robotCommand(data);
});
app.listen(port, () => console.log(`listening on port ${port}`));

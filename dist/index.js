'use strict';

var _RobotData = _interopRequireDefault(require("./wsdata/RobotData"));

var _express = _interopRequireDefault(require("express"));

var _http = require("http");

var _websocket = require("websocket");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var robot = new _RobotData["default"](); //display

var app = (0, _express["default"])();
var port = 3000;
app.use(_express["default"]["static"]('public')); //websocket

var server = (0, _http.createServer)();
server.listen(9898);
var ws = new _websocket.server({
  httpServer: server
});
ws.on('request', function (req) {
  var conn = req.accept(null, req.origin);
  conn.on('message', function (message) {
    robot.recieved(message.utf8Data);
    conn.sendUTF(robot.sendObject());
  });
  conn.on('close', function (code, desc) {
    console.log('client connection closed ' + code + ' ' + desc);
  });
});
var stdin = process.openStdin();
stdin.addListener('data', function (nugget) {
  var data = nugget.toString().trim();

  if (data === 'activate') {
    robot.active = true;
    robot.startPosition = {
      x: 0,
      y: 0
    };
  }

  if (data === 'move forward') {
    robot.startPosition = {
      x: 0,
      y: 1
    };
  }
});
app.listen(port, function () {
  return console.log("listening on port ".concat(port));
});
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Robot = /*#__PURE__*/function () {
  function Robot() {
    _classCallCheck(this, Robot);

    this.obj = {};
    this.message = '';
    this.active = false;
    this.testRandom = Math.floor(Math.random() * 25);
    this.gridBlock = 0;
    this.startPosition = {
      x: 0,
      y: 0
    };
  }

  _createClass(Robot, [{
    key: "recieved",
    value: function recieved(msg) {
      this.message = msg;
      return this.message;
    }
  }, {
    key: "sendString",
    value: function sendString() {
      return this.message;
    }
  }, {
    key: "sendObject",
    value: function sendObject() {
      this.obj.active = this.active;
      this.obj.message = this.message;
      this.obj.activeArea = this.testRandom;
      this.obj.startPosition = this.startPosition;
      this.obj.gridBlock = this.gridBlock;
      return JSON.stringify(this.obj);
    }
  }]);

  return Robot;
}();

exports["default"] = Robot;
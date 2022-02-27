'use strict';

export default class Robot {

  constructor() {
    this.obj = {};
    this.message = '';
    this.active = false;
    this.testRandom = Math.floor(Math.random() * 25);
    this.gridBlock = 0;
    this.bounds = 4;
    this.Position = {
      x: 0,
      y: 0
    }
  }

  recieved(msg) {
    this.message = msg;
    return this.message;
  }
  sendString() {
    return this.message;
  }
  sendObjectToDisplay() {
    this.obj.active = this.active;
    this.obj.message = this.message;
    this.obj.activeArea = this.testRandom;
    this.obj.Position = this.Position;
    this.obj.gridBlock = this.gridBlock;
    this.obj.bounds = this.bounds;
    return JSON.stringify(this.obj);
  }

}
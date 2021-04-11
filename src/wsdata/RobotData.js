'use strict';

export default class Robot {

  constructor() {
    this.obj = {};
    this.message = '';
    this.active = false;
    this.testRandom = Math.floor(Math.random() * 25);
    this.gridBlock = 0;
    this.startPosition = {
      x:0,
      y:0
    }
  }


  recieved(msg) {
    this.message = msg;
    return this.message;
  }
  sendString() {
    return this.message;
  }
  sendObject() {
    this.obj.active = this.active;
    this.obj.message = this.message;
    this.obj.activeArea = this.testRandom;
    this.obj.startPosition = this.startPosition;
    this.obj.gridBlock = this.gridBlock;
    return JSON.stringify(this.obj);
  }
  
}
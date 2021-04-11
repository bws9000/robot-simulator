'use strict';

import Robot from './wsdata/RobotData';
const robot = new Robot();

//display
import express from 'express';
const app = express();
const port = 3000;
app.use(express.static('public'))

//websocket
import { createServer } from 'http';
import { server as WebSocketServer } from 'websocket';
import DataFilter from './wsdata/RobotData';
const server = createServer();
server.listen(9898);
const ws = new WebSocketServer({
    httpServer: server
});

ws.on('request', function (req) {

    const conn = req.accept(null, req.origin);

    conn.on('message', function (message) {
        robot.recieved(message.utf8Data);
        conn.sendUTF(robot.sendObject());
    });
    conn.on('close', function (code, desc) {
        console.log('client connection closed ' + code + ' ' + desc);
    });

});

const stdin = process.openStdin();
stdin.addListener('data', (nugget) => {
    let data = nugget.toString().trim();
    if(data === 'activate'){
        robot.active = true;
        robot.startPosition = {x:0,y:0};
    }
    if(data === 'move forward'){
        robot.startPosition = {x:0,y:1};
    }
});


app.listen(port, () => console.log(`listening on port ${port}`));
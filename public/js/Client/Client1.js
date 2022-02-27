class Client1 {

    constructor(ws, display, log) {
        this.display = display;
        this.log = log;
        this.ws = ws;
        this.display;

        ws.onopen = () => {
            var message = { message: "ws connected." };
            this.ws.send(JSON.stringify(message));
        };

        ws.onmessage = function (e) {
            let robot = JSON.parse(e.data);
            display.clear();

            if (robot.active) {
                let x = robot.Position.x;
                let y = robot.Position.y;
                display.activateBlock(x, y);
            }
        };

        setInterval(() => {
            let msg = { message: "give me data" };
            ws.send(JSON.stringify(msg)); //heartbeat
            display.test++;
            display.updateDisplay();
        }, 500);

        this.dev();
    }

    dev() {
        if (this.log) {
            console.log(this.ws);
        }
    }
}

export default Client1;
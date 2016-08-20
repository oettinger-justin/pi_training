var Gpio = require('pigpio').Gpio;

let blueled = new Gpio(18, { mode: Gpio.OUTPUT });
let redled = new Gpio(25, { mode: Gpio.OUTPUT });
let whiteled = new Gpio(12, { mode: Gpio.OUTPUT });
let greenled = new Gpio(21, { mode: Gpio.OUTPUT });

let a = 0;
let c = 0;
let b = false;

setInterval(write, (60/(190*2)));

function write(x) {
    if (c < 4) {
        c++;
    }
    else {
        c = 0;
    }
    blueled.digitalWrite(condswitch(18));
    redled.digitalWrite(condswitch(25));
    whiteled.digitalWrite(condswitch(12));
    greenled.digitalWrite(condswitch(21));
}

function condswitch(x) {
    if (x === 12) {
        if (a === 0) {
            a = 1;
            return 0;
        }
        else {
            a = 0;
            return 1;
        }
    }
    if (x === 18) {
        if ((c % 2) === 0) {
            return 1;
        }
        else if ((c % 5) === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (x === 21) {
        if (Math.round(Math.sqrt(c)) === (Math.sqrt(c))) {
            return 1;
        }
        else if ((c % 5) === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (x === 25) {
        if ((c % 3) === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
};

/*
function condswitch(x) {
    if (x === 18) {
        if (c === 0) {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (x === 25) {
        if (c === 1) {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (x === 12) {
        if (c === 2) {
            return 1;
        }
        else {
            return 0;
        }
    }
    if (x === 21) {
        if (c === 3) {
            return 1;
        }
        else {
            return 0;
        }
    }
}
*/
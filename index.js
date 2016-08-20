var gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM);

gpio.setup(18, gpio.DIR_OUT, setInterval.bind(null, write.bind(null, 18), 791));
gpio.setup(25, gpio.DIR_OUT, setInterval.bind(null, write.bind(null, 25), 791));
gpio.setup(12, gpio.DIR_OUT, setInterval.bind(null, write.bind(null, 12), 791));
gpio.setup(21, gpio.DIR_OUT, setInterval.bind(null, write.bind(null, 21), 791));

let c = 0;
let b = false;

function write(x) {
    a = c;
    c = c++
    gpio.write(x, condswitch(x), function (err) {
        if (err) throw err;
    });
}

function condswitch(x) {
    if (x === 12) {
        return (b = !b);
    }
    if (x === 18) {
        if ((c % 2) === 0) {
            return true;
        }
        else if ((c % 5) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    if (x === 21) {
        if (Math.round(Math.sqrt(c)) === (Math.sqrt(c))) {
            return true;
        }
        else if ((c % 5) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    if (x === 25) {
        if ((c % 3) === 0) {
            return true;
        }
        else {
            return false;
        }
    }
};
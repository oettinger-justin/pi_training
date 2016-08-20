var gpio = require('rpi-gpio');

gpio.setMode(gpio.MODE_BCM);

gpio.setup(18, gpio.DIR_OUT, setInterval.bind(null, write, 1000));

let i = true

function write() {
    gpio.write(18, i, function (err) {
        if (err) throw err;
        console.log('Written to pin');
        if (i === true) {
            i = false;
        }
        else {
            i = true;
        }
    });
}
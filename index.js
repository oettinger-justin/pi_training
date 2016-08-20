var gpio = require('rpi-gpio');

gpio.setup(18, gpio.DIR_OUT, write);

setInterval(write, 2500)
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
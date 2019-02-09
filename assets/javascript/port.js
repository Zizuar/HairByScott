/*jshinSt esversion: 6 */

// package requirements for all modules.
var $ = require("jquery");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var Countdown = require('countdown-js');
const Parallax = require('parallax-js');
// var parallax = require('parallax-js');

// require("jsdom").env("", function(err, window) {
//     if (err) {
//         console.error(err);
//         return;
//     }
 
//     var $ = require("jquery")(window);
// });

// Other site variables not needing definition later in File.
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

$(document).ready();
// Additional code for specific parameters on site in addition to npm files
var ten_days = 1000 * 60 * 60 * 24 * 10;
var end = new Date(new Date().getTime() + ten_days);

var timer = Countdown.timer(end, function(timeLeft) {
    console.log(timeLeft);
    console.log(timeLeft.days);
    console.log(timeLeft.hours);
    console.log(timeLeft.minutes);
    console.log(timeLeft.seconds);
  }, function() {
    console.log("Countdown Finished!");
  });





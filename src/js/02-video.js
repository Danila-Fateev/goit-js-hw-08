const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

var throttle = require('lodash.throttle');

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on('timeupdate', throttle(getTime, 1000));




player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {  
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});




function getTime() {
player.getCurrentTime().then(function(seconds) {
    localStorage.setItem("videoplayer-current-time", seconds);
}).catch(function(error) {
console.log(error);
});
}
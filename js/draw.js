function update() {
    //
}

var x = 0;

function draw() {
    
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(10,10,50,50); // x, y, width, height
        ctx.fillStyle = "rgba(0,0,200,0.5)"
        ctx.fillRect(x,30,50,50);
    }
    x += 1;

}








var mainloop = function() {
    update();
    draw();
};


$(document).ready(function() {
    var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;

    if (animFrame !== null) {
        var canvas = $('canvas1').get(0);

        var recursiveAnim = function() {
            mainloop();
            animFrame(recursiveAnim, canvas);
        };

        // start the mainloop
        animFrame(recursiveAnim, canvas);
    } else {
        var ONE_FRAME_TIME = 1000.0 / 60.0 ;
        setInterval(mainloop, ONE_FRAME_TIME);
    }
});
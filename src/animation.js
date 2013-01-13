goog.provide("owntra.Animation");

/**
 * Animation class
 * @constructor
 * @param {Integer} row    the row of the animation frames
 * @param {Integer} frames the number of frames
 * @param {Integer} speed  the speed of the animation
 * @param {Boolean} loop   if the animation should loop 
 */
owntra.Animation = function(row, frames, speed, loop) {
    this.row = row;
    this.frames = frames;
    this.speed = speed; // frames/second
    this.loop = loop;
    this.currentFrame = 0;
    this.lastTime = 0;
    this.running = true;
};

/**
 * Runs every time the frame needs to be updated
 */
owntra.Animation.prototype.tick = function() {
    var d = new Date();
    if (d.getMilliseconds - this.lastTime >= 1000 / this.speed && this.running) { // time difference >= delay between frames
        this.currentFrame++;
        if (this.currentFrame > this.frames) { // looping
            if (this.loop)
                this.currentFrame = 0;
            else
                this.running = false;
        }
        this.lastTime = d.getMilliseconds;
    }
};

owntra.Animation.prototype.stop = function() {
    this.running = false;
};
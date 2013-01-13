goog.provide("owntra.Animation");

/**
 * Animation class
 * @constructor
 * @param {Integer} row    row of the animation frames
 * @param {Integer} frames number of frames
 * @param {Integer} speed  speed of the animation
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

/**
 * Stops the animation
 * @return {Boolean} false if already stopped, true otherwise
 */
owntra.Animation.prototype.stop = function() {
    if (this.running)
        this.running = false;
        return true
    else
        return false; // already stopped
};

/**
 * Runs the animation
 * @return {Boolean} false if already running, true otherwise
 */
owntra.Animation.prototype.run = function() {
    if (!this.running)
        return this.running = true;
    else
        return false; // already running
};
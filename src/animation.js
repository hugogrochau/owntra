define(function () {

    var Animation = Class.extend({

        init: function (row, frames, speed) {
            this.row = row;
            this.frames = frames;
            this.speed = speed; // frames/second

            this.currentFrame = 0;
            this.lastTime;
        },

        tick: function() {
            var d = new Date();
            if (d.getMilliseconds - this.lastTime >= 1000 / this.speed) { // time difference >= delay between frames
                this.currentFrame++;
                if (this.currentFrame > this.frames) { // looping
                    this.currentFrame = 0;
                }
                this.lastTime = d;
            }
        }

    });

    return Animation;
});
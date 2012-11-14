define(["animation"], function(Animation) {

    var Sprite = Class.extend({

        /**
         * @constructor
         * Initializes the Sprite class
         * @param {Integer} id the Sprite Id
         */
        init: function(id) {
            this.id = id;

            this.image;
            this.width;
            this.height;
            this.position = {
                x: 0,
                y: 0
            };
        },

        /**
         * Loads the image and the data about the sprite from its JSON file
         */
        load: function() {
            this.image = new Image();
            this.image.src = "../sprites/images/" + this.id + ".png";
            var data;
            define(["text!../sprites/properties/" + this.id + ".json"], function(properties) {
                data = JSON.parse(properties);
            });
            this.width = data.width;
            this.height = data.height;
            if (this.animations !== 'undefined') {
                this.loadAnimations(data.animations);
            }
        },

        /**
         * Loads and caches all the animation information from the JSON
         * @param  {Array<Object>} data The information of each different animation
         */
        loadAnimations: function(data) {
            for(var animation in data) {
                this.animations.push([animation.name, new Animation(animation.row, animation.frames), animation.speed]);
            }
        },

        /**
         * Draws the spliced sprite according to the current animation frame
         * @param {CanvasRenderingContext2D} ctx The canvas 2D context
         */
        draw: function(ctx) {
            // s = Source Image, d = Destination Canvas
            // Image, sX, sY, sWidth, sHeight, dX, dY, dWidth, dHeight
            // -------------------
            // |    |sY          |
            // |    v    sWidth  |
            // |--> -------------| ^
            // |sX  |            | |
            // |    |   Image    | |sHeight
            // |    |            | |
            // ------------------- v
            
            var animation = this.currentAnimation;
            if (animation !== 'undefined') {
                ctx.drawImage(this.image, this.animations[animation].currentFrame * this.width, this.animations[animation].row * this.height, this.width, this.height, this.position.x, this.position.y, this.width, this.height);
            } else {
                ctx.drawImage(this.image, 0, 0, this.width, this.height, this.position.x, this.position.y, this.width, this.height); //assuming the first frame will be static if there are no animations
            }
        },

        /**
         * Changes the current animation
         * @param {String} name the name of the animation
         */
        setAnimation: function(name) {
            this.currentAnimation = name;
        },

        /**
         * Changes the position of the sprite in the canvas
         * @param {Integer} x
         * @param {Integer} y
         */
        setPosition: function(x, y) {
            this.position.x = x;
            this.position.y = y;
        }

    });

    return Sprite;

});
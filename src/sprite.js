goog.provide('owntra.Sprite');

goog.require('owntra.Animation');
goog.require('goog.json');

/**
 * Initializes the Sprite class
 * @constructor
 * @param {Integer} id the Sprite Id
 */
owntra.Sprite = function(id) {
    this.id = id;
    this.position = {
        x: 0,
        y: 0
    };
    this.load();
};

/**
 * Loads the image and the data about the sprite from its JSON file
 */
owntra.Sprite.prototype.load = function() {
    this.image = new Image();
    this.image.src = owntra.staticURL + 'sprites/' + this.id + '.png';
    var spriteInfo = goog.JSON.unsafeParse(null); //TODO: load and/or cache JSON properties files
    this.width = spriteInfo.width;
    this.height = spriteInfo.height;
    if (spriteInfo.animations)
        this.loadAnimations(spriteInfo.animations);
};

/**
 * Loads and caches all the animation information from the JSON
 * @param {Array<Object>} animationsInfo Information of each animation
 */
owntra.Sprite.prototype.loadAnimations = function(animationsInfo) {
    for(var animation in animationsInfo) {
        this.animations.push([animation.name, 
                              new Animation(animation.row, 
                                            animation.frames, 
                                            animation.speed, 
                                            animation.loop ? animation.loop : false)]); // loop defaults to false
    }
};

/**
 * Draws the spliced sprite according to the current animation frame
 * @param {CanvasRenderingContext2D} ctx
 */
owntra.Sprite.prototype.draw = function(ctx) {
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
    
    if (this.currentAnimation) {
        var animation = this.animations[this.currentAnimation];
        animation.tick();
        ctx.drawImage(this.image,
                      animation.currentFrame * this.width,
                      animation.row * this.height,
                      this.width,
                      this.height,
                      this.position.x,
                      this.position.y,
                      this.width,
                      this.height);
    } else
        ctx.drawImage(this.image,
                      0,
                      0,
                      this.width,
                      this.height,
                      this.position.x,
                      this.position.y,
                      this.width,
                      this.height); 
};

/**
 * Changes the current animation
 * @param {String} name the name of the animation
 */
owntra.Sprite.prototype.setAnimation = function(name) {
    this.currentAnimation = name;
};

/**
 * Changes the position of the sprite in the canvas
 * @param {Integer} x
 * @param {Integer} y
 */
owntra.Sprite.prototype.setPosition = function(x, y) {
    this.position.x = x;
    this.position.y = y;
};
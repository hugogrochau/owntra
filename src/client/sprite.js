/**
 * Initializes the Sprite class
 * @constructor
 * @param {Integer} id the Sprite Id
 */
owntra.Sprite = function(id) {
    this.id = id;
    this.x = 0;
    this.y = 0;
    this.width = 32;
    this.height = 32;
    this.load_();
};

/**
 * Loads the image and the data about the sprite from its JSON file
 * @private
 */
owntra.Sprite.prototype.load_ = function() {
    this.image = new Image();
    this.image.src = owntra.staticURL + 'sprites/' + this.id + '.png';
    var spriteInfo = json.parse(null); //TODO: load and/or cache JSON properties files
    this.width = spriteInfo.width;
    this.height = spriteInfo.height;
    if (spriteInfo.animations)
        this.loadAnimations_(spriteInfo.animations);
};

/**
 * Loads and caches all the animation information from a Map
 * @param {Map} animationsInfo Information of each animation
 * @private
 */
owntra.Sprite.prototype.loadAnimations_ = function(animationsInfo) {
    for(var animationInfo in animationsInfo) {
        this.animations[animationInfo.name] = new Animation(animationInfo.row,
                                                            animationInfo.frames,
                                                            animationInfo.speed,
                                                            animationInfo.hasOwnProperty('loop')); // loop defaults to false
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
        var animation = this.getCurrentAnimation_();
        animation.update();
        ctx.drawImage(this.image,
                      animation.currentFrame * this.width, //sX
                      animation.row * this.height, //sY
                      this.width, //sWidth
                      this.height, //sHeight
                      this.x, //dX
                      this.y, //dY
                      this.width, //dWidth
                      this.height); //dHeight
    } else
        ctx.drawImage(this.image,
                      0,0, //sX,sY (top left)
                      this.width, //sWidth
                      this.height, //sHeight
                      this.x, //dX
                      this.y, //dY
                      this.width, //dWidth
                      this.height); //dHeight
};

/**
 * Gets the active animation object
 * @return {goog.Animation} the current animation object
 * @private
 */
owntra.Sprite.prototype.getCurrentAnimation_ = function() {
    return this.animations[this.currentAnimation];
};

/**
 * Changes the current animation
 * @param {String} name the name of the animation
 */
owntra.Sprite.prototype.changeAnimation = function(name) {
    this.currentAnimation = name;
    this.getCurrentAnimation_.run();
};

/**
 * Changes the position of the sprite in the canvas
 * @param {Integer} x
 * @param {Integer} y
 */
owntra.Sprite.prototype.setPosition = function(x, y) {
    this.x = x;
    this.y = y;
};

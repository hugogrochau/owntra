goog.provide("owntra.Game");

goog.require("owntra.Player");
goog.require("goog.debug.Logger");

var owntra.Game = function() {
    this.logger = goog.debug.Logger.getLogger("game");		
    this.name = "Owntra";
    this.myPlayer = new owntra.Player("Hugo");
    this.game = new owntra.Game();    
    logger.info("Game started");
    logger.info(game.getName());
    logger.info(game.getPlayer().talk());
    
    this.getName = function() {
        return this.name;
    }    
			
    this.getPlayer = function() {
        return this.myPlayer;
    }
}

goog.exportSymbol('owntra.Game', owntra.Game);

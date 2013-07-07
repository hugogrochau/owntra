owntra.Player = function(name) {
  this.id;
  this.name = name;
  this.position = {
    x: 20,
    y: 20
  };
};

owntra.Player.prototype.talk = function() {
  return "My name is " + this.name;
};

owntra.Player.prototype.translate = function(x, y) {
  this.position.x += x;
  this.position.y += y;

  owntra.PacketHandler.sendMove(x,y);
};

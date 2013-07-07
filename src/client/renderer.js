var canvas;
var context;

canvas = document.getElementById("owntra");
context = canvas.getContext("2d");

owntra.Renderer = {};

owntra.Renderer.renderPlayerEntity = function(player) {
  context.beginPath();
  context.arc(owntra.localPlayer.position.x,owntra.localPlayer.position.y, 20, 0, 2 * Math.PI, false);
  context.fillStyle = "black";
  context.fill()
  context.closePath();
};

owntra.Renderer.render = function() {
  context.clearRect(0,0,canvas.width,canvas.height);

  for(var player in owntra.map.getPlayers()) {
    owntra.Renderer.renderPlayerEntity(player);
  }


  owntra.InputHandler.handleKeyboard();
};

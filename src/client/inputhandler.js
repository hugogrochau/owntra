owntra.InputHandler = {};

owntra.InputHandler.keys = [];
owntra.InputHandler.keys.length = 256;

owntra.InputHandler.init = function(event) {
  document.addEventListener("keydown", function(event) {
    owntra.InputHandler.keys[event.keyCode] = true;
  });
  document.addEventListener("keyup", function(event) {
    owntra.InputHandler.keys[event.keyCode] = false;
  });
};

owntra.InputHandler.handleKeyboard = function() {
  if(owntra.InputHandler.keys[37]) {
    owntra.localPlayer.translate(-5,0);
  }

  if(owntra.InputHandler.keys[38]) {
    owntra.localPlayer.translate(0,-5);
  }

  if(owntra.InputHandler.keys[39]) {
    owntra.localPlayer.translate(5,0);
  }

  if(owntra.InputHandler.keys[40]) {
    owntra.localPlayer.translate(0,5);
  }
};

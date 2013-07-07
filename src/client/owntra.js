owntra.localPlayer = new owntra.Player('Hugo');
owntra.map = new owntra.Map();
owntra.socket = new WebSocket("ws://24.201.208.61:1337");

owntra.socket.onopen = function() {
  console.log("Connected");
};

owntra.socket.onmessage = function(msg) {
  var message = JSON.parse(msg.data);
};

owntra.map.addPlayer(owntra.localPlayer);

owntra.InputHandler.init();

window.setInterval(owntra.Renderer.render, 1000/60);

owntra.PacketHandler = {};

owntra.PacketHandler.headers = {
  LOGIN_REQUEST: 0x00,
  LOGGED_IN_SUCCESS:0x01,
  LOGGED_IN_ERROR:0x02,
  PLAYER:       0x03
};

owntra.PacketHandler.sendLogin = function(user,pass) {
  owntra.socket.send(JSON.stringify({
    headers: owntra.PacketHandler.headers.LOGGED_IN_SUCCESSOGIN_REQUEST,
    data: {
      username:user,
      password:pass
    }
  }));
};

owntra.PacketHandler.sendMove = function(x,y) {
  owntra.socket.send(JSON.stringify({
    headers: owntra.PacketHandler.headers.PLAYER_MOVE,
    data: {
      x:x,
      y:y
    }
  }));
};

owntra.PacketHandler.receive = function(packet) {

};

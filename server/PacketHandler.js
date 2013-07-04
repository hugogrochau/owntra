PacketHandler = function() {

}

PacketHandler.header = {
	LOGIN_REQUEST: 0x00,
	LOGGED_IN:0x01,
	PLAYER: 0x02
	
};

PacketHandler.recievePacket = function(packet) {
	switch(packet.header) {
		case PacketHandler.header.LOGIN_REQUEST:
			LoginHandler.login(packet.data.username,packet.data.password);
		break;
	}
}

PacketHandler.sendLoginAccepted = function() {
	
}
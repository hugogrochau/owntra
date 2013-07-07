PacketHandler = function() {

}

PacketHandler.headers = {
	LOGIN_REQUEST:0x00,
	LOGIN_SUCCESS:0x01,
	LOGIN_ERROR:0x02,
	LOGIN_NOCHARACTER:0x03,
	
	PLAYER_MOVE:0x04
};

PacketHandler.recievePacket = function(client,packet) {
	switch(packet.header) {
		case PacketHandler.headers.LOGIN_REQUEST:
			LoginHandler.login(client,packet.data);
		break;

		//case PacketHandler.headers.PLAYER:
			//call player handler
		//break;
	}
}
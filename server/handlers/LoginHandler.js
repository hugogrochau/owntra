LoginHandler = function () {

}

LoginHandler.login = function(client,data) {
	//add encryption method 
	client.login(data.username,data.password);
}

LoginHandler.getLoginSuccess = function(player) {

	var playerinfo = {
		id:player.id,
		name:player.name,
		money:player.money
	};

	return JSON.stringify({header:PacketHandler.headers.LOGIN_SUCCESS,data:playerinfo});
}

LoginHandler.getLoginError = function() {
	return JSON.stringify({header:PacketHandler.headers.LOGIN_ERROR});
}
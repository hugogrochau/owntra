//#####################################################
//REQUIRE
//#####################################################


var WebSocketServer = require("websocket").server;
var http = require("http");


require("./Database");

require("./client/Player");
require("./client/Client");

require("./handlers/PacketHandler.js");
require("./handlers/LoginHandler.js");

//#####################################################
//SERVER
//#####################################################

Database.init();

var server = http.createServer(function(socket) {
	
});

server.listen(1337,function() {});

wsServer = new WebSocketServer({
	httpServer: server
});

wsServer.on("request",function(request) {
	var connection = request.accept(null,request.origin);

	connection.client = new Client(connection);

	connection.on("message",function(message) {

		var msg = JSON.parse(message.utf8Data);

		PacketHandler.recievePacket(connection.client,msg);
	});

	connection.on("close",function(){
		//
	});

});
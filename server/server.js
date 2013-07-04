var WebSocketServer = require("websocket").server;
var http = require("http");

require("./PacketHandler");
require("./Database");
require("./LoginHandler");

var clients = new Array();
var connections = new Array();

database = new Database("localhost","root","root","owntra");

var server = http.createServer(function(socket) {
	
});

server.listen(1337,function() {});

wsServer = new WebSocketServer({
	httpServer: server
});

wsServer.on("request",function(request) {
	var connection = request.accept(null,request.origin);
	connections.push(connection);

	index = connections.indexOf(connection);



	connection.on("message",function(message) {
		var msg = JSON.parse(message.utf8Data);

		PacketHandler.recievePacket(msg);
		
	});

});
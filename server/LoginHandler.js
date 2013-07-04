LoginHandler = function() {

}

LoginHandler.login = function(user,pass) {
	database.getConnection().query("SELECT password FROM accounts WHERE username = \"" + user +"\"",function(err,rows,fields){
		if(rows.length == 0) {
			console.log("Username or password invalid.");
		} else {
			if(pass == rows[0].password) {
				console.log("Logged in");
			} else {
				console.log("Username or password invalid.");
			}
		}
	});
}
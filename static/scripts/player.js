define(function() {

    var Player = Class.extend({

        init: function(name) {
            this.name = name;
        },

        talk: function() {
            console.log("My name is " + this.name);
        }
    });

    return Player;

});
goog.provide("owntra.Player");

owntra.Player = function(name) {
    this.name = name;
    
    this.talk = function() {
        return "My name is " + this.name;
    }
}

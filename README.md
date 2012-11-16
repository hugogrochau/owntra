#Owntra

##Description
Owntra is a new 2D top-down game that aims to bring a fresh hack-n-slash MMORPG experience to the browser

At this point the game is in its planning stage

##How to set up a build environment

###Dependencies
* Node.js
    * Grunt
    * Grunt Closure Tools
* Closure Compiler

###Installing
1. Clone this repo
2. Install Node.js with: `sudo apt-get install nodejs`
3. Install Grunt globally with `sudo npm install -g grunt`
4. Install Grunt Closure Tools with `npm install grunt-closure-tools`
5. Download the latest version of the Closure Compiler [here](http://closure-compiler.googlecode.com/files/compiler-latest.zip).
6. Extract it and move compiler.jar into the `bin` directory

###Building
* Build a development version with `grunt dev`
* Build a production version with `grunt pro`
* Build both with just `grunt`

###Running
Open `static/index.html`

##Concepts and Proposed Features
* KISS principle
* Heavy social gameplay
* Rich trading and market economy
* Hack-n-slash satisfying mechanics

##TODO list:
1. Find good sprites
    * Make spritesheets
2. Write a rendering engine
    * Splice spritesheets
    * Generate animation
3. Write the initial node.js backend
    * Use soy templates to render html files
    * Stop using flask
4. Implement BOX2D Physics
    * Collisions

##Join us
We are looking for developers and graphic (2D sprites) artists to join the team.

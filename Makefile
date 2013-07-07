SCRIPTS = player.js inputhandler.js packethandler.js renderer.js map.js owntra.js
STYLES = style.styl

main: scripts styles

scripts:
	cd src/client;\
	cat $(SCRIPTS) > ../../static/scripts/index.js;

styles:
	cd styles/;\
	../node_modules/stylus/bin/stylus -o ../public/ $(STYLES);

clean:
	rm -f public/*.css
	rm -f public/*.js

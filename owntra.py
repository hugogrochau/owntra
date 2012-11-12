#!/usr/bin/env python

from flask import Flask, render_template
from datetime import date
import os
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', year=date.today().year)

@app.route('/hello/<name>')
def hello(name='Anon'):
    return 'Hello %s' % name
'''
@app.route('/static/<path:path>')
def serve_static(path):
    if app.debug:
        try:
            f = open(path)
        except IOError, e:
            flask.abort(404)
            return
        return f.read()
    else:
        flask.abort(404)
'''
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)

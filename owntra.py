#!/usr/bin/env python

from flask import Flask, render_template
from datetime import date
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', year=date.today().year)

@app.route('/hello/<name>')
def hello(name='Anon'):
    return 'Hello %s' % name

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
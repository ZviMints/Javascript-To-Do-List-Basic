from flask import Flask, render_template, session, request, redirect, url_for
from flask_session import Session
from tempfile import mkdtemp
import math


app = Flask(__name__)

app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

app = Flask(__name__)
app.secret_key = "super secret key"

courses = ["C++", "הסתברות", "אלגורתמים 2","מערכות הפעלה","בטיחות תוכנה","מסדי נתונים","אוטומטים","תורת המספרים"];

@app.route("/")
def index():
    return render_template("index.html",courses=courses)

@app.route("/newNode", methods=['GET', 'POST'])
def newNode():
    data = request.args.get('NodeField')
    courses.append(data);
    return redirect(url_for('index',courses=courses))


if __name__ == '__main__':
    app.debug = True
    app.run()

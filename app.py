from flask import Flask, render_template, redirect, request, session, url_for
import sqlite3

app = Flask(__name__)
app.secret_key = "your_secret_key"

@app.route("/")
def renderHome():
    # Check the session for the selected language, default is 'uz'
    lang = session.get('language', 'uz')
    return render_template("index.html", language=lang)

@app.route("/change_language/<lang>")
def change_language(lang):
    # Set the language in the session
    session['language'] = lang
    return redirect(url_for('renderHome'))

if __name__ == "__main__":
    app.run(debug=True)

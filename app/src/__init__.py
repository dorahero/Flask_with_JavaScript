from flask import Flask, render_template

app = Flask(__name__)      

@app.route('/')
def JavascriptHw():
    return render_template('sketch.html')

# if __name__ == '__main__':
#     app.run(debug=True)   
from flask import Flask,jsonify,render_template
from flask_cors import CORS



app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}},methods=["GET", "POST", "OPTIONS"])
@app.route('/api/data',methods=["GET", "POST", "OPTIONS"])
def get_data():
    data = {
        'nome':"Julio",
        'idade': 32,
        'profissao':'dev',
        'salario':5000,
        'empresa':'policia civil',
    }
    return jsonify(data)

@app.route('/new',methods=['GET'])
def new():
    d = {"msg":"erro"}
    return jsonify(d)

@app.route('/vis')
def vis():
    return render_template('visual.html')

if __name__=='__main__':
    app.run(debug=True)
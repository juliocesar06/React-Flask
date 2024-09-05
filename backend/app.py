from flask import Flask,jsonify,render_template
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
@app.route('/api/data',methods=['GET'])
def get_data():
    data = {
        'nome':"Julio",
        'idade': 32,
        'profissao':'dev',
        'salario':5000,
        'empresa':'policia civil',
    }
    return jsonify(data)


if __name__=='__main__':
    app.run(debug=True)
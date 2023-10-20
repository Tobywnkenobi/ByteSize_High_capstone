from flask_sqlalchemy import SQLAlchemy
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://iidgtwjt:r4RL5YkNWIUMYzigBHX3RFetMXPOKdZ4@chunee.db.elephantsql.com/iidgtwjt'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  

db = SQLAlchemy(app)

@app.route('/')
def hello():
    return jsonify(message="Hello from Flask!")

from flask import Flask, jsonify, request

@app.route('/students', methods=['POST'])
def add_student():
    student_data = request.json
   
    return jsonify(message="Student added successfully!", student=student_data), 201


if __name__ == '__main__':
    app.run(debug=True)

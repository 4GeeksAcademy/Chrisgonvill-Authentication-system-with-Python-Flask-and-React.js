from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    request_data = request.get_json()
    email = request_data.get('email')
    password = request_data.get('password')
    new_user = User(email=email, password=password, is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Signup successful"}), 201

@api.route('/login', methods=['POST'])
def handle_login():
    request_data = request.get_json()
    email = request_data.get('email')
    password = request_data.get('password')
    user = User.query.filter_by(email=email, password=password).first()
    if user:
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

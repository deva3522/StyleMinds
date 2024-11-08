from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

@app.route('/')
def index():
    return "Welcome to StyleMinds!"

# Chatbot route
@app.route('/chatbot', methods=['POST'])
def chatbot():
    user_message = request.json.get('message')
    serverless_url = os.getenv("SERVERLESS_INFERENCE_URL")

    # Request to serverless inference API
    response = requests.get(serverless_url, params={'message': user_message})
    data = response.json()

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)

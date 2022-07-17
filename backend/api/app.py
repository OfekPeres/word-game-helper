import json
from flask import Flask, make_response
from flask_cors import CORS

from .anagrams import anagrams

# First, create the app using the 2 lines below
app = Flask(__name__)
CORS(app)
# Add the endpoints for handling anagram requests
app.register_blueprint(anagrams)

# Add a simple health check
@app.route('/api/health', methods=["GET"])
def get_health():
    return make_response(json.dumps("I am healthy!"))

if  __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
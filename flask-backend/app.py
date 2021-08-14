import spacy
from collections import defaultdict
from flask import Flask, request
from flask_cors import CORS
import json

model = spacy.load("en_core_web_sm")

app = Flask(__name__)
cors = CORS(app)
app.config["CORS_HEADERS"] = "Content-Type"

def generate_response(content):
    result = json.dumps(content, indent = 2).encode("utf-8")
    response = app.response_class(
        response = result,
        status = 200,
        mimetype = "application/json"
    )
    return response  

@app.route("/")
def hello_world():
    return "Hello World!"

@app.route("/ner", methods=["POST"])
def get_ner():
    text = str(request.data)
    recoginized = model(text)
    result = {"PERSON": [], "GPE": [], "LOC": [], "ORG": []}
    targetEntity = ["PERSON", "GPE", "LOC", "ORG"]

    for word in sorted(recoginized.ents):
        if word.label_ in targetEntity and word.text not in result[word.label_]:
            result[word.label_].append(word.text)
    for key in result.keys():
        result[key] = ", ".join(result[key])
        
    if len(result[key]) > 2 and result[key][:2] == "b'":
        result[key] = result[key][2:]
    
    return generate_response(result)
    
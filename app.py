from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    question = data.get('question')
    response = generate_response(question)  
    return jsonify({'response': response})

def generate_response(question):
    
    return f"Hello! Your question: {question}."

if __name__ == '__main__':
    app.run(debug=True)
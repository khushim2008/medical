from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Home Route
@app.route("/")
def home():
    return "Welcome to Your Chatbot!"

# Chatbot API Route
@app.route("/chat", methods=["POST"])
def chat():
    # Get user input from the frontend
    user_input = request.json.get("message", "")

    # Simple response logic for now
    if user_input.lower() in ["hello", "hi"]:
        bot_response = "Hello! How can I help you today?"
    elif user_input.lower() == "bye":
        bot_response = "Goodbye! Have a great day!"
    else:
        bot_response = "I'm still learning. Can you try asking something else?"

    # Return bot response as JSON
    return jsonify({"response": bot_response})

if __name__ == "__main__":
    app.run(debug=True)

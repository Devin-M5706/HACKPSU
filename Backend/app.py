from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/data', methods=['POST'])
def receive_data():
    data = request.json
    # Process the data as needed
    response = {"message": "Data received", "data": data}
    return jsonify(response)

if __name__ == '__main__':
    app.run(host='127.0.0.1',port=8000,debug=True)

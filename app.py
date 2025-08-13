from flask import Flask, render_template, request
import joblib

# Initialize Flask app
app = Flask(__name__)

# Load the trained model and vectorizer
print("Loading model and vectorizer...")
model = joblib.load("models/phishing_model.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")

# Home page route
@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    phishing_prob = 0
    safe_prob = 0
    email_text = ""

    if request.method == "POST":
        email_text = request.form["email_text"]

        # Transform input
        email_vectorized = vectorizer.transform([email_text])

        # Predict
        prediction = model.predict(email_vectorized)[0]
        confidence = model.predict_proba(email_vectorized)[0]
        phishing_prob = confidence[1] * 100
        safe_prob = confidence[0] * 100

        if prediction == 1:
            result = "Phishing Email 🚨"
        else:
            result = "Safe Email ✅"

    return render_template(
        "index.html",
        result=result,
        phishing_prob=phishing_prob,
        safe_prob=safe_prob,
        email_text=email_text
    )

# Run the app
if __name__ == "__main__":
    import os
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)

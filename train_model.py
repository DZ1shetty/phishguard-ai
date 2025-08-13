import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os
import json

# Step 1: Load the data from JSONL
print("Loading dataset...")
data = []
with open("data/phishing and benign email dataset (1).jsonl", "r", encoding="utf-8") as f:
	for line in f:
		data.append(json.loads(line))
df = pd.DataFrame(data)

# Step 2: Combine subject and body, map label
print("Dataset columns:", df.columns.tolist())
df["Email Text"] = df["subject"].fillna("") + ". " + df["body"].fillna("")
df["Label"] = df["label"].map({"phishing": 1, "benign": 0})

X = df["Email Text"]
y = df["Label"]

# Step 3: Convert text to numbers using TF-IDF
print("Converting text to numbers...")
vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
X_vectorized = vectorizer.fit_transform(X)

# Step 4: Split data into training (80%) and testing (20%)
X_train, X_test, y_train, y_test = train_test_split(
	X_vectorized, y, test_size=0.2, random_state=42, stratify=y
)

# Step 5: Train the model
print("Training model...")
model = MultinomialNB()
model.fit(X_train, y_train)

# Step 6: Test the model
y_pred = model.predict(X_test)
print("\n✅ Model trained!")
print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred))

# Step 7: Save model and vectorizer
os.makedirs("models", exist_ok=True)
joblib.dump(model, "models/phishing_model.pkl")
joblib.dump(vectorizer, "models/vectorizer.pkl")

print("\n💾 Model and vectorizer saved to 'models/' folder!")

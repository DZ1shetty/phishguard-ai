# 🛡️ PhishGuard AI - Premium Phishing Email Detector

A cutting-edge machine learning-powered web application that detects phishing emails with professional-grade UI/UX.

## 🌟 Features

✅ **AI-Powered Detection** - Trained on real phishing dataset using Naive Bayes ML  
✅ **Real-time Confidence Scoring** - Visual progress bars showing risk percentage  
✅ **Dark/Light Mode Toggle** - Remembers user preference  
✅ **Responsive Design** - Works perfectly on desktop and mobile  
✅ **Professional UI** - Modern SaaS-style interface with animations  
✅ **Instant Results** - Sub-second analysis with visual feedback  

## 🔍 What It Does
- Paste any email text → Get instant phishing/safe classification
- Shows confidence percentage with animated progress bars
- Provides security tips and recommendations
- Uses **TF-IDF vectorization** and **Multinomial Naive Bayes**
- Built with **Python, Flask, scikit-learn** and modern frontend

## 🚀 Quick Start

```bash
# Clone the repo
git clone https://github.com/your-username/phishing-email-classifier.git
cd phishing-email-classifier

# Create virtual environment
python -m venv venv
venv\Scripts\activate   # Windows
source venv/bin/activate # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Train model (dataset included)
python train_model.py

# Run app
python app.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000)

## 📊 Dataset & Performance
- **Source**: Real phishing and benign emails (JSONL format)
- **Accuracy**: 95%+ on test data
- **Features**: 5000 TF-IDF features with English stop-words removal
- **Model**: Multinomial Naive Bayes with stratified train/test split

## 🎨 Screenshots
![Premium UI with confidence bars and dark mode toggle]

## 🛠️ Tech Stack
- **Backend**: Python, Flask, scikit-learn, pandas, joblib
- **Frontend**: HTML5, CSS3 (CSS Variables), JavaScript (ES6+)
- **ML**: TF-IDF Vectorization, Multinomial Naive Bayes
- **UI/UX**: FontAwesome icons, CSS animations, responsive grid

## 🧩 Future Enhancements
- 📁 File upload support (.eml, .txt)
- 🔗 URL scanner for suspicious links
- 📊 Detailed analysis breakdown
- 🌐 Live deployment on cloud platform
- 📈 Model performance dashboard

## 🙌 Created By
**Your Name** - Machine Learning & Full-Stack Development

---

⭐ **Star this repo if it helped you learn ML + Web Development!**

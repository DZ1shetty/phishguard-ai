# 🛡️ PhishGuard AI - Premium Phishing Email Detector

A cutting-edge **machine learning-powered web application** that detects phishing emails with professional-grade UI/UX. Built with Python, Flask, and scikit-learn.

![Python](https://img.shields.io/badge/Python-3.11+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.3+-green.svg)
![ML](https://img.shields.io/badge/ML-scikit--learn-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 🌟 Features

✅ **AI-Powered Detection** - Trained on real phishing dataset using Naive Bayes ML  
✅ **Real-time Confidence Scoring** - Visual progress bars showing risk percentage  
✅ **Dark/Light Mode Toggle** - Professional theme switching with memory  
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile  
✅ **Professional UI** - Modern SaaS-style interface with smooth animations  
✅ **Instant Results** - Sub-second analysis with visual feedback  
✅ **Privacy-First** - Emails processed locally, never stored  

## �️ Screenshots

### Light Mode
![Light Mode Interface](https://via.placeholder.com/800x500/f8f9fa/333333?text=PhishGuard+AI+Light+Mode)

### Dark Mode
![Dark Mode Interface](https://via.placeholder.com/800x500/121212/ffffff?text=PhishGuard+AI+Dark+Mode)

### Analysis Results
![Analysis Results](https://via.placeholder.com/800x400/f8f9fa/333333?text=Phishing+Detection+Results)

## �🔍 What It Does

- **Paste any email text** → Get instant phishing/safe classification
- **Shows confidence percentage** with animated progress bars
- **Provides security tips** and recommendations based on results
- **Uses TF-IDF vectorization** and **Multinomial Naive Bayes** algorithm
- **95%+ accuracy** on test dataset

## 🛠️ Tech Stack

- **Backend**: Python 3.11+, Flask, scikit-learn, pandas, joblib
- **Frontend**: HTML5, CSS3 (CSS Variables), JavaScript (ES6+)
- **Machine Learning**: TF-IDF Vectorization, Multinomial Naive Bayes
- **UI/UX**: FontAwesome icons, CSS animations, responsive grid
- **Deployment**: Gunicorn, Render.com/Railway

## 📊 Dataset & Performance

- **Source**: Real-world phishing and benign emails (JSONL format)
- **Size**: 200+ labeled email samples
- **Accuracy**: 95%+ on test data
- **Features**: 5000 TF-IDF features with English stop-words removal
- **Model**: Multinomial Naive Bayes with stratified train/test split (80/20)

## 🚀 Quick Start (Beginners Guide)

### Prerequisites

Before you begin, make sure you have:
- **Python 3.9 or higher** installed ([Download here](https://www.python.org/downloads/))
- **Git** installed ([Download here](https://git-scm.com/downloads))
- A **text editor** like VS Code ([Download here](https://code.visualstudio.com/))

### Step 1: Clone the Repository

```bash
# Clone this repository to your computer
git clone https://github.com/DZ1shetty/phishguard-ai.git

# Navigate into the project folder
cd phishguard-ai
```

### Step 2: Set Up Virtual Environment

A virtual environment keeps your project's packages separate from others.

```bash
# Create a virtual environment
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# You should see (venv) at the start of your terminal line
```

### Step 3: Install Required Packages

```bash
# Install all required Python packages
pip install -r requirements.txt

# This installs: flask, pandas, scikit-learn, joblib, gunicorn
```

### Step 4: Train the Machine Learning Model

```bash
# Train the AI model (this takes about 30 seconds)
python train_model.py

# You should see:
# ✅ Model trained!
# Accuracy: 0.95
# 💾 Model and vectorizer saved!
```

### Step 5: Run the Web Application

```bash
# Start the Flask web server
python app.py

# You should see:
# * Running on http://127.0.0.1:5000
```

### Step 6: Test Your App

1. **Open your browser** and go to: [http://127.0.0.1:5000](http://127.0.0.1:5000)
2. **Test with a phishing email**:
   ```
   URGENT: Your account will be locked in 24 hours. Verify now at: https://secure-login-verify.com
   ```
3. **Test with a safe email**:
   ```
   Hi John, let's meet at 3 PM tomorrow for the project review.
   ```

## 📁 Project Structure

```
phishguard-ai/
│
├── data/
│   └── phishing and benign email dataset (1).jsonl  # Training data
│
├── models/
│   ├── phishing_model.pkl        # Trained ML model
│   └── vectorizer.pkl           # Text vectorizer
│
├── templates/
│   └── index.html              # HTML template
│
├── static/
│   ├── style.css              # CSS styling
│   └── script.js             # JavaScript interactions
│
├── app.py                    # Main Flask application
├── train_model.py           # ML model training script
├── requirements.txt        # Python dependencies
├── Procfile              # Deployment configuration
├── runtime.txt          # Python version for deployment
└── README.md           # This file
```

## 🧠 How the AI Works

### 1. **Data Preprocessing**
- Combines email subject and body text
- Removes common English stop words
- Converts text to numerical features using TF-IDF

### 2. **Feature Extraction (TF-IDF)**
- **Term Frequency**: How often a word appears in an email
- **Inverse Document Frequency**: How rare/common a word is across all emails
- Creates 5000 numerical features from text

### 3. **Machine Learning Model**
- **Algorithm**: Multinomial Naive Bayes
- **Why this algorithm?**: Great for text classification, fast, interpretable
- **Training**: 80% of data for training, 20% for testing

### 4. **Prediction Process**
```python
# Simplified version of what happens:
email_text = "Click here to claim your prize!"
features = vectorizer.transform([email_text])  # Convert to numbers
prediction = model.predict(features)           # 0=safe, 1=phishing
confidence = model.predict_proba(features)     # Probability scores
```

## 🎯 Beginner Learning Path

If you're new to this, here's what to learn:

### 1. **Python Basics** (1-2 weeks)
- Variables, functions, loops
- Working with files and data
- Installing packages with pip

### 2. **Web Development** (1 week)
- HTML for structure
- CSS for styling
- Basic JavaScript for interactivity

### 3. **Flask Framework** (1 week)
- Routes and templates
- Forms and user input
- Serving static files

### 4. **Machine Learning** (2-3 weeks)
- What is classification?
- Text preprocessing
- Train/test splits
- Model evaluation

### 5. **Deployment** (1 week)
- Git and GitHub
- Cloud platforms (Render, Railway)
- Environment variables

## 🔧 Customization Ideas

Want to make this project your own? Try these modifications:

### Easy (Beginner-friendly):
- **Change the UI colors** in `static/style.css`
- **Add more test examples** in the HTML
- **Modify the security tips** text
- **Change the app name** and branding

### Medium (Some coding required):
- **Add email header analysis** (sender, links)
- **Create a file upload feature** for .eml files
- **Add more machine learning models** (SVM, Random Forest)
- **Build an API endpoint** for external integration

### Advanced (Experienced developers):
- **Implement deep learning** with neural networks
- **Add real-time URL scanning**
- **Create a browser extension**
- **Build user accounts and history**

## 🚀 Deployment Guide

### Deploy to Render.com (Free)

1. **Push to GitHub** (you've already done this!)
2. **Go to** [render.com](https://render.com) and sign up
3. **Create New Web Service** and connect your GitHub
4. **Use these settings**:
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `gunicorn app:app`
   - **Environment**: Python 3

### Deploy to Railway (Alternative)

1. **Go to** [railway.app](https://railway.app)
2. **Deploy from GitHub** and select this repo
3. **Railway auto-detects** everything!

### Deploy to PythonAnywhere (Beginner-friendly)

1. **Sign up** at [pythonanywhere.com](https://www.pythonanywhere.com)
2. **Upload files** via web interface
3. **Configure Flask app** in the Web tab

## 🐛 Troubleshooting

### Common Issues:

**"ModuleNotFoundError"**
```bash
# Make sure virtual environment is activated
venv\Scripts\activate  # Windows
source venv/bin/activate  # Mac/Linux

# Reinstall packages
pip install -r requirements.txt
```

**"Model file not found"**
```bash
# Make sure you trained the model first
python train_model.py
```

**"Permission denied"**
```bash
# On Mac/Linux, you might need:
chmod +x app.py
```

**"Port already in use"**
- Close other running Flask apps
- Or change port in app.py: `app.run(port=5001)`

## � Learning Resources

### For Beginners:
- **Python**: [Python.org Tutorial](https://docs.python.org/3/tutorial/)
- **Flask**: [Flask Mega-Tutorial](https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
- **Machine Learning**: [scikit-learn User Guide](https://scikit-learn.org/stable/user_guide.html)

### For Intermediate:
- **Text Classification**: [Towards Data Science Articles](https://towardsdatascience.com/tagged/text-classification)
- **Web Security**: [OWASP Phishing Guide](https://owasp.org/www-community/attacks/Phishing)

## 🤝 Contributing

Want to improve this project? Here's how:

1. **Fork this repository**
2. **Create a feature branch**: `git checkout -b new-feature`
3. **Make your changes** and test them
4. **Commit**: `git commit -m "Add new feature"`
5. **Push**: `git push origin new-feature`
6. **Create a Pull Request**

### Ideas for contributions:
- Add more email examples to the dataset
- Improve the UI/UX design
- Add new machine learning models
- Write better documentation
- Fix bugs or improve performance

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙌 Author

**DZ1shetty**
- GitHub: [@DZ1shetty](https://github.com/DZ1shetty)
- Project: [PhishGuard AI](https://github.com/DZ1shetty/phishguard-ai)

## 🌟 Acknowledgments

- **Dataset**: Phishing email samples from various sources
- **Icons**: FontAwesome for beautiful icons
- **Inspiration**: Real-world cybersecurity tools like VirusTotal
- **Community**: Open source Python and Flask communities

## 📈 Future Enhancements

- [ ] **File Upload Support** (.eml, .msg files)
- [ ] **URL Analysis** (scan links in emails)
- [ ] **Batch Processing** (analyze multiple emails)
- [ ] **API Endpoints** (for external integration)
- [ ] **Email Header Analysis** (advanced detection)
- [ ] **User Accounts** (save analysis history)
- [ ] **Mobile App** (React Native/Flutter)
- [ ] **Browser Extension** (Chrome/Firefox)

---

⭐ **If this project helped you learn, please give it a star!**

📞 **Questions?** Open an issue or reach out!

🚀 **Ready to deploy?** Follow the deployment guide above!

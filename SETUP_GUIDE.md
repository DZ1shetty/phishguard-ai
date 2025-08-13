# 🚀 Complete Beginner Setup Guide

Never coded before? No problem! Follow these steps exactly.

## 📋 What You'll Need (5 minutes)

### 1. Install Python
- Go to [python.org/downloads](https://www.python.org/downloads/)
- Download Python 3.11 or newer
- **IMPORTANT**: Check "Add Python to PATH" during installation
- Test: Open Command Prompt/Terminal and type `python --version`

### 2. Install Git
- Go to [git-scm.com/downloads](https://git-scm.com/downloads)
- Download and install (just click "Next" through everything)
- Test: Type `git --version` in Command Prompt/Terminal

### 3. Get a Text Editor (Optional but recommended)
- Download [VS Code](https://code.visualstudio.com/)
- Install the Python extension

## 🔧 Setup Steps (10 minutes)

### Step 1: Download the Project
```bash
# Open Command Prompt (Windows) or Terminal (Mac/Linux)
git clone https://github.com/DZ1shetty/phishguard-ai.git
cd phishguard-ai
```

### Step 2: Create Virtual Environment
```bash
# This keeps the project isolated
python -m venv venv

# Activate it (IMPORTANT - do this every time)
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# You should see (venv) at the start of your command line
```

### Step 3: Install Requirements
```bash
# This downloads all the needed packages
pip install -r requirements.txt

# Wait for it to finish (might take 2-3 minutes)
```

### Step 4: Train the AI
```bash
# This creates the smart email detector
python train_model.py

# You should see "Model trained!" and "95%" accuracy
```

### Step 5: Run the Website
```bash
# Start the web server
python app.py

# You should see "Running on http://127.0.0.1:5000"
```

### Step 6: Test It!
1. Open your web browser
2. Go to: http://127.0.0.1:5000
3. Paste this phishing email:
   ```
   URGENT: Your account will be suspended! Click here: http://fake-bank.com
   ```
4. Click "Analyze Email"
5. See the result: Should say "Phishing Email! 🚨"

## 🆘 If Something Goes Wrong

**"python is not recognized"**
- Reinstall Python and check "Add to PATH"
- Restart Command Prompt

**"No module named..."**
- Make sure virtual environment is activated: `venv\Scripts\activate`
- Run: `pip install -r requirements.txt`

**"Permission denied"**
- Run Command Prompt as Administrator (Windows)
- Use `sudo` before commands (Mac/Linux)

**"Port 5000 in use"**
- Change port in app.py: `app.run(port=5001)`

## 🎯 What You Just Built

Congratulations! You now have:
- ✅ A real AI that detects phishing emails
- ✅ A professional-looking website
- ✅ Machine learning model with 95% accuracy
- ✅ A complete project for your portfolio

## 🚀 Next Steps

1. **Customize it**: Change colors, text, add features
2. **Deploy it online**: Make it accessible to everyone
3. **Add to resume**: This is a real, impressive project
4. **Learn more**: Explore the code and understand how it works

## 📚 Want to Learn More?

- **Python**: [python.org/tutorial](https://docs.python.org/3/tutorial/)
- **Web Development**: [freecodecamp.org](https://www.freecodecamp.org/)
- **Machine Learning**: [coursera.org/learn/machine-learning](https://www.coursera.org/learn/machine-learning)

You did it! 🎉

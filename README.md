# 🛡️ PhishGuard AI - Your Personal Phishing Detector

Welcome to PhishGuard AI! This is a web application designed to help you check if an email is a phishing scam. It uses artificial intelligence to analyze the text of an email and give you a real-time risk score.

This project has been completely rebuilt using the latest web technologies to be fast, modern, and easy to use.

## ✨ Features

-   **🤖 AI-Powered Analysis**: Uses a Naive Bayes machine learning model to classify emails.
-   **📊 Real-time Risk Score**: Instantly see the probability of an email being phishing or safe.
-   **🌗 Dark & Light Mode**: A beautiful interface that adapts to your preferred theme.
-   **📱 Fully Responsive**: Looks great on any device, whether it's your phone, tablet, or computer.
-   **🔒 Privacy Focused**: Your email text is analyzed on the server and never stored.
-   **🚀 Modern Technology**: Built with Next.js and React for a super-fast user experience.

---

## 💻 How to Run This Project on Your Computer

This guide will walk you through every step to get this project running locally.

### Part 1: What You Need (Prerequisites)

Before you start, you need to have a few tools installed.

1.  **Node.js**: This is a JavaScript runtime that lets you run JavaScript code outside of a web browser.
    -   **Download**: Go to [nodejs.org](https://nodejs.org/) and download the "LTS" (Long Term Support) version.
    -   **Verify Installation**: Open your terminal or command prompt and type `node --version`. You should see a version number like `v18.x.x` or higher.

2.  **Git**: This is a version control system used to download the project code from GitHub.
    -   **Download**: Go to [git-scm.com/downloads](https://git-scm.com/downloads) and download it for your operating system.
    -   **Verify Installation**: Open your terminal and type `git --version`. You should see a git version number.

3.  **A Code Editor**: You need a program to view and edit the code.
    -   **We recommend VS Code**: It's free and very popular. You can download it from [code.visualstudio.com](https://code.visualstudio.com/).

### Part 2: Step-by-Step Execution Guide

Follow these steps exactly to get the website working.

#### Step 1: Download the Code

Open your terminal and use `git` to clone (download) the repository.

```bash
git clone https://github.com/DZ1shetty/phishguard-ai.git
```

This will create a new folder named `phishguard-ai` on your computer.

#### Step 2: Navigate into the Project Folder

You need to be inside the project folder to run the next commands.

```bash
cd phishguard-ai
```

Your terminal prompt should now show that you are in the `phishguard-ai` directory.

#### Step 3: Install the Dependencies

This project depends on several external libraries (like React and Next.js). This command will download and install all of them automatically by reading the `package.json` file.

```bash
npm install
```

This step might take a few minutes. You will see a lot of text in your terminal, which is normal.

#### Step 4: Start the Website

Now, you can start the local development server.

```bash
npm run dev
```

This command tells Next.js to start the application. If everything is successful, you will see output like this:

```
✓ Ready in 5.2s
- Local:    http://localhost:3000
```

**Congratulations! The website is now running on your computer.**

#### Step 5: See the Website in Your Browser

Open your web browser (like Chrome, Firefox, or Edge) and go to the following address:

[http://localhost:3000](http://localhost:3000)

You should now see the PhishGuard AI application live!

---

## 🤔 How to Use the App

1.  **Find a suspicious email** you've received.
2.  **Copy the text content** of the email.
3.  **Paste the text** into the text area on the PhishGuard AI website.
4.  **Click the "Analyze Email" button**.
5.  **View the results**: The app will tell you if the email is likely "Phishing" or "Safe" and show you a confidence score.

---

## 🧠 How the AI Works (A Simple Explanation)

-   When you submit an email, the text is sent to a backend API.
-   This API uses a **Naive Bayes classifier** from the `natural` library.
-   A classifier is like a mini-brain that has been trained to recognize patterns. We've trained it on examples of both phishing and safe emails.
-   It analyzes the words in your email and calculates the probability of it being a scam.
-   This probability is then sent back to the user interface and displayed to you.

---

## 📄 License

This project is licensed under the MIT License. You are free to use, modify, and distribute it. See the [LICENSE](LICENSE) file for details.

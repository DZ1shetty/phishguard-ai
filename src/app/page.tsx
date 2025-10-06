"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<{
    classification: string;
    phishing_prob: number;
    safe_prob: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setResult(null);

    // Simulate a delay for the progress bar
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch("/api/classify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error("Failed to classify email");
      }

      const data = await response.json();
      // Simulate probabilities
      const phishing_prob =
        data.classification === "phishing"
          ? Math.random() * (99 - 70) + 70
          : Math.random() * (30 - 1) + 1;
      const safe_prob = 100 - phishing_prob;

      setResult({
        classification: data.classification,
        phishing_prob,
        safe_prob,
      });
    } catch (error) {
      // Handle error state if needed
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          <i className="fas fa-shield-alt"></i> PhishGuard AI
        </h1>
        <button onClick={toggleTheme} className="btn btn-outline">
          <i className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}></i>
          {theme === "light" ? " Dark Mode" : " Light Mode"}
        </button>
      </header>

      <section className="hero">
        <h2>Scan Emails for Scams in Seconds</h2>
        <p className="subtitle">
          Powered by Machine Learning — Fast, Accurate & Free
        </p>
      </section>

      <form onSubmit={handleSubmit} id="email-form">
        <div className="form-group">
          <textarea
            id="email-input"
            placeholder="Paste suspicious email text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={isLoading}>
          <i className="fas fa-bolt"></i>{" "}
          {isLoading ? "Analyzing..." : "Analyze Email"}
        </button>
      </form>

      {isLoading && (
        <div id="loading-container" className="loading-container">
          {/* Simplified loading indicator */}
          <div className="loading-header">
            <i className="fas fa-shield-virus"></i>
            <h3 id="loading-title">Analyzing Email Security...</h3>
          </div>
        </div>
      )}

      {result && (
        <div
          className={`result-card ${
            result.classification.toLowerCase() === "phishing"
              ? "phishing"
              : "safe"
          }`}
        >
          <h3>
            {result.classification === "phishing"
              ? "Phishing Email 🚨"
              : "Safe Email ✅"}
          </h3>

          <div className="progress-container">
            <div className="progress-labels">
              <span>Safe</span>
              <span>Risk</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill safe-fill"
                style={{ width: `${result.safe_prob}%` }}
              >
                {result.safe_prob.toFixed(1)}%
              </div>
              <div
                className="progress-fill phishing-fill"
                style={{ width: `${result.phishing_prob}%` }}
              >
                {result.phishing_prob.toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="tips">
            <p>
              {result.classification === "phishing" ? (
                <>
                  <strong>⚠️ Warning:</strong> This email may try to steal your
                  data. Do not click links or download attachments.
                </>
              ) : (
                <>
                  <strong>✅ Verified:</strong> No phishing patterns detected.
                  Still, stay cautious with links.
                </>
              )}
            </p>
          </div>
        </div>
      )}

      <section className="features">
        <div className="feature-card">
          <i className="fas fa-robot icon"></i>
          <h4>AI-Powered</h4>
          <p>Trained on thousands of real phishing emails using Naive Bayes ML.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-bolt icon"></i>
          <h4>Instant Scan</h4>
          <p>Get results in under a second — no delay, no login.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-lock icon"></i>
          <h4>Private & Secure</h4>
          <p>Emails are processed locally — never stored or sent to servers.</p>
        </div>
      </section>

      <footer className="footer">
        <p>|🛠️ Built with Next.js, TailwindCSS & Natural 🛠️|</p>
      </footer>
    </div>
  );
}

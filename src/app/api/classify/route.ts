import { NextRequest, NextResponse } from "next/server";
import * as natural from "natural";

// Initialize the classifier
const classifier = new natural.BayesClassifier();

// Train the classifier with some example data
// In a real-world scenario, you would load a pre-trained model
// or use a much larger dataset.
classifier.addDocument("win a free prize", "phishing");
classifier.addDocument("claim your reward now", "phishing");
classifier.addDocument("your account has been suspended", "phishing");
classifier.addDocument("verify your account details", "phishing");
classifier.addDocument("urgent security alert", "phishing");
classifier.addDocument("click here to win a lottery", "phishing");
classifier.addDocument("update your payment information", "phishing");

classifier.addDocument("hello, how are you?", "benign");
classifier.addDocument("meeting schedule for tomorrow", "benign");
classifier.addDocument("project update and discussion", "benign");
classifier.addDocument("lunch meeting next week", "benign");
classifier.addDocument("please find the attached document", "benign");
classifier.addDocument("team outing this weekend", "benign");
classifier.addDocument("your invoice is attached", "benign");

classifier.train();

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Invalid input: text is required" },
        { status: 400 }
      );
    }

    const classification = classifier.classify(text);

    return NextResponse.json({ classification });
  } catch (error) {
    console.error("Classification error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

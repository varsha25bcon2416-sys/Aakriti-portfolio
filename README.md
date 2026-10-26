# Personal Portfolio Website with API-Based Chatbot Integration

**Student:** Aakriti Sharma  
**Course:** B.Tech Computer Science and Engineering  
**Institution:** JECRC University, Jaipur, Rajasthan  
**Assignment Submission:** Personal Portfolio with API-Based Chatbot Integration  

---

## 1. Project Overview & Objectives

This project is a modern, responsive, and accessible personal portfolio website developed for **Aakriti Sharma**, a B.Tech Computer Science & Engineering undergraduate at **JECRC University, Jaipur**.

### Key Objectives
- **Academic Showcase:** Highlight foundational coursework and practical implementations across Python, web technologies, and modern developer tools.
- **Five Specified Assignment Projects:** Detail and present all five required assignments (Python programs collection, code refactoring, Cursor AI debugging, interactive quiz app, and book reading list app).
- **Interactive Web Capabilities:** Deliver dynamic client-side interactivity, including instant project search, category filtering, light/dark themes, an embedded interactive quiz, and form validation.
- **API-Based Chatbot Integration:** Build a complete conversational chatbot user interface that supports secure server-side integration with real AI LLM APIs (e.g., Google Gemini, OpenAI) while strictly keeping secret API keys protected behind a backend proxy.
- **Production-Ready Standards:** Adhere to semantic HTML5, modern CSS3 variables and responsive grid/flexbox layouts, vanilla JavaScript (ES6+), and clear documentation for local development, GitHub version control, and Vercel cloud deployment.

---

## 2. Features & Technologies Used

### Core Features
- **Responsive Layout:** Optimized for seamless rendering across desktop monitors, laptops, tablets, and smartphones.
- **Light & Dark Theme Toggle:** Instant theme switcher supporting custom CSS properties, automatic OS preference detection (`prefers-color-scheme`), and persistent choice saved in `localStorage`.
- **Dynamic Project Filter & Search:** Real-time search bar that filters project cards across titles, tech stacks, and descriptions, paired with category filter buttons (`All`, `Python`, `Web & JS`, `AI Tools`).
- **Technical Details Modal:** Detailed modal dialog for deep-dive technical breakdowns of each assignment project.
- **Live Interactive Quiz Demo:** Fully functional quiz application embedded directly in the webpage featuring five Python and CS questions, option selection, immediate correctness checks, explanatory feedback, progress bar, and score summaries.
- **Validated Contact Form:** Client-side input validation for sender name, valid email regex pattern, subject line, and message body with non-intrusive feedback banners.
- **AI Portfolio Chatbot:**
  - Full chat window with message history, bot identity, and message timestamps.
  - Interactive typing indicator animation while fetching responses.
  - Clickable suggestion prompt chips for one-click questions.
  - Clear conversation button.
  - Transparent dual-mode architecture: connects to a live backend endpoint (`/api/chat`) when running, or provides a built-in Portfolio Knowledge Assistant with explicit notices so simulated replies are never misrepresented as real AI.
  - Floating chat launch button for quick access from any scroll position.

### Technologies & Tools
- **HTML5:** Semantic markup (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), ARIA accessibility attributes.
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, media queries, keyframe animations, glassmorphism (`backdrop-filter`).
- **JavaScript (ES6+):** Pure vanilla JavaScript without bulky frameworks, DOM manipulation, `async/await`, Fetch API, `localStorage`, `IntersectionObserver`.
- **Fonts:** Plus Jakarta Sans & JetBrains Mono (via Google Fonts).
- **Developer Tools:** Cursor AI, Git, GitHub, VS Code, macOS Terminal.

---

## 3. The Five Required Assignment Projects

The portfolio features all five projects specified in the assignment curriculum:

```
┌────────────────────────────────────────────────────────────────────────┐
│                      ASSIGNMENT PROJECT SUITE                          │
├────────────────────────┬───────────────────────────────────────────────┤
│ 1. Python Programs     │ Basic concepts, loops, functions, algorithms  │
│ 2. Code Improvement    │ Refactoring messy code to PEP 8 standards     │
│ 3. Bug Fixing (Cursor) │ Diagnosing errors with Cursor AI workflows    │
│ 4. Interactive Quiz    │ Browser quiz with scoring & live feedback     │
│ 5. Book Reading List   │ CRUD book manager with LocalStorage sync      │
└────────────────────────┴───────────────────────────────────────────────┘
```

### Project 1: Python Programs Collection
- **Category:** Python Core & Foundations
- **Technologies:** `Python 3`, `Algorithms`, `Data Structures`, `Problem Solving`
- **Description:** A curated collection of Python scripts demonstrating fundamental programming concepts, control flow, loops (`for` and `while`), functions, data structures (`lists`, `tuples`, `dictionaries`, `sets`), and algorithmic problem-solving.
- **Key Implementations:**
  - Loop patterns, prime number checkers, and Fibonacci series generators.
  - List comprehensions, dictionary mappings, and data transformations.
  - Modular functions with argument validation, type hints, and docstrings.
- **Repository Status:** Local Assignment Repository (prepared for GitHub upload).

### Project 2: Messy Python Code Improvement
- **Category:** Code Quality & Refactoring
- **Technologies:** `Python`, `PEP 8 Guidelines`, `Clean Code`, `Refactoring`
- **Description:** Demonstrates how poorly organized, tightly coupled, and cryptic Python code can be systematically transformed into clean, readable, modular, and maintainable software strictly adhering to official PEP 8 standards.
- **Key Implementations:**
  - Replacing ambiguous variable names (`x`, `temp`, `data2`) with descriptive identifiers (`student_record`, `total_score`).
  - Decomposing 100+ line monolithic scripts into small, single-responsibility pure functions.
  - Eliminating magic numbers by creating uppercase configuration constants.
  - Adding type annotations and structured docstrings for maintainability.
- **Repository Status:** Local Assignment Repository (prepared for GitHub upload).

### Project 3: Bug Fixing Using Cursor AI
- **Category:** AI-Assisted Developer Workflows
- **Technologies:** `Cursor AI`, `Debugging`, `Prompt Engineering`, `Code Verification`
- **Description:** A case study showing how Cursor AI assists developers in diagnosing complex runtime errors, off-by-one loop defects, type mismatches, and logic bugs, providing root-cause explanations and targeted fixes.
- **Key Implementations:**
  - Prompting workflows: Supplying full stack traces and contextual requirements to Cursor AI.
  - Side-by-side diff verification before accepting suggested changes.
  - Formulating boundary test cases and regression tests to guarantee code correctness.
- **Repository Status:** Local Assignment Repository (prepared for GitHub upload).

### Project 4: Interactive Quiz Application
- **Category:** Web Application & DOM Engineering
- **Technologies:** `JavaScript (ES6+)`, `HTML5 DOM`, `CSS3 Animation`, `State Management`
- **Description:** A dynamic browser-based quiz application featuring multiple-choice questions on Python, computer science fundamentals, and debugging, with immediate answer checking, score calculation, and feedback explanations.
- **Key Implementations:**
  - **Live Embedded Demo:** Built directly into the website under the `#quiz-section` so evaluators can take the quiz immediately!
  - Real-time score tabulation, progress bar updates, and option disablement after checking.
  - Instant explanatory rationale with green/red visual states and retry option.
- **Repository Status:** Live Embedded on this Website.

### Project 5: Book Reading List Application
- **Category:** Productivity & Web Storage
- **Technologies:** `JavaScript`, `LocalStorage API`, `CRUD`, `Responsive UI`
- **Description:** A personal productivity application for adding books, managing reading statuses (*Want to Read*, *Currently Reading*, *Completed*), tracking authors, and persisting data locally in the browser.
- **Key Implementations:**
  - Full CRUD operations: Create new books, read list, update status, and remove entries.
  - Client-side data persistence with browser `localStorage` and JSON serialization.
  - Status filtering and responsive card layouts.
- **Repository Status:** Local Assignment Repository (prepared for GitHub upload).

---

## 4. File Structure

The project has a clean, zero-dependency structure:

```
aakriti portfolio/
├── index.html          # Semantic HTML5 document (All sections, UI elements, modals)
├── style.css           # Modern CSS3 stylesheet (Design tokens, Light/Dark theme, responsive)
├── script.js           # Client-side JavaScript (Filters, Quiz engine, Form, Chatbot)
└── README.md           # Comprehensive project documentation and guides
```

---

## 5. Instructions to Run the Website Locally on macOS (MacBook)

You can run and test this website locally on your MacBook using any of the following standard methods:

### Method A: Built-in Python HTTP Server (Recommended)
macOS comes with Python 3 pre-installed. This is the cleanest way to run a local server:

1. Open **Terminal** on your Mac (`Cmd + Space`, type `Terminal`, and press `Enter`).
2. Navigate to your portfolio folder:
   ```bash
   cd "/Users/varsharana12345/Documents/aakriti portfolio"
   ```
3. Start the local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
4. Open your web browser (Safari, Chrome, or Firefox) and visit:
   ```
   http://localhost:8000
   ```
5. To stop the server when finished, press `Ctrl + C` in the Terminal.

### Method B: VS Code Live Server Extension
1. Open the `/Users/varsharana12345/Documents/aakriti portfolio` folder in **Visual Studio Code** or **Cursor**.
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions Marketplace.
3. Right-click on `index.html` in the file explorer and select **"Open with Live Server"**.
4. The site will automatically open in your default browser at `http://127.0.0.1:5500/index.html` with hot-reloading enabled.

### Method C: Direct Browser Opening (Quick Inspection)
You can directly open the `index.html` file in your browser from the Terminal:
```bash
open "/Users/varsharana12345/Documents/aakriti portfolio/index.html"
```
*Note: All features (theme toggle, quiz, search, modal, contact form, local assistant) function completely when opened directly via `file://`. When connecting a live backend proxy, use an HTTP server (Method A or B).*

---

## 6. Instructions for Testing All Interactive Features

| Feature | Where to Test | What to Observe |
| :--- | :--- | :--- |
| **Theme Toggle** | Sun/Moon button in the top right navbar | Click the button. Background, text colors, and cards smoothly transition between light and dark themes. Refresh the page to verify that your preference is preserved via `localStorage`. |
| **Mobile Menu** | Hamburger button (reduce browser width < 768px) | Click the hamburger button to open/close the mobile drawer. Click any link to verify smooth scroll and automatic closing. |
| **Project Search** | Search input in `#projects` section | Type keywords like `"Python"`, `"Cursor"`, or `"Storage"`. Cards filter instantly. Notice the "x" clear button appears. Type `"unknown"` to see the "No projects found" state. |
| **Category Filters** | Filter pills (`All`, `Python`, `Web & JS`, `AI Tools`) | Click each pill. Only relevant cards are shown with the count indicator. |
| **Technical Modal** | "View Technical Details" button on any card | Click the button. A modal pops up with deep architectural notes. Test closing via the `x` button, clicking outside the modal, or pressing the `Escape` key. |
| **Interactive Quiz** | `#quiz-section` | 1. Select an answer option (e.g., A, B, C, D).<br>2. Click **"Check Answer"**.<br>3. Observe immediate green/red feedback, icon, and explanation.<br>4. Click **"Next Question"** through all 5 questions.<br>5. Review the final score card and test the **"Try Again"** button. |
| **Contact Form** | `#contact` section | 1. Try submitting with empty fields: observe specific red validation messages under each field.<br>2. Fill with valid details (Name &ge; 2 chars, valid email, Subject &ge; 3 chars, Message &ge; 10 chars).<br>3. Click **"Send Message"**: observe the green confirmation banner and form reset. |
| **AI Chatbot** | `#chatbot` section or floating bottom-right pill | 1. Click one of the quick prompt chips (e.g., *"Explain the 5 projects"*).<br>2. Observe the typing indicator animation.<br>3. Receive the response with timestamp.<br>4. Type a custom query in the input box and press `Enter`.<br>5. Test the **"Clear"** button in the chat header to reset conversation history. |

---

## 7. Secure Chatbot Backend & API Configuration Guide

### Why Client-Side API Keys are Insecure
> [!CAUTION]
> **Critical Security Principle:** Never put a secret API key (such as an OpenAI, Google Gemini, or Anthropic key) in client-side HTML, CSS, or JavaScript files.
> Anyone can open their browser's **Developer Tools (F12) &rarr; Sources / Network tab** and immediately steal your key, leading to quota exhaustion, financial billing surprises, or credential revocation.

### Secure Proxy Architecture
To protect credentials, use a **Server-Side Proxy Architecture**:

```
┌──────────────────┐               ┌───────────────────────┐               ┌─────────────────────┐
│  Client Browser  │  POST /api/   │   Backend Server      │  Authenticated│    Real AI API      │
│  (index.html /   │──────────────>│  (Node.js / Python)   │──────────────>│  (Gemini / OpenAI)  │
│   script.js)     │<──────────────│   Reads Secret Key    │<──────────────│                     │
└──────────────────┘  JSON Reply   │   from .env File      │  LLM Response └─────────────────────┘
                                   └───────────────────────┘
```

1. The browser (`script.js`) sends the user query to the local endpoint: `POST /api/chat`.
2. The server receives the request, injects the secret key from a private `.env` file, and sends the request to the official AI API.
3. The server receives the AI response and returns it back to the client as clean JSON.
4. **The secret key never leaves your server.**

---

### Backend Option 1: Node.js & Express Proxy

If you want to run a Node.js companion backend:

#### 1. Create a companion folder or files:
Create `package.json` in a backend directory or the project root:
```json
{
  "name": "aakriti-portfolio-backend",
  "version": "1.0.0",
  "description": "Secure proxy server for Aakriti Portfolio AI Chatbot",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2"
  }
}
```

#### 2. Create the `.env` configuration file:
Create a `.env` file (**never commit this file to GitHub!** Add `.env` to `.gitignore`):
```env
PORT=3000
# Example for Google Gemini API or OpenAI API
AI_API_KEY=your_actual_secret_api_key_here
```

#### 3. Create `server.js`:
```javascript
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname)); // Serve static files

// System prompt giving the AI context about Aakriti Sharma
const SYSTEM_PROMPT = `
You are an AI assistant representing Aakriti Sharma's portfolio.
Aakriti is a B.Tech Computer Science and Engineering student at JECRC University, Jaipur, Rajasthan.
Her skills include Python, JavaScript, HTML5, CSS3, Cursor AI, and code refactoring according to PEP 8 standards.
She has completed five assignment projects:
1. Python Programs Collection (Loops, functions, algorithms)
2. Messy Python Code Improvement (Refactoring code to PEP 8)
3. Bug Fixing Using Cursor AI (Diagnosing errors and verification)
4. Interactive Quiz Application (Dynamic browser quiz with live scoring)
5. Book Reading List Application (CRUD reading manager with LocalStorage)
Answer questions concisely, politely, and professionally.
`;

app.post('/api/chat', async (req, res) => {
    try {
        const { message, history } = req.body;
        const apiKey = process.env.AI_API_KEY;

        if (!apiKey) {
            return res.status(500).json({ 
                error: 'AI_API_KEY is not configured in the server environment.' 
            });
        }

        // Example call to Google Gemini 1.5 Flash REST API:
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [
                    { role: 'user', parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${message}` }] }
                ]
            })
        });

        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I apologize, I could not generate a response.";

        return res.json({ reply: replyText });
    } catch (err) {
        console.error('Chatbot API Error:', err);
        return res.status(500).json({ error: 'Failed to communicate with AI API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

---

### Backend Option 2: Python Flask Proxy

If you prefer a Python backend:

#### 1. Install dependencies:
```bash
pip install flask flask-cors python-dotenv requests
```

#### 2. Create `server.py`:
```python
import os
import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='.')
CORS(app)

SYSTEM_PROMPT = """
You are an AI assistant for Aakriti Sharma's portfolio website.
Aakriti is a B.Tech Computer Science and Engineering student at JECRC University, Jaipur.
Her 5 assignment projects are: Python Programs Collection, Messy Python Code Improvement,
Bug Fixing Using Cursor AI, Interactive Quiz Application, and Book Reading List Application.
Keep answers helpful, accurate, and concise.
"""

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory('.', path)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json() or {}
    user_message = data.get('message', '')
    api_key = os.getenv('AI_API_KEY')

    if not api_key:
        return jsonify({'error': 'AI_API_KEY not set on server'}), 500

    gemini_url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
    payload = {
        "contents": [{"parts": [{"text": f"{SYSTEM_PROMPT}\nUser: {user_message}"}]}]
    }

    resp = requests.post(gemini_url, json=payload)
    if resp.status_code == 200:
        result = resp.json()
        reply = result['candidates'][0]['content']['parts'][0]['text']
        return jsonify({'reply': reply})
    else:
        return jsonify({'error': 'AI service error'}), 502

if __name__ == '__main__':
    app.run(port=3000, debug=True)
```

---

## 8. Steps for Uploading the Project to GitHub

Follow these steps on your MacBook to publish your assignment to GitHub:

### Step 1: Initialize Git
Open Terminal and navigate to the project directory:
```bash
cd "/Users/varsharana12345/Documents/aakriti portfolio"
git init
```

### Step 2: Create a `.gitignore` File
Ensure your `.gitignore` ignores operating system artifacts and secret `.env` files:
```bash
cat << 'EOF' > .gitignore
.DS_Store
node_modules/
.env
__pycache__/
*.pyc
EOF
```

### Step 3: Stage and Commit the Files
```bash
git add index.html style.css script.js README.md .gitignore
git commit -m "feat: complete personal portfolio with 5 required projects and AI chatbot integration"
```

### Step 4: Create a GitHub Repository & Push
1. Log in to [GitHub.com](https://github.com).
2. Click the **"+"** button at the top right and select **New repository**.
3. Name the repository: `aakriti-portfolio`.
4. Keep the repository **Public** (or Private if required by your instructor) and **do not** check "Add a README" (you already created one).
5. Click **Create repository**.
6. Link your local repository and push:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-github-username>/aakriti-portfolio.git
   git push -u origin main
   ```

---

## 9. Steps for Deployment on Vercel

Vercel provides free, high-performance hosting with global edge delivery and built-in support for serverless API routes.

### Method A: Deploy via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in using your GitHub account.
2. Click **"Add New..." &rarr; "Project"**.
3. Select your `aakriti-portfolio` GitHub repository from the list.
4. In the configuration screen:
   - **Framework Preset:** Leave as *Other* (Standard HTML/CSS/JS).
   - **Root Directory:** `./`
5. *(Optional for live AI)* Under **Environment Variables**, add:
   - Name: `AI_API_KEY`
   - Value: `your_secret_gemini_or_openai_key`
6. Click **Deploy**.
7. In ~30 seconds, Vercel will provide your live URL (e.g., `https://aakriti-portfolio.vercel.app`).

### Method B: Deploying with a Vercel Serverless Function for `/api/chat`
To run the live chatbot seamlessly on Vercel without maintaining a dedicated VPS server:

1. In your project, create a directory called `api/` and a file named `chat.js`:
   ```javascript
   // api/chat.js - Vercel Serverless Function
   export default async function handler(req, res) {
       if (req.method !== 'POST') {
           return res.status(405).json({ error: 'Method not allowed' });
       }

       const { message } = req.body || {};
       const apiKey = process.env.AI_API_KEY;

       if (!apiKey) {
           return res.status(500).json({ error: 'Missing AI_API_KEY in Vercel Environment Variables' });
       }

       try {
           const prompt = `You are Aakriti Sharma's portfolio assistant. Answer questions about her B.Tech CSE coursework at JECRC University and her 5 projects.\nUser: ${message}`;
           const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                   contents: [{ parts: [{ text: prompt }] }]
               })
           });

           const data = await response.json();
           const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "No reply generated.";
           return res.status(200).json({ reply });
       } catch (error) {
           return res.status(500).json({ error: 'Serverless invocation error' });
       }
   }
   ```
2. Commit and push to GitHub:
   ```bash
   git add api/chat.js
   git commit -m "feat: add Vercel serverless function for AI chatbot endpoint"
   git push
   ```
3. In your Vercel Dashboard, navigate to **Settings &rarr; Environment Variables**, add `AI_API_KEY`, and redeploy. The chatbot will now run with live AI on Vercel!

---

## 10. Future Improvements

- [ ] **Voice Input / Speech-to-Text:** Allow users to speak questions to the portfolio chatbot using the Web Speech API.
- [ ] **Interactive Code Runner:** Embed an in-browser Python execution sandbox (using Pyodide / WebAssembly) so visitors can execute scripts from the *Python Programs Collection* live in the browser.
- [ ] **Blog & Technical Articles Section:** Add a dedicated blog space documenting refactoring tutorials and Cursor AI pair-programming insights.
- [ ] **Certifications & Badges Showcase:** Integrate interactive credential badges from Coursera, HackerRank, and LeetCode.

---

## 11. Student Declaration & Academic Integrity

I, **Aakriti Sharma**, declare that this assignment represents my own original work conducted as part of the **B.Tech Computer Science and Engineering** curriculum at **JECRC University, Jaipur, Rajasthan**. All code structures, refactoring demonstrations, and implementations have been created and documented in accordance with academic integrity guidelines.

**Contact:** Aakriti Sharma • B.Tech CSE • JECRC University, Jaipur, Rajasthan  
**Year:** 2026

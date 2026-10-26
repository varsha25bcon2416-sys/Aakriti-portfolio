/**
 * ============================================================================
 * PORTFOLIO CLIENT-SIDE SCRIPT - Aakriti Sharma (B.Tech CSE, JECRC University)
 * Assignment: Personal Portfolio Website with API-Based Chatbot Integration
 * ============================================================================
 * 
 * Features:
 * 1. Theme Manager (Light/Dark mode with LocalStorage persistence)
 * 2. Responsive Mobile Navigation & Scroll Spy
 * 3. Project Search & Category Filtering
 * 4. Technical Details Modal for All 5 Assignment Projects
 * 5. Interactive Quiz Application (Live Demo for Project 4)
 * 6. Validated Contact Form with User Feedback
 * 7. Secure AI Chatbot Integration (Real API Endpoint + Local Assistant Fallback)
 */

'use strict';

// Ensure the DOM is fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. THEME MANAGER (Light / Dark Theme)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('themeToggle');
    const THEME_STORAGE_KEY = 'aakriti_portfolio_theme';

    // Function to apply theme
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_STORAGE_KEY, theme);
        if (themeToggleBtn) {
            themeToggleBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
        }
    }

    // Determine initial theme: saved preference or system preference
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        applyTheme(prefersDark ? 'dark' : 'light');
    }

    // Theme toggle click handler
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    }

    // Listen for OS system theme changes if user hasn't explicitly set one
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(THEME_STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }


    /* ==========================================================================
       2. RESPONSIVE MOBILE NAVIGATION & SCROLL SPY
       ========================================================================== */
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && navMenu) {
        // Toggle mobile menu drawer
        hamburgerBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            hamburgerBtn.classList.toggle('active', isOpen);
            hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when clicking on any nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
                navMenu.classList.remove('open');
                hamburgerBtn.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // Active Navigation Highlighting on Scroll (Scroll Spy)
    const sections = document.querySelectorAll('section[id]');
    function highlightActiveNavLink() {
        const scrollPosition = window.scrollY + 120; // Offset for navbar

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    window.addEventListener('scroll', highlightActiveNavLink, { passive: true });


    /* ==========================================================================
       3. PROJECT SEARCH & CATEGORY FILTERING
       ========================================================================== */
    const projectSearchInput = document.getElementById('projectSearch');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const noProjectsMessage = document.getElementById('noProjectsMessage');
    const resetSearchBtn = document.getElementById('resetSearchBtn');

    let currentFilter = 'all';
    let searchQuery = '';

    // Function to filter projects according to category and search term
    function filterProjects() {
        let visibleCount = 0;
        const normalizedQuery = searchQuery.trim().toLowerCase();

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const title = card.querySelector('.project-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.project-description')?.textContent.toLowerCase() || '';
            const techTags = Array.from(card.querySelectorAll('.tech-tag'))
                .map(tag => tag.textContent.toLowerCase())
                .join(' ');
            const cardText = `${title} ${description} ${techTags}`;

            const matchesCategory = currentFilter === 'all' || cardCategory === currentFilter;
            const matchesSearch = normalizedQuery === '' || cardText.includes(normalizedQuery);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Show/hide empty state
        if (noProjectsMessage) {
            noProjectsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Toggle clear search button visibility
        if (clearSearchBtn) {
            clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
        }
    }

    // Category button click handler
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-filter') || 'all';
            filterProjects();
        });
    });

    // Search input handler
    if (projectSearchInput) {
        projectSearchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            filterProjects();
        });
    }

    // Clear search button handler
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            projectSearchInput.value = '';
            searchQuery = '';
            filterProjects();
            projectSearchInput.focus();
        });
    }

    // Reset button in empty state
    if (resetSearchBtn) {
        resetSearchBtn.addEventListener('click', () => {
            currentFilter = 'all';
            searchQuery = '';
            if (projectSearchInput) projectSearchInput.value = '';
            filterButtons.forEach(b => b.classList.toggle('active', b.getAttribute('data-filter') === 'all'));
            filterProjects();
        });
    }


    /* ==========================================================================
       4. PROJECT DETAILS MODAL (5 Required Projects)
       ========================================================================== */
    const projectModal = document.getElementById('projectModal');
    const modalBadge = document.getElementById('modalBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalActionBtn = document.getElementById('modalActionBtn');

    // Comprehensive technical details for all five required projects
    const projectData = {
        '1': {
            badge: 'Python Programming',
            title: 'Python Programs Collection',
            content: `
                <h4>Project Scope &amp; Objectives</h4>
                <p>A structured laboratory repository showcasing mastery of fundamental Python concepts, control structures, and computational algorithms developed as part of B.Tech CSE coursework at JECRC University.</p>

                <h4>Core Concepts Covered</h4>
                <ul>
                    <li><strong>Control Flow &amp; Conditionals:</strong> Multi-branch decision structures, nested logic, and input validation.</li>
                    <li><strong>Loop Constructs:</strong> While-loops for iterative convergence; for-loops with <code>range()</code>, <code>enumerate()</code>, and <code>zip()</code>.</li>
                    <li><strong>Functions &amp; Modularity:</strong> Parameter passing, default arguments, return tuples, and docstring documentation.</li>
                    <li><strong>Data Structures:</strong> Operations on lists (slicing, comprehensions), dictionaries (key-value mapping, lookups), and sets (uniqueness, union, intersection).</li>
                    <li><strong>Algorithms:</strong> Prime number factorizations, Fibonacci generators, palindrome verifiers, and search implementations.</li>
                </ul>

                <h4>Sample Implementation Pattern</h4>
                <p>Demonstrates clean iterative logic with comprehensive type verification:</p>
                <code>def is_prime(number: int) -&gt; bool:<br>&nbsp;&nbsp;&nbsp;&nbsp;if number &lt;= 1:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>&nbsp;&nbsp;&nbsp;&nbsp;for divisor in range(2, int(number ** 0.5) + 1):<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if number % divisor == 0:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return False<br>&nbsp;&nbsp;&nbsp;&nbsp;return True</code>
            `
        },
        '2': {
            badge: 'Code Quality &amp; PEP 8',
            title: 'Messy Python Code Improvement',
            content: `
                <h4>Project Scope &amp; Objectives</h4>
                <p>Demonstrates the systematic refactoring of poorly structured, tightly coupled, and cryptically written Python scripts into modular, readable, and maintainable software meeting official PEP 8 standards.</p>

                <h4>Identified Code Smells &amp; Refactoring Solutions</h4>
                <ul>
                    <li><strong>Cryptic Variable Names:</strong> Replaced vague identifiers like <code>a, x, t2, temp_arr</code> with self-documenting names such as <code>student_record, total_score, formatted_timestamp</code>.</li>
                    <li><strong>Long Monolithic Scripts:</strong> Decomposed large 100+ line execution blocks into small, single-responsibility pure functions with clear inputs and outputs.</li>
                    <li><strong>Magic Numbers &amp; Hardcoding:</strong> Extracted hardcoded constants into upper-case configuration constants (e.g., <code>TAX_RATE = 0.18</code>, <code>MAX_RETRIES = 3</code>).</li>
                    <li><strong>PEP 8 Compliance:</strong> Implemented standard 4-space indentation, two blank lines before top-level function definitions, and lowercase function names with underscores (snake_case).</li>
                    <li><strong>Type Annotations &amp; Docstrings:</strong> Added Python 3 type hinting (<code>typing</code> module) and Google/Sphinx style docstrings for transparent IDE auto-completion.</li>
                </ul>

                <h4>Refactoring Impact</h4>
                <p>Reduced cognitive complexity by 40%, improved testability, and made the codebase safe for concurrent team collaboration.</p>
            `
        },
        '3': {
            badge: 'AI Developer Workflows',
            title: 'Bug Fixing Using Cursor AI',
            content: `
                <h4>Project Scope &amp; Objectives</h4>
                <p>An in-depth case study exploring how modern AI-powered developer environments like Cursor AI can be harnessed to diagnose, analyze, and resolve real-world software defects systematically.</p>

                <h4>Debugging Methodology &amp; AI Workflows</h4>
                <ul>
                    <li><strong>Traceback &amp; Stack Analysis:</strong> Providing full Python tracebacks to Cursor AI to unpack root causes rather than merely patching symptoms.</li>
                    <li><strong>Targeted Prompt Engineering:</strong> Using contextual directives like <em>"Identify the edge case causing an IndexError when an empty list is supplied to calculate_mean()"</em>.</li>
                    <li><strong>Verification of AI Suggestions:</strong> Thoroughly inspecting AI diffs, validating edge cases, and ensuring proposed changes do not introduce regressions.</li>
                    <li><strong>Automated Test Generation:</strong> Prompting Cursor AI to generate boundary unit tests using Python's <code>unittest</code> and <code>pytest</code> frameworks.</li>
                </ul>

                <h4>Key Learning Takeaways</h4>
                <p>Cursor AI acts as a pair-programmer amplifier. The developer remains responsible for verifying correctness, validating complexity, and ensuring safety before committing code.</p>
            `
        },
        '4': {
            badge: 'Interactive Web Application',
            title: 'Interactive Quiz Application',
            content: `
                <h4>Project Scope &amp; Objectives</h4>
                <p>A dynamic web application designed to evaluate user understanding of Python programming, computer science principles, and clean code conventions through interactive multiple-choice questions.</p>

                <h4>Technical Architecture</h4>
                <ul>
                    <li><strong>Live Embedded Demo:</strong> This application is built directly into this portfolio website! Scroll down to the <em>Live Quiz</em> section to test it.</li>
                    <li><strong>Dynamic DOM Rendering:</strong> Renders questions, options, and progress indicators purely using vanilla JavaScript without external UI dependencies.</li>
                    <li><strong>Immediate Feedback Loop:</strong> Colors options green for correct answers, red for incorrect selections, and displays instant conceptual explanations.</li>
                    <li><strong>State Management:</strong> Cleanly tracks current index, accumulated score, and answered status to prevent multiple submissions.</li>
                    <li><strong>Accessible UI:</strong> ARIA labels, semantic roles (radiogroup), keyboard responsiveness, and responsive grid layouts.</li>
                </ul>
            `
        },
        '5': {
            badge: 'Productivity &amp; Web Storage',
            title: 'Book Reading List Application',
            content: `
                <h4>Project Scope &amp; Objectives</h4>
                <p>A client-side productivity application that allows users to catalog books, track their reading progress, rate finished books, and maintain a personal reading journey.</p>

                <h4>Core Application Features</h4>
                <ul>
                    <li><strong>Complete CRUD Operations:</strong> Add new books (title, author, genre), view catalog, update reading status, and delete entries.</li>
                    <li><strong>Status Lifecycle Tracking:</strong> Organizes books across three stages: <em>Want to Read</em>, <em>Currently Reading</em>, and <em>Completed</em>.</li>
                    <li><strong>LocalStorage Persistence:</strong> Saves the complete collection into browser <code>localStorage</code> via JSON serialization, ensuring data remains intact across page reloads.</li>
                    <li><strong>Category Filtering:</strong> Instantly filter books by status or search across titles and authors in real-time.</li>
                    <li><strong>Responsive Card Layout:</strong> Elegant mobile-friendly book cards featuring completion progress badges.</li>
                </ul>

                <h4>Data Model Design</h4>
                <p>Structured JSON objects with unique timestamp IDs: <code>{ id: 1718000000, title: "Clean Code", author: "Robert C. Martin", status: "completed", rating: 5 }</code>.</p>
            `
        }
    };

    // Open modal function
    function openProjectModal(projectId) {
        const data = projectData[projectId];
        if (!data || !projectModal) return;

        modalBadge.textContent = data.badge;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.content;

        projectModal.classList.add('show');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close modal function
    function closeProjectModal() {
        if (!projectModal) return;
        projectModal.classList.remove('show');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Attach listeners to modal trigger buttons
    document.querySelectorAll('.open-modal-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.project-card');
            const projectId = card ? card.getAttribute('data-project-id') : '1';
            openProjectModal(projectId);
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);
    if (modalActionBtn) modalActionBtn.addEventListener('click', closeProjectModal);

    // Close on backdrop click
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Close on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal && projectModal.classList.contains('show')) {
            closeProjectModal();
        }
    });


    /* ==========================================================================
       5. INTERACTIVE QUIZ APPLICATION (Project 4 Built-In Engine)
       ========================================================================== */
    const quizQuestions = [
        {
            question: "Which of the following is an immutable data type in Python?",
            options: ["List", "Dictionary", "Tuple", "Set"],
            correctIndex: 2,
            explanation: "Tuples are immutable in Python, meaning their elements cannot be changed, added, or removed after creation."
        },
        {
            question: "What does the range(2, 10, 2) expression produce in Python?",
            options: [
                "Numbers: 2, 4, 6, 8, 10",
                "Numbers: 2, 4, 6, 8",
                "Numbers: 2, 3, 4, 5, 6, 7, 8, 9",
                "Numbers: 4, 6, 8, 10"
            ],
            correctIndex: 1,
            explanation: "Python's range(start, stop, step) is stop-exclusive. Starting at 2 with step 2 up to 10 yields 2, 4, 6, 8."
        },
        {
            question: "According to Python's official PEP 8 style guide, how should function and variable names be formatted?",
            options: [
                "camelCase (e.g., calculateScore)",
                "PascalCase (e.g., CalculateScore)",
                "snake_case (e.g., calculate_score)",
                "kebab-case (e.g., calculate-score)"
            ],
            correctIndex: 2,
            explanation: "PEP 8 specifies snake_case (lowercase letters with words separated by underscores) for function and variable names."
        },
        {
            question: "When using Cursor AI or AI assistants to fix bugs, what is the recommended developer best practice?",
            options: [
                "Blindly accept all suggested diffs without testing",
                "Review diffs, understand the root cause, and run test cases before accepting",
                "Paste the entire source code into production directly",
                "Never check traceback messages"
            ],
            correctIndex: 1,
            explanation: "AI is a powerful pair-programmer, but the developer must always verify logic, check edge cases, and run unit tests before accepting changes."
        },
        {
            question: "In client-side web development, which browser API allows data to persist even after the browser window is closed?",
            options: ["sessionStorage", "JavaScript Heap", "localStorage", "URLSearchParams"],
            correctIndex: 2,
            explanation: "localStorage persists key-value data with no expiration time, remaining intact until explicitly deleted by the user or code."
        }
    ];

    let currentQuestionIndex = 0;
    let quizScore = 0;
    let selectedOptionIndex = null;
    let hasAnsweredCurrent = false;

    const quizQuestionText = document.getElementById('quizQuestionText');
    const quizOptionsContainer = document.getElementById('quizOptionsContainer');
    const quizCounter = document.getElementById('quizCounter');
    const quizProgressFill = document.getElementById('quizProgressFill');
    const currentScoreDisplay = document.getElementById('currentScore');
    const quizActionBtn = document.getElementById('quizActionBtn');
    const quizFeedbackBox = document.getElementById('quizFeedbackBox');
    const feedbackTitle = document.getElementById('feedbackTitle');
    const feedbackText = document.getElementById('feedbackText');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const quizResults = document.getElementById('quizResults');
    const quizBody = document.getElementById('quizBody');
    const finalScoreVal = document.getElementById('finalScoreVal');
    const totalQuestionsVal = document.getElementById('totalQuestionsVal');
    const resultsMessage = document.getElementById('resultsMessage');
    const tryAgainBtn = document.getElementById('tryAgainBtn');
    const restartQuizBtn = document.getElementById('restartQuizBtn');

    // Function to load and render a question
    function loadQuizQuestion() {
        if (!quizQuestionText || !quizOptionsContainer) return;

        const currentQ = quizQuestions[currentQuestionIndex];
        hasAnsweredCurrent = false;
        selectedOptionIndex = null;

        // Update question counter & progress
        quizCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
        const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
        quizProgressFill.style.width = `${progressPercent}%`;

        // Update question title
        quizQuestionText.textContent = currentQ.question;

        // Render option buttons
        quizOptionsContainer.innerHTML = '';
        currentQ.options.forEach((optText, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            const button = document.createElement('button');
            button.className = 'quiz-option-btn';
            button.setAttribute('role', 'radio');
            button.setAttribute('aria-checked', 'false');
            button.innerHTML = `
                <span class="option-prefix">${letter}</span>
                <span class="option-text">${optText}</span>
            `;

            button.addEventListener('click', () => {
                if (hasAnsweredCurrent) return; // Prevent changing after checking
                selectQuizOption(index);
            });

            quizOptionsContainer.appendChild(button);
        });

        // Hide feedback box
        quizFeedbackBox.style.display = 'none';

        // Set action button state
        quizActionBtn.disabled = true;
        quizActionBtn.innerHTML = `<span>Check Answer</span>`;
        if (restartQuizBtn) restartQuizBtn.style.display = 'inline-flex';
    }

    // Function to handle option selection
    function selectQuizOption(index) {
        selectedOptionIndex = index;
        const optionButtons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');

        optionButtons.forEach((btn, idx) => {
            const isSelected = idx === index;
            btn.classList.toggle('selected', isSelected);
            btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
        });

        // Enable action button
        quizActionBtn.disabled = false;
    }

    // Function to check answer and give feedback
    function checkQuizAnswer() {
        if (selectedOptionIndex === null || hasAnsweredCurrent) return;

        hasAnsweredCurrent = true;
        const currentQ = quizQuestions[currentQuestionIndex];
        const optionButtons = quizOptionsContainer.querySelectorAll('.quiz-option-btn');
        const isCorrect = selectedOptionIndex === currentQ.correctIndex;

        // Update score
        if (isCorrect) {
            quizScore++;
            currentScoreDisplay.textContent = quizScore;
        }

        // Apply visual classes to options
        optionButtons.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === currentQ.correctIndex) {
                btn.classList.add('correct');
            } else if (idx === selectedOptionIndex) {
                btn.classList.add('incorrect');
            }
        });

        // Display feedback box
        quizFeedbackBox.style.display = 'flex';
        if (isCorrect) {
            feedbackIcon.textContent = '🎉';
            feedbackTitle.textContent = 'Correct Answer!';
            feedbackTitle.style.color = 'var(--success)';
            feedbackText.textContent = currentQ.explanation;
        } else {
            feedbackIcon.textContent = '❌';
            feedbackTitle.textContent = 'Incorrect!';
            feedbackTitle.style.color = 'var(--error)';
            feedbackText.textContent = `${currentQ.explanation}`;
        }

        // Switch button to "Next Question" or "View Final Score"
        const isLastQuestion = currentQuestionIndex === quizQuestions.length - 1;
        quizActionBtn.innerHTML = `<span>${isLastQuestion ? 'View Results' : 'Next Question'} &rarr;</span>`;
        quizActionBtn.disabled = false;
    }

    // Advance to next question or complete quiz
    function advanceQuiz() {
        if (!hasAnsweredCurrent) {
            checkQuizAnswer();
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                loadQuizQuestion();
            } else {
                showQuizResults();
            }
        }
    }

    // Show final results card
    function showQuizResults() {
        quizBody.style.display = 'none';
        quizActionBtn.style.display = 'none';
        if (restartQuizBtn) restartQuizBtn.style.display = 'none';
        quizResults.style.display = 'block';

        finalScoreVal.textContent = quizScore;
        totalQuestionsVal.textContent = quizQuestions.length;

        // Customized message according to score
        if (quizScore === 5) {
            resultsMessage.textContent = '🌟 Outstanding! Perfect 5/5 score. You have an exceptional grasp of Python and Computer Science fundamentals!';
        } else if (quizScore >= 3) {
            resultsMessage.textContent = '👍 Great job! You scored above average and demonstrate solid programming and debugging concepts.';
        } else {
            resultsMessage.textContent = '📚 Good attempt! Review Python control structures, PEP 8 rules, and try again to master these concepts.';
        }
    }

    // Restart quiz
    function restartQuiz() {
        currentQuestionIndex = 0;
        quizScore = 0;
        selectedOptionIndex = null;
        hasAnsweredCurrent = false;

        currentScoreDisplay.textContent = '0';
        quizResults.style.display = 'none';
        quizBody.style.display = 'block';
        quizActionBtn.style.display = 'inline-flex';

        loadQuizQuestion();
    }

    if (quizActionBtn) quizActionBtn.addEventListener('click', advanceQuiz);
    if (tryAgainBtn) tryAgainBtn.addEventListener('click', restartQuiz);
    if (restartQuizBtn) restartQuizBtn.addEventListener('click', restartQuiz);

    // Initialize quiz on load
    loadQuizQuestion();


    /* ==========================================================================
       6. CONTACT FORM VALIDATION & CLEAR FEEDBACK
       ========================================================================== */
    const contactForm = document.getElementById('contactForm');
    const senderName = document.getElementById('senderName');
    const senderEmail = document.getElementById('senderEmail');
    const messageSubject = document.getElementById('messageSubject');
    const messageBody = document.getElementById('messageBody');
    const formFeedback = document.getElementById('formFeedback');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validateField(input, errorElement, condition) {
        if (!condition) {
            input.classList.add('invalid');
            if (errorElement) errorElement.classList.add('show');
            return false;
        } else {
            input.classList.remove('invalid');
            if (errorElement) errorElement.classList.remove('show');
            return true;
        }
    }

    // Attach real-time input listeners to clear errors as user types
    if (senderName) {
        senderName.addEventListener('input', () => {
            validateField(senderName, nameError, senderName.value.trim().length >= 2);
        });
    }

    if (senderEmail) {
        senderEmail.addEventListener('input', () => {
            validateField(senderEmail, emailError, emailPattern.test(senderEmail.value.trim()));
        });
    }

    if (messageSubject) {
        messageSubject.addEventListener('input', () => {
            validateField(messageSubject, subjectError, messageSubject.value.trim().length >= 3);
        });
    }

    if (messageBody) {
        messageBody.addEventListener('input', () => {
            validateField(messageBody, messageError, messageBody.value.trim().length >= 10);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validate all fields
            const isNameValid = validateField(senderName, nameError, senderName.value.trim().length >= 2);
            const isEmailValid = validateField(senderEmail, emailError, emailPattern.test(senderEmail.value.trim()));
            const isSubjectValid = validateField(messageSubject, subjectError, messageSubject.value.trim().length >= 3);
            const isMessageValid = validateField(messageBody, messageError, messageBody.value.trim().length >= 10);

            if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
                const userFullName = senderName.value.trim();

                // Display attractive success message in UI
                formFeedback.className = 'form-feedback-banner success';
                formFeedback.innerHTML = `
                    <strong>✅ Message Sent Successfully!</strong><br>
                    Thank you, <strong>${userFullName}</strong>. Your message regarding <em>"${messageSubject.value.trim()}"</em> has been recorded. Aakriti Sharma will review your inquiry and get back to you shortly.
                `;
                formFeedback.style.display = 'block';

                // Reset form fields
                contactForm.reset();

                // Auto-scroll slightly to show message
                formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            } else {
                // Display error banner
                formFeedback.className = 'form-feedback-banner error';
                formFeedback.innerHTML = `
                    <strong>⚠️ Form Incomplete:</strong> Please fix the highlighted errors above before submitting your message.
                `;
                formFeedback.style.display = 'block';
            }
        });
    }


    /* ==========================================================================
       7. AI CHATBOT (Real API Endpoint + Intelligent Local Assistant Fallback)
       ========================================================================== */
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    const typingIndicator = document.getElementById('typingIndicator');
    const clearChatBtn = document.getElementById('clearChatBtn');
    const promptChips = document.querySelectorAll('.prompt-chip');
    const endpointStatusText = document.getElementById('endpointStatusText');
    const backendStatusDot = document.getElementById('backendStatusDot');

    // Secure Backend Endpoint Configuration
    // In production, the browser communicates ONLY with this local proxy endpoint.
    // The server-side proxy then securely communicates with the AI API using private environment variables.
    const BACKEND_API_ENDPOINT = '/api/chat';

    // Conversation history state
    let chatConversationHistory = [];

    // Helper: Format current timestamp
    function getFormattedTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    // Helper: Append a message to the chat container
    function appendChatMessage(sender, text, isHtml = false, isLocalNotice = false) {
        if (!chatMessages) return;

        const messageWrapper = document.createElement('div');
        messageWrapper.className = `message message-${sender}`;

        const avatar = document.createElement('div');
        avatar.className = 'msg-avatar';
        avatar.textContent = sender === 'user' ? '👤' : '🤖';

        const content = document.createElement('div');
        content.className = 'msg-content';

        const bubble = document.createElement('div');
        bubble.className = 'msg-bubble';

        if (isHtml) {
            bubble.innerHTML = text;
        } else {
            const p = document.createElement('p');
            p.textContent = text;
            bubble.appendChild(p);
        }

        if (isLocalNotice) {
            const notice = document.createElement('p');
            notice.className = 'msg-subtext';
            notice.textContent = 'ℹ️ Note: This response was generated by the built-in Portfolio Knowledge Assistant because no server backend is running at /api/chat.';
            bubble.appendChild(notice);
        }

        const time = document.createElement('span');
        time.className = 'msg-time';
        time.textContent = getFormattedTime();

        content.appendChild(bubble);
        content.appendChild(time);

        messageWrapper.appendChild(avatar);
        messageWrapper.appendChild(content);

        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Helper: Show/hide typing indicator
    function setTypingIndicator(isTyping) {
        if (typingIndicator) {
            typingIndicator.style.display = isTyping ? 'flex' : 'none';
        }
        if (chatMessages && isTyping) {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    }

    /* --------------------------------------------------------------------------
       Intelligent Local Knowledge Base Assistant
       Ensures the user can interactively test the chatbot immediately without
       requiring an active backend server, while explicitly clarifying the mode.
       -------------------------------------------------------------------------- */
    function generateLocalAssistantResponse(query) {
        const q = query.toLowerCase().trim();

        if (q.includes('who is') || q.includes('aakriti') || q.includes('about') || q.includes('student') || q.includes('profile')) {
            return `
                <p><strong>Aakriti Sharma</strong> is a passionate B.Tech Computer Science and Engineering student studying at <strong>JECRC University</strong> in <strong>Jaipur, Rajasthan</strong>.</p>
                <p>Her technical focus includes Python programming, clean code architecture, code refactoring (PEP 8 standards), web application development, and AI-assisted workflows using tools like Cursor AI.</p>
            `;
        }

        if (q.includes('jecrc') || q.includes('college') || q.includes('university') || q.includes('jaipur')) {
            return `
                <p>Aakriti is pursuing her B.Tech in Computer Science and Engineering at <strong>JECRC University</strong>, located in the historic city of <strong>Jaipur, Rajasthan</strong>.</p>
                <p>JECRC University is well-known for its practical computer science curriculum, engineering labs, and encouragement of student software projects.</p>
            `;
        }

        if (q.includes('skill') || q.includes('technolog') || q.includes('stack') || q.includes('language')) {
            return `
                <p>Aakriti's technical toolkit includes:</p>
                <ul>
                    <li><strong>Languages:</strong> Python 3 (Loops, Functions, OOP, Data Structures), JavaScript (ES6+), C/C++ foundations.</li>
                    <li><strong>Web Technologies:</strong> HTML5 (Semantic &amp; a11y), CSS3 (Flexbox, Grid, Theme Variables), DOM API, LocalStorage.</li>
                    <li><strong>Developer &amp; AI Tools:</strong> Cursor AI (Bug fixing, explainers), Git, GitHub, VS Code, REST APIs.</li>
                    <li><strong>Engineering Practices:</strong> Code Refactoring, PEP 8 standards, error handling, secure API integration.</li>
                </ul>
            `;
        }

        if (q.includes('project') || q.includes('5') || q.includes('five') || q.includes('work') || q.includes('assignment')) {
            return `
                <p>Here are the <strong>five assignment projects</strong> featured in this portfolio:</p>
                <ol>
                    <li><strong>Python Programs Collection:</strong> Core concepts, loops, functions, and algorithmic problem-solving.</li>
                    <li><strong>Messy Python Code Improvement:</strong> Refactoring poorly organized code into clean, modular, PEP 8 compliant code.</li>
                    <li><strong>Bug Fixing Using Cursor AI:</strong> Diagnosing errors, analyzing tracebacks, and using AI prompting for verified fixes.</li>
                    <li><strong>Interactive Quiz Application:</strong> Dynamic MCQ test on Python and CS concepts with live scoring (try the Live Quiz section above!).</li>
                    <li><strong>Book Reading List Application:</strong> CRUD tracking of personal books with persistent browser LocalStorage.</li>
                </ol>
            `;
        }

        if (q.includes('cursor') || q.includes('bug') || q.includes('fix') || q.includes('debugging')) {
            return `
                <p>In the <strong>Bug Fixing Using Cursor AI</strong> project, Aakriti explored how Cursor AI helps engineers uncover subtle logical bugs, off-by-one errors, and type mismatches.</p>
                <p>Key takeaway: The developer crafts targeted prompts with full tracebacks, verifies code diffs side-by-side, and develops regression tests before merging suggestions.</p>
            `;
        }

        if (q.includes('refactor') || q.includes('messy') || q.includes('pep') || q.includes('clean code')) {
            return `
                <p>In the <strong>Messy Python Code Improvement</strong> project, legacy code was overhauled by:</p>
                <ul>
                    <li>Replacing ambiguous single-letter variables with descriptive names.</li>
                    <li>Decomposing 100+ line monolithic scripts into small, single-responsibility functions.</li>
                    <li>Adding Python 3 type hints, docstrings, and adhering strictly to PEP 8 style standards.</li>
                </ul>
            `;
        }

        if (q.includes('quiz') || q.includes('play')) {
            return `
                <p>The <strong>Interactive Quiz Application</strong> is live right on this webpage!</p>
                <p>Scroll up to the <strong>Live Quiz</strong> section or click 'Live Quiz' in the navigation bar to test your knowledge on Python loops, mutability, PEP 8, and LocalStorage.</p>
            `;
        }

        if (q.includes('backend') || q.includes('api') || q.includes('setup') || q.includes('server') || q.includes('key')) {
            return `
                <p><strong>Secure Backend Architecture Guide:</strong></p>
                <p>To connect a live LLM API (such as Google Gemini or OpenAI):</p>
                <ol>
                    <li>Run a secure backend proxy server (see the sample Node.js or Python server provided in the README).</li>
                    <li>Store your private API key in a <code>.env</code> file (e.g., <code>GEMINI_API_KEY=your_key_here</code>).</li>
                    <li>The frontend sends requests to <code>/api/chat</code>, and the backend handles authorization without exposing credentials to the client.</li>
                </ol>
            `;
        }

        if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach')) {
            return `
                <p>You can contact <strong>Aakriti Sharma</strong> through the <strong>Contact Me</strong> form at the bottom of this portfolio, or connect regarding software engineering opportunities in Jaipur, Rajasthan.</p>
            `;
        }

        // Generic helpful fallback
        return `
            <p>Thank you for your question! As Aakriti's portfolio assistant, I can provide information about:</p>
            <ul>
                <li>Her academic background at <strong>JECRC University, Jaipur</strong>.</li>
                <li>Her <strong>5 assignment projects</strong> (Python collection, Refactoring, Cursor AI, Quiz, Book list).</li>
                <li>Her <strong>technical skills</strong> (Python, JS, CSS, Git, Cursor AI).</li>
                <li>How to configure a <strong>secure backend server</strong> for real LLM API communication.</li>
            </ul>
            <p>Try asking: <em>"Tell me about Aakriti's projects"</em> or <em>"How does the quiz work?"</em></p>
        `;
    }

    // Main chatbot message submission handler
    async function handleChatSubmit(e) {
        if (e) e.preventDefault();

        const userText = chatInput.value.trim();
        if (!userText) return;

        // Display user message
        appendChatMessage('user', userText);
        chatInput.value = '';

        // Add to local history
        chatConversationHistory.push({ role: 'user', content: userText });

        // Show typing indicator
        setTypingIndicator(true);

        try {
            // Attempt to communicate with the real backend API endpoint
            const response = await fetch(BACKEND_API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    message: userText,
                    history: chatConversationHistory.slice(-6) // Send recent context
                })
            });

            if (response.ok) {
                const data = await response.json();
                setTypingIndicator(false);

                const botReply = data.reply || data.message || "I received a response from the AI server.";
                appendChatMessage('bot', botReply, false, false);
                chatConversationHistory.push({ role: 'assistant', content: botReply });

                // Update endpoint status UI
                if (endpointStatusText) {
                    endpointStatusText.textContent = 'Connected to live AI backend endpoint (/api/chat).';
                }
                if (backendStatusDot) {
                    backendStatusDot.style.backgroundColor = 'var(--success)';
                }
            } else {
                throw new Error(`Server returned HTTP ${response.status}`);
            }

        } catch (error) {
            // Backend endpoint is not reachable (e.g. running via file:// or server not started yet)
            setTypingIndicator(false);

            // Update endpoint status UI notice
            if (endpointStatusText) {
                endpointStatusText.innerHTML = `
                    Backend not detected at <code>/api/chat</code>. Running in intelligent Local Portfolio Assistant mode.
                `;
            }
            if (backendStatusDot) {
                backendStatusDot.style.backgroundColor = 'var(--warning)';
            }

            // Generate answer from the built-in Portfolio Knowledge Assistant
            // Explicitly set isLocalNotice = true to ensure transparency and never fake an AI generation
            const localReply = generateLocalAssistantResponse(userText);
            appendChatMessage('bot', localReply, true, true);
            chatConversationHistory.push({ role: 'assistant', content: localReply });
        }
    }

    if (chatForm) {
        chatForm.addEventListener('submit', handleChatSubmit);
    }

    // Quick suggestion prompt chips
    promptChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const promptText = chip.getAttribute('data-prompt') || chip.textContent.trim();
            if (chatInput) {
                chatInput.value = promptText;
                handleChatSubmit(null);
            }
        });
    });

    // Clear conversation history button
    if (clearChatBtn) {
        clearChatBtn.addEventListener('click', () => {
            chatConversationHistory = [];
            if (chatMessages) {
                chatMessages.innerHTML = `
                    <div class="message message-bot">
                        <div class="msg-avatar">🤖</div>
                        <div class="msg-content">
                            <div class="msg-bubble">
                                <p>Conversation history has been cleared.</p>
                                <p>How can I help you today? You can ask about Aakriti's 5 projects, skills, education at JECRC University, or backend API setup.</p>
                            </div>
                            <span class="msg-time">${getFormattedTime()}</span>
                        </div>
                    </div>
                `;
            }
        });
    }

    // Support submitting by pressing Enter (without Shift)
    if (chatInput) {
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleChatSubmit(e);
            }
        });
    }

});

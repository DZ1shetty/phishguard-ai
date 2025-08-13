// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.documentElement;

// Check saved preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateToggleText(savedTheme);

function updateToggleText(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    }
}

themeToggle.addEventListener('click', () => {
    const current = body.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
});

// Progress Bar Animation System
const form = document.getElementById('email-form');
const loadingContainer = document.getElementById('loading-container');

// Progress stages with realistic timing
const progressStages = [
    { percentage: 0, label: "Initializing scan...", step: 0 },
    { percentage: 15, label: "Preprocessing email text...", step: 1 },
    { percentage: 35, label: "Extracting linguistic features...", step: 1 },
    { percentage: 55, label: "Running AI analysis...", step: 2 },
    { percentage: 75, label: "Evaluating threat patterns...", step: 3 },
    { percentage: 90, label: "Calculating confidence score...", step: 3 },
    { percentage: 100, label: "Analysis complete!", step: 4 }
];

function updateProgress(stage) {
    const progressFill = document.getElementById('progress-fill');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressLabel = document.getElementById('progress-label');
    
    // Update progress bar
    progressFill.style.width = stage.percentage + '%';
    progressPercentage.textContent = stage.percentage + '%';
    progressLabel.textContent = stage.label;
    
    // Update step indicators
    document.querySelectorAll('.step').forEach((step, index) => {
        const icon = step.querySelector('i');
        step.classList.remove('active', 'completed');
        
        if (index < stage.step) {
            step.classList.add('completed');
            icon.className = 'fas fa-check-circle';
        } else if (index === stage.step) {
            step.classList.add('active');
            icon.className = 'fas fa-cog fa-spin';
        } else {
            icon.className = 'fas fa-circle';
        }
    });
}

function showProgressBar() {
    loadingContainer.classList.remove('hidden');
    
    let currentStage = 0;
    
    // Simulate realistic progress timing
    const intervals = [800, 1200, 1500, 1000, 800, 600, 400];
    
    function nextStage() {
        if (currentStage < progressStages.length) {
            updateProgress(progressStages[currentStage]);
            currentStage++;
            
            if (currentStage < progressStages.length) {
                setTimeout(nextStage, intervals[currentStage - 1] || 500);
            }
        }
    }
    
    // Start progress animation
    nextStage();
}

form.addEventListener('submit', (e) => {
    showProgressBar();
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Animate feature cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${Math.random() * 0.3}s`;
                entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            }
        });
    });

    document.querySelectorAll('.feature-card').forEach(card => {
        observer.observe(card);
    });

    // Textarea auto-resize
    const textarea = document.getElementById('email-input');
    textarea.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 300) + 'px';
    });
});

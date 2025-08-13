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

// Loading Animation
const form = document.getElementById('email-form');
const loading = document.getElementById('loading');

form.addEventListener('submit', () => {
    loading.classList.remove('hidden');
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

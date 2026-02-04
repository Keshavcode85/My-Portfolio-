// ========== PAGE NAVIGATION SYSTEM ==========
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Function to show specific page
function showPage(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Remove active class from all nav links
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.querySelector(pageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    }
    
    // Add active class to clicked nav link
    const activeLink = document.querySelector(`a[href="${pageId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Add click event to navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('href');
        showPage(pageId);
        
        // Update URL hash without jumping
        history.pushState(null, null, pageId);
    });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const hash = window.location.hash || '#home';
    showPage(hash);
});

// Show correct page on load based on URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash || '#home';
    showPage(hash);
});

// ========== TYPING ANIMATION FOR "HEY, I'M KESHAV" ==========
const greetingText = "Hey, I'm Keshav 👋";
const greetingElement = document.getElementById('greeting');
let charIndex = 0;

function typeGreeting() {
    if (charIndex < greetingText.length) {
        greetingElement.textContent += greetingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeGreeting, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(typeGreeting, 500);
});

// ========== ROTATING SKILLS ANIMATION ==========
const skills = [
    'Web Developer',
    'Frontend Enthusiast',
    'Backend Developer',
    'Problem Solver',
    'Creative Coder'
];

let skillIndex = 0;
const skillElement = document.getElementById('skillRotate');

function rotateSkill() {
    // Fade out
    skillElement.style.opacity = '0';
    
    setTimeout(() => {
        // Change text
        skillIndex = (skillIndex + 1) % skills.length;
        skillElement.textContent = skills[skillIndex];
        
        // Fade in
        skillElement.style.opacity = '1';
    }, 500);
}

// Initialize first skill
if (skillElement) {
    skillElement.textContent = skills[0];
    
    // Rotate skills every 3 seconds
    setInterval(rotateSkill, 3000);
}

// ========== HEADER BACKGROUND ON SCROLL ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.7)';
    }
});

// ========== SKILL CARDS ANIMATION ON SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

// Observe skill cards and project cards with initial hidden state
document.querySelectorAll('.skill-card, .project, .tool-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// ========== CONTACT FORM SUBMISSION ==========
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && subject && message) {
            alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon at ${email}.`);
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ========== SMOOTH SCROLL TO TOP ON PAGE CHANGE ==========
function smoothScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== CONSOLE MESSAGE ==========
console.log('%c👋 Hey there! Welcome to my portfolio!', 'color: #3498db; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Built with HTML, CSS & JavaScript', 'color: #2ecc71; font-size: 14px;');
console.log('%c💼 Looking to collaborate? Let\'s connect!', 'color: #e74c3c; font-size: 14px;');

// ========== PREVENT DEFAULT ANCHOR BEHAVIOR ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
    });
});
// JavaScript to switch highlighted navbar link
function setActive(element) {
    // Remove the 'active' class from all navbar links
    const navLinks = document.querySelectorAll('.topnav a');
    navLinks.forEach(link => link.classList.remove('active'));

    // Add the 'active' class to the clicked link
    element.classList.add('active');
}

// Optional: Smooth scroll to top when 'Home' is clicked
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// JavaScript for section pop-up animations
const hiddenSections = document.querySelectorAll('.hidden');

// Function to reveal sections with animation
function revealSections() {
    hiddenSections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) { // Adjust the threshold as needed
            section.classList.add('revealed');
        }
    });
}

// Listen for scroll events for animations
window.addEventListener('scroll', revealSections);

// Initial check for animations
document.addEventListener('DOMContentLoaded', revealSections);

// Scroll-based navbar sync with sections
const sections = document.querySelectorAll('div[id]'); // Select all sections with an id
const navbarLinks = document.querySelectorAll('.topnav a');

// Use IntersectionObserver to detect section visibility
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // Section is considered active when 60% of it is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Highlight the corresponding navbar link
            navbarLinks.forEach(link => {
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    });
}, observerOptions);

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});

// Initial navbar sync
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = sections[0];
    navbarLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === firstSection.id) {
            link.classList.add('active');
        }
    });
});

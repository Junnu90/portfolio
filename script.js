// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Year Update in Footer
document.addEventListener("DOMContentLoaded", function() {
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector("footer p").appendChild(yearSpan);
});

// Simple Animation Effect on Scroll
window.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".project");
    let windowHeight = window.innerHeight;

    elements.forEach(el => {
        let position = el.getBoundingClientRect().top;

        if (position < windowHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlight
    const currentPage = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// index.js - Homepage specific
document.addEventListener('DOMContentLoaded', function() {
    const joinButton = document.querySelector('.join-button');
    if (joinButton) {
        joinButton.addEventListener('click', function() {
            window.location.href = 'support-us.html';
        });
    }
});

// who-we-are.js - Who We Are page specific
document.addEventListener('DOMContentLoaded', function() {
    // Add animation for text content
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('fade-in');
    }
});

// what-we-do.js - What We Do page specific
document.addEventListener('DOMContentLoaded', function() {
    // Image gallery animation
    const images = document.querySelectorAll('.image-gallery img');
    if (images.length) {
        images.forEach(img => {
            img.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });
            img.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
});

// support-us.js - Support Us page specific
document.addEventListener('DOMContentLoaded', function() {
    // Donation amount selection
    const donationButtons = document.querySelectorAll('.donation-amount');
    if (donationButtons.length) {
        donationButtons.forEach(button => {
            button.addEventListener('click', function() {
                donationButtons.forEach(btn => btn.classList.remove('selected'));
                this.classList.add('selected');
            });
        });
    }
});

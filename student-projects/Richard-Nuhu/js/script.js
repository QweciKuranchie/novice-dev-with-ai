/**
 * Morning Brew Cafe - Interactive Script
 * Features: Sticky Header, Smooth Scrolling, and Custom Dynamic Submission Toast
 */

document.addEventListener('DOMContentLoaded', () => {
    // === 1. Sticky & Dynamic Navigation ===
    const header = document.querySelector('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on load

    // === 2. Smooth Scrolling for Navigation Links ===
    const navLinks = document.querySelectorAll('nav a, footer a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Only handle internal hashes
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Smoothly scroll to the element
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Add dynamic hash to URL after scroll
                    window.history.pushState(null, null, targetId);
                }
            }
        });
    });

    // === 3. Contact Form Submission Handler & Dynamic Toast ===
    const contactForm = document.querySelector('#contact form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Intercept form submission, preventing PHP crash

            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            
            const customerName = nameInput ? nameInput.value.trim() : 'Guest';

            // Custom Toast Notification System
            showToast(`☕ Thank you, ${customerName}! Your message has been brewed and sent successfully. We will reach out shortly!`);

            // Clear inputs with transition
            contactForm.reset();
        });
    }

    // === Helper: Show Toast Notification ===
    function showToast(message) {
        // Remove existing toast if present
        const existingToast = document.querySelector('.cafe-toast');
        if (existingToast) {
            existingToast.remove();
        }

        // Create new toast container
        const toast = document.createElement('div');
        toast.className = 'cafe-toast';
        
        // Add content & inner elements
        toast.innerHTML = `
            <div class="cafe-toast-content">
                <p>${message}</p>
            </div>
            <div class="cafe-toast-progress"></div>
        `;

        // Append toast to the document body
        document.body.appendChild(toast);

        // Slide-in transition delay
        setTimeout(() => {
            toast.classList.add('visible');
        }, 10);

        // Auto-remove toast after 4 seconds
        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => {
                toast.remove();
            }, 400); // Wait for transition out
        }, 4000);
    }

    // === 4. Testimonial Slider ===
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (slides.length > 0) {
        let currentSlide = 0;
        let slideInterval;

        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            // Loop around index
            currentSlide = (index + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.add('active');
            }
        };

        const nextSlide = () => {
            showSlide(currentSlide + 1);
        };

        const prevSlide = () => {
            showSlide(currentSlide - 1);
        };

        // Button Click Listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoplay();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoplay();
            });
        }

        // Dot Click Listeners
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'), 10);
                showSlide(index);
                resetAutoplay();
            });
        });

        // Autoplay Functionality
        const startAutoplay = () => {
            slideInterval = setInterval(nextSlide, 6000); // Transitions every 6 seconds
        };

        const resetAutoplay = () => {
            clearInterval(slideInterval);
            startAutoplay();
        };

        // Initialize Slider Autoplay
        startAutoplay();
    }
});

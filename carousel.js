// Simple Carousel - Working Version
let currentSlideIndex = 0;
const totalSlides = 3;
let autoSlideTimer;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing carousel...');
    initCarousel();
});

function initCarousel() {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    console.log('Found slides:', slides.length);
    
    if (slides.length === 0) {
        console.error('No carousel slides found');
        return;
    }
    
    // Show first slide
    showCurrentSlide();
    
    // Start auto rotation
    startAutoRotation();
    
    // Pause on hover
    const carouselSection = document.querySelector('.carousel-section');
    if (carouselSection) {
        carouselSection.addEventListener('mouseenter', stopAutoRotation);
        carouselSection.addEventListener('mouseleave', startAutoRotation);
    }
}

function showCurrentSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    console.log('Showing slide index:', currentSlideIndex);
    
    // Remove active from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active to current slide and dot
    if (slides[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
        console.log('Activated slide:', currentSlideIndex);
    }
    
    if (dots[currentSlideIndex]) {
        dots[currentSlideIndex].classList.add('active');
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showCurrentSlide();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showCurrentSlide();
}

function goToSlide(index) {
    currentSlideIndex = index;
    showCurrentSlide();
    restartAutoRotation();
}

function changeSlide(direction) {
    if (direction === 1) {
        nextSlide();
    } else {
        prevSlide();
    }
    restartAutoRotation();
}

function currentSlide(slideNumber) {
    goToSlide(slideNumber - 1); // Convert to 0-based index
}

function startAutoRotation() {
    stopAutoRotation();
    autoSlideTimer = setInterval(nextSlide, 4000);
    console.log('Auto rotation started');
}

function stopAutoRotation() {
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
        console.log('Auto rotation stopped');
    }
}

function restartAutoRotation() {
    stopAutoRotation();
    setTimeout(startAutoRotation, 1000); // Wait 1 second before restarting
}
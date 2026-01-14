// Slide Presentation Controller
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideCounter = document.getElementById('slideCounter');
    const progressFill = document.getElementById('progressFill');
    
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Update slide display
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev');
            if (i < index) slide.classList.add('prev');
            if (i === index) slide.classList.add('active');
        });
        
        slideCounter.textContent = `${index + 1} / ${totalSlides}`;
        progressFill.style.width = `${((index + 1) / totalSlides) * 100}%`;
        
        // Update button states
        prevBtn.style.opacity = index === 0 ? '0.3' : '1';
        nextBtn.style.opacity = index === totalSlides - 1 ? '0.3' : '1';
    }

    // Navigation functions
    function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            showSlide(currentSlide);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
            showSlide(currentSlide);
        }
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        switch(e.key) {
            case 'ArrowRight':
            case ' ':
            case 'Enter':
                e.preventDefault();
                nextSlide();
                break;
            case 'ArrowLeft':
            case 'Backspace':
                e.preventDefault();
                prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                currentSlide = 0;
                showSlide(currentSlide);
                break;
            case 'End':
                e.preventDefault();
                currentSlide = totalSlides - 1;
                showSlide(currentSlide);
                break;
        }
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) nextSlide();  // Swipe left
            else prevSlide();            // Swipe right
        }
    }

    // Initialize
    showSlide(currentSlide);

    // Auto-hide keyboard hint after first navigation
    const keyboardHint = document.querySelector('.keyboard-hint');
    const hideHint = () => {
        keyboardHint.style.transition = 'opacity 0.5s ease';
        keyboardHint.style.opacity = '0';
        setTimeout(() => keyboardHint.style.display = 'none', 500);
    };
    
    document.addEventListener('keydown', hideHint, { once: true });
    nextBtn.addEventListener('click', hideHint, { once: true });
    prevBtn.addEventListener('click', hideHint, { once: true });
});

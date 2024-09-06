let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;
    
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    
    // Camera flash animation
    const btn = document.querySelector(`.dropdown-btn[onclick="toggleDropdown('${id}')"]`);
    btn.classList.add('flash');
    setTimeout(() => btn.classList.remove('flash'), 1000);
}

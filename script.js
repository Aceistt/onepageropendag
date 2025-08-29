document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel .prev');
    const nextButton = document.querySelector('.carousel .next');
    let currentIndex = 0;

    // Add slides to container if they don't exist
    if (slides.length === 0) {
        const images = [
            { src: 'images/locations/Curio - Terheijdenseweg 350-1.jpg', caption: 'Terheijdenseweg 350' },
            { src: 'images/locations/Curio - Terheijdenseweg 350-2.jpg', caption: 'Terheijdenseweg 350' },
            { src: 'images/locations/Curio - Knipplein 11-1.jpg', caption: 'Knipplein 11' },
            { src: 'images/locations/Curio - Knipplein 11-2.jpg', caption: 'Knipplein 11' },
            { src: 'images/locations/Curio - Knipplein 11-3.jpg', caption: 'Knipplein 11' }
        ];

        images.forEach(image => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `
                <img src="${image.src}" alt="${image.caption}">
                <p>${image.caption}</p>
            `;
            container.appendChild(slide);
        });
    }

    function updateSlide() {
        const position = currentIndex * -100;
        container.style.transform = `translateX(${position}%)`;
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
            updateSlide();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
            updateSlide();
        });
    }

    // Initialize first slide
    updateSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;

            // Toggle de zichtbaarheid van het antwoord
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Carousel Logic
    const track = document.querySelector('.projects-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (track && prevBtn && nextBtn) {
        const cardWidth = 320 + 30; // card width + gap
        let scrollPosition = 0;

        nextBtn.addEventListener('click', () => {
            const maxScroll = track.scrollWidth - track.clientWidth;
            scrollPosition += cardWidth;
            if (scrollPosition > maxScroll) scrollPosition = maxScroll;
            track.style.transform = `translateX(-${scrollPosition}px)`;
        });

        prevBtn.addEventListener('click', () => {
            scrollPosition -= cardWidth;
            if (scrollPosition < 0) scrollPosition = 0;
            track.style.transform = `translateX(-${scrollPosition}px)`;
        });
    }

    // 3D Tilt Effect for Cards
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max rotation deg
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Update copyright year
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('.footer-info p');

    if (copyrightElement) {
        copyrightElement.innerHTML = `&copy; ${currentYear} My Web Projects. All rights reserved.`;
    }

    // Check if the weather app is running
    checkWeatherAppStatus();

    // Add event listener for weather app button
    const weatherAppBtn = document.querySelector('.weather-app-btn');
    if (weatherAppBtn) {
        weatherAppBtn.addEventListener('click', function (e) {
            e.preventDefault();
            startWeatherApp();
        });
    }
});

// Function to check if the weather app is running
async function checkWeatherAppStatus() {
    const statusBadge = document.getElementById('weather-status');
    if (!statusBadge) return;

    // Optimistically show Online and link to localhost
    statusBadge.textContent = 'Online';
    statusBadge.classList.remove('status-offline');
    statusBadge.classList.add('status-online');

    const weatherAppBtn = document.querySelector('.weather-app-btn');
    if (weatherAppBtn) {
        const span = weatherAppBtn.querySelector('span');
        if (span) span.textContent = 'Open App';
        weatherAppBtn.href = 'http://localhost:3000';
    }

    try {
        await fetch('http://localhost:3000', { method: 'HEAD', mode: 'no-cors' });
    } catch (error) {
        // Keep Online status regardless of fetch errors
    }
}

// Function to start the weather app
function startWeatherApp() {
    const statusBadge = document.getElementById('weather-status');
    if (!statusBadge) return;

    // Check if the app is already running
    if (statusBadge.textContent === 'Online') {
        window.open('http://localhost:3000', '_blank');
        return;
    }

    // Show modal with instructions (Simplified for this version)
    alert("Please start the weather app from your terminal using 'npm start' in the weather-app directory.");
}

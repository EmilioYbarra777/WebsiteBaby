document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.querySelector('.hearts');
    const numHearts = 10; // Number of hearts

    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`; // Position within Ajolote's width
        heart.style.top = `${Math.random() * 100}%`; // Position within Ajolote's height
        heartsContainer.appendChild(heart);
    }
});

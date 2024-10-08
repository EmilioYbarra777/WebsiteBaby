﻿// Replace this with your specific date
const startDate = new Date('2024-02-23'); 
const now = new Date();

const timeElapsed = (now - startDate) / (1000 * 60 * 60 * 24); // Time elapsed in days

// Calculate years, months, days for a more readable format
const years = Math.floor(timeElapsed / 365);
const months = Math.floor((timeElapsed % 365) / 30);
const days = Math.floor((timeElapsed % 365) % 30);

// Format the time elapsed string
const timeElapsedString = `${months} months, and ${days} days`;

// Update the placeholder with the calculated time
document.getElementById('time_elapsed').innerText = `${timeElapsedString}!!! Let's go for more.`;



document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});

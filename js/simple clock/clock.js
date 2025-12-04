// Digital Clock - Real-time clock display
function updateClock() {
    // Get current date and time
    const now = new Date();

    // Format time (HH:MM:SS)
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    // Format date (Day, Month Date, Year)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    const dateString = `${dayName}, ${monthName} ${date}, ${year}`;

    // Update DOM elements
    document.getElementById('timeDisplay').textContent = timeString;
    document.getElementById('dateDisplay').textContent = dateString;
}

// Update clock every second
updateClock(); // Initial call to avoid delay
setInterval(updateClock, 1000);
